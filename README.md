# customdomain.xyz

A demo of TAGBASE verification running on a brand's own domain, and the
reference consumer of [`@tagbase-io/verify`](../monorepo/packages/verify-js).

A customer taps a tag, the chip sends them here with a `?tid=` parameter, and
this page reads the result behind it. With no `tid` it explains itself and
points at the docs.

Every product detail on the page comes from the API: title, description,
images, documents. No product is described in this repository.

## Running it

```sh
bun install
bun run dev          # http://localhost:8080
```

Point it at a local verification server with a `.env` (see `.env.example`):

```sh
VITE_TAGBASE_BASE_URL=http://localhost:4002
```

Then open a URL carrying a real verification id: `http://localhost:8080/?tid=vrf_...`

Cross-origin reads need CORS on the verification endpoint, which the server
derives from the product's `redirect_url`. Set that to the origin this page is
served from, or the browser blocks the response before the page sees it.

## Deploying

`.github/workflows/pages.yml` builds and publishes to GitHub Pages on a push to
`main`. `public/CNAME` holds the domain and the build copies `index.html` to
`404.html`, so any path renders the app.

**The workflow cannot run yet.** `@tagbase-io/verify` is wired in as a local
`file:` dependency pointing into the monorepo, and that path does not exist on
a CI runner. Publish the package to npm and change the dependency to a version
range, then the workflow works as written.

## DNS

Two records on the same domain, which is what lets the cookies work:

| Host                      | Points at             | Serves               |
| ------------------------- | --------------------- | -------------------- |
| `customdomain.xyz`        | GitHub Pages          | this site            |
| `verify.customdomain.xyz` | `external.tagbase.io` | the verification API |

They share a registrable domain, so a cookie written here is visible there.
That is what carries the first tap through to the second. Serve the page from
one domain and the verification host from another and the cookie becomes third
party, which modern browsers block.

## Structure

```
src/
  App.tsx                  one page: explainer, or the result
  hooks/useVerification.ts the only call to the API
  components/
    Explainer.tsx          shown when no tag sent you here
    Verification.tsx       status and the messages the server sends
    Gallery.tsx            product images
    Product.tsx            title, description, tag data
    Documents.tsx          downloads
    Header.tsx  Footer.tsx
```

Four runtime dependencies: `react`, `react-dom`, `lucide-react` for the icons,
and `@tagbase-io/verify`. Animation is CSS. There is no router, no state library,
and no component library, because one page needs none of them.
