import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DOCS = "https://verify.tagbase.io/docs/your-domain/external-verification";

/** Served for every unknown path. The root redirects to the docs instead. */
const NotFound = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />

    <div className="flex flex-1 items-center justify-center px-5 py-16 sm:px-14">
      <div className="flex max-w-[520px] flex-col items-start gap-5">
        <h1 className="font-display text-[34px] leading-tight sm:text-[40px]">
          There is nothing at this address
        </h1>

        <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
          This page shows the result of a tag tap, and no tag sent you here. If you tapped one, the
          link should carry a <code className="font-mono">?tid=</code> parameter.
        </p>

        <a
          href={DOCS}
          className="mt-1 font-body text-sm text-accent transition-colors hover:text-[#8a6414] dark:hover:text-[#f0dcae]"
        >
          Read the documentation
        </a>
      </div>
    </div>

    <Footer />
  </div>
);

export default NotFound;
