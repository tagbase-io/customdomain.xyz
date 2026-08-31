import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";

const DOCS = "https://verify.tagbase.io/docs/your-domain/external-verification";
const HOW_IT_WORKS = "https://verify.tagbase.io/docs/overview/how-it-works";
const REPO = "https://github.com/tagbase-io/customdomain.xyz";
const NPM = "https://www.npmjs.com/package/@tagbase-io/verify";
const WEBSITE = "https://www.tagbase.io";

const steps = [
  {
    title: "Your customer taps the tag",
    body: "The tag answers the phone with material it makes on the spot. The customer lands on your site, with the id of the result in a ?tid parameter.",
  },
  {
    title: "Your page asks what the tag said",
    body: "One call to verify(). You get the verdict, the product on that tag, its pictures, its documents, and the words to show the customer.",
  },
  {
    title: "The second tap settles it",
    body: "The first tap proves the material is valid. The second proves it is new, which a copy cannot do. That is why the first tap reads pending.",
  },
];

const PROMPT = `Add TAGBASE product verification to this site.

1. Load the client with one script tag. There is nothing to install:
   <script src="https://cdn.jsdelivr.net/npm/@tagbase-io/verify"></script>
   It puts verify and VerifyError on window.tagbase.
2. Build the page the tag sends people to. Call
   tagbase.verify({ baseUrl }), where baseUrl is the subdomain pointed
   at TAGBASE, for example https://verify.example.com. The tag puts
   the id of the result in the ?tid parameter and verify() reads it.
3. Show what comes back: result.status, result.messages (the words for
   the customer), result.title, result.description, result.imageUrls,
   result.data and result.documents.
4. Write all four statuses. 'pending' asks for a second tap. 'valid'
   and 'valid_with_warnings' show the product. 'invalid' warns the
   customer that the item may be a copy.
5. Catch VerifyError. Its code is 'no_id', 'not_found', 'network' or
   'server'. Write a page for a tag we have no record of.

Read https://verify.tagbase.io/docs/your-domain/external-verification
first. This page does all of it, and its source is at
https://github.com/tagbase-io/customdomain.xyz.`;

const SCRIPT = `<script src="https://cdn.jsdelivr.net/npm/@tagbase-io/verify"></script>`;

const IMPORT_MAP = `<script type="importmap">
  {
    "imports": {
      "@tagbase-io/verify": "https://esm.sh/@tagbase-io/verify"
    }
  }
</script>`;

const USAGE = `const { verify, VerifyError } = tagbase

try {
  const result = await verify({ baseUrl: 'https://verify.yoursite.com' })

  result.status    // 'pending', 'valid', 'valid_with_warnings', 'invalid'
  result.messages  // what to tell your customer
  result.title     // the product this tag is on
  result.imageUrls // its pictures
  result.documents // its certificates
} catch (error) {
  if (error instanceof VerifyError) {
    // 'no_id', 'not_found', 'network' or 'server'
  }
}`;

const reading = [
  {
    title: "How TAGBASE works",
    body: "What the tag answers with, and why a copy fails the second tap.",
    href: HOW_IT_WORKS,
  },
  {
    title: "Verification on your own domain",
    body: "The CNAME, the four statuses, and the errors to catch.",
    href: DOCS,
  },
  {
    title: "This page on GitHub",
    body: "The full source, down to the failed check and the unknown tag.",
    href: REPO,
  },
  {
    title: "@tagbase-io/verify on npm",
    body: "The client itself, if you would rather install it than load it.",
    href: NPM,
  },
  {
    title: "tagbase.io",
    body: "What TAGBASE is, and how to get tags for your products.",
    href: WEBSITE,
  },
];

const Explainer = () => (
  <div className="mx-auto max-w-3xl animate-fade-up py-16 sm:py-24">
    <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent">
      A TAGBASE demonstration
    </p>

    <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
      Add TAGBASE to your website.
    </h1>

    <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
      This is a demo of a TAGBASE check on a site like yours. It takes one script tag and one
      call, so nothing else about your site has to change. Your coding agent can do it from the
      brief below in a few minutes.
    </p>

    <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
      You came here without tapping a tag, so there is nothing to check. This is what a customer
      gets when they do.
    </p>

    <ol className="mt-12 space-y-8">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-5">
          <span
            aria-hidden
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border font-body text-xs text-muted-foreground"
          >
            {index + 1}
          </span>
          <div>
            <h2 className="font-display text-xl">{step.title}</h2>
            <p className="mt-1.5 font-body leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>

    <section className="mt-20">
      <h2 className="font-display text-2xl sm:text-[26px]">Hand it to your coding agent</h2>

      <p className="mt-2 font-body leading-relaxed text-muted-foreground">
        Copy this into Claude Code, Cursor, or whatever you build with. It writes the page against
        your site.
      </p>

      <Snippet text={PROMPT} />
    </section>

    <section className="mt-20">
      <h2 className="font-display text-2xl sm:text-[26px]">Or write it yourself</h2>

      <p className="mt-2 font-body leading-relaxed text-muted-foreground">
        First point a subdomain of your site at TAGBASE. The CNAME is in your dashboard. Then load
        the client. One script tag, nothing to install, and it gives you tagbase.verify. This page
        loads it that way:
      </p>

      <Snippet text={SCRIPT} />

      <p className="mt-6 font-body leading-relaxed text-muted-foreground">
        Call it on the page the tag sends people to, then show the answer:
      </p>

      <Snippet text={USAGE} />

      <p className="mt-6 font-body leading-relaxed text-muted-foreground">
        If your page imports by name, point an import map at the same client:
      </p>

      <Snippet text={IMPORT_MAP} />

      <p className="mt-6 font-body leading-relaxed text-muted-foreground">
        This page is on GitHub with all four statuses written out.{" "}
        <Link href={REPO}>Read the source</Link>.
      </p>
    </section>

    <section className="mt-20">
      <h2 className="font-display text-2xl sm:text-[26px]">Read more</h2>

      <ul className="-mx-4 mt-5 border-t border-border">
        {reading.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group flex items-baseline justify-between gap-6 border-b border-border px-4 py-4 transition-colors hover:bg-foreground/[0.03]"
            >
              <span className="min-w-0">
                <span className="font-body text-sm transition-colors group-hover:text-accent">
                  {item.title}
                </span>
                <span className="mt-0.5 block font-body text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const Snippet = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4 rounded border border-border bg-card">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        className="absolute right-2 top-2 rounded p-2 text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-accent"
      >
        {copied ? (
          <Check className="h-4 w-4 text-accent" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>

      <pre className="overflow-x-auto p-4 pr-14 font-mono text-[13px] leading-relaxed">
        <code>{text}</code>
      </pre>
    </div>
  );
};

const Link = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    className="font-body text-sm text-accent transition-colors hover:text-[#8a6414] dark:hover:text-[#f0dcae]"
  >
    {children}
  </a>
);

export default Explainer;
