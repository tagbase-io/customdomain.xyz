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
    body: "A TAGBASE tag sits on the product. Held against a phone, it answers with material it generates on the spot, and sends your customer to your own site with the result's id in the address.",
  },
  {
    title: "Your page asks what the tag said",
    body: "One call to verify(). Back comes the verdict, the product behind that exact tag, its images, its documents, and the words to show your customer.",
  },
  {
    title: "The second tap settles it",
    body: "One tap proves the material is valid. A second tap proves it is new, which a copied tag cannot manage. That is why the first tap reads pending rather than authentic.",
  },
];

const PROMPT = `Add TAGBASE product verification to this site.

1. Install the client: npm install @tagbase-io/verify
2. Build the page a tag sends people to. It calls verify({ baseUrl })
   from '@tagbase-io/verify', where baseUrl is the subdomain pointed
   at TAGBASE, for example https://verify.example.com. The tag puts
   the result's id in the ?tid query parameter and verify() reads it.
3. Render what comes back: result.status, result.messages (the words
   to show the customer), result.title, result.description,
   result.imageUrls, result.data and result.documents.
4. Cover all four statuses. 'pending' asks for a second tap. 'valid'
   and 'valid_with_warnings' show the product. 'invalid' warns the
   customer that the item may be a copy.
5. Catch VerifyError. Its code is 'no_id', 'not_found', 'network'
   or 'server'. Write a page for a tag we have no record of.

This page is a working example. Read its source at
https://github.com/tagbase-io/customdomain.xyz for a complete
implementation of every status.

Read https://verify.tagbase.io/docs/your-domain/external-verification
before you start.`;

const CODE = `npm install @tagbase-io/verify`;

const USAGE = `import { verify, VerifyError } from '@tagbase-io/verify'

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
    body: "What the chip answers with, and why a copy cannot pass the second tap.",
    href: HOW_IT_WORKS,
  },
  {
    title: "Verification on your own domain",
    body: "The guide behind this page. Setting up the CNAME, and what every status means.",
    href: DOCS,
  },
  {
    title: "This page on GitHub",
    body: "The full source, including the pages for a failed check and an unknown tag.",
    href: REPO,
  },
  {
    title: "@tagbase-io/verify on npm",
    body: "The client itself. It is one function, and it pulls in nothing you have to maintain.",
    href: NPM,
  },
  {
    title: "tagbase.io",
    body: "What TAGBASE is, and how to get tags for your own products.",
    href: WEBSITE,
  },
];

const Explainer = () => (
  <div className="mx-auto max-w-3xl animate-fade-up py-16 sm:py-24">
    <p className="font-body text-[11px] uppercase tracking-[0.2em] text-accent">
      A TAGBASE demonstration
    </p>

    <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
      Put proof of authenticity on the site you already own.
    </h1>

    <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
      customdomain.xyz demonstrates a TAGBASE check running on a brand&rsquo;s own domain. Your
      Brand stands in for yours, so you can see what a customer meets after tapping a tag, and read
      the code that puts it there.
    </p>

    <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
      You arrived without tapping a tag, so there is nothing to check. Here is what happens when
      somebody does.
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
        Copy the brief below into Claude Code, Cursor or whatever you build with, and let it write
        the page against your own site.
      </p>

      <Snippet text={PROMPT} />
    </section>

    <section className="mt-20">
      <h2 className="font-display text-2xl sm:text-[26px]">Or write it yourself</h2>

      <p className="mt-2 font-body leading-relaxed text-muted-foreground">
        Point a subdomain of your site at TAGBASE, so the check runs on your domain rather than
        ours. You will find the CNAME in your dashboard. Then install the client:
      </p>

      <Snippet text={CODE} />

      <p className="mt-6 font-body leading-relaxed text-muted-foreground">
        On the page the tag sends people to, ask what the tag said and render the answer. The page
        you are looking at is one call and a handful of components.
      </p>

      <Snippet text={USAGE} />

      <p className="mt-6 font-body leading-relaxed text-muted-foreground">
        This whole page is on GitHub. If you would rather see how a real page handles each status
        than read about it, <Link href={REPO}>read the source</Link>.
      </p>
    </section>

    <section className="mt-20">
      <h2 className="font-display text-2xl sm:text-[26px]">If you want to go deeper</h2>

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
