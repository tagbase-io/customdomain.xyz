// Serves the built site. Vite's preview server rejects unknown Host headers,
// which is exactly what a tunnel sends, so this serves dist/ directly.
//
// It also forwards /api to a verification server. Over a tunnel the page is
// HTTPS while a local server is HTTP, and a browser refuses that mix. Going
// through the same origin sidesteps it, and lets the session cookie work the
// way it does for a real brand on its own domain.
import { file } from "bun";
import { join, normalize, sep } from "node:path";

const root = join(import.meta.dir, "dist");
const port = Number(Bun.env.PORT ?? 4173);
const api = Bun.env.API_ORIGIN ?? "http://localhost:4002";

// This is reachable from the public internet through the tunnel, so a request
// must never read its way out of dist/.
function resolve(pathname: string): string | null {
  const candidate = normalize(join(root, decodeURIComponent(pathname)));
  return candidate === root || candidate.startsWith(root + sep) ? candidate : null;
}

async function proxy(request: Request, pathname: string, search: string): Promise<Response> {
  const headers = new Headers(request.headers);
  headers.delete("host");

  const response = await fetch(api + pathname + search, {
    method: request.method,
    headers,
    body: request.body,
    redirect: "manual",
  });

  // fetch already decoded the body, so passing the upstream content-encoding
  // through would have the browser try to gunzip plain bytes.
  const out = new Headers(response.headers);
  out.delete("content-encoding");
  out.delete("content-length");

  return new Response(response.body, { status: response.status, headers: out });
}

Bun.serve({
  port,
  idleTimeout: 30,
  async fetch(request) {
    const { pathname, search } = new URL(request.url);

    // Both the scan and the read go through here, so a tunnelled demo keeps
    // one origin: the session cookie stays first party and the page runs in a
    // secure context, which private-browsing detection needs.
    if (pathname.startsWith("/api/") || pathname.startsWith("/verify/")) {
      return proxy(request, pathname, search);
    }

    const path = resolve(pathname === "/" ? "/index.html" : pathname);

    if (path) {
      const asset = file(path);
      if (await asset.exists()) return new Response(asset);
    }

    // One page, so any other path renders the app rather than a dead end.
    return new Response(file(join(root, "index.html")), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`serving ${root} on http://localhost:${port}, /api to ${api}`);
