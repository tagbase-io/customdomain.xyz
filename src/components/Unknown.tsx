import Footer from "@/components/Footer";
import Header from "@/components/Header";

/**
 * Shown when the address names no verification we hold, and when the check
 * could not be made at all. Neither is a verdict on the product.
 */
const Unknown = ({ message }: { message: string }) => (
  <div className="flex min-h-screen flex-col bg-background">
    <Header />

    <div className="flex flex-1 items-center justify-center px-5 py-16 sm:px-14">
      <div className="flex max-w-[520px] flex-col items-start gap-5">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-accent"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2.5 4 6v6c0 4.4 3.2 8.2 8 9.5 4.8-1.3 8-5.1 8-9.5V6z" />
          <path d="M12 8.6v4.2" />
          <path d="M12 16.2h.01" />
        </svg>

        <h1 className="font-display text-[34px] leading-tight sm:text-[40px]">
          We have no record of this tag
        </h1>

        <p className="font-body text-[15px] leading-relaxed text-muted-foreground">{message}</p>

        <p className="font-body text-[15px] leading-relaxed text-muted-foreground">
          If it keeps happening, the tag may not be one of ours.
        </p>

        <div className="mt-1 flex gap-6 font-body text-sm">
          <a
            href="https://verify.tagbase.io/docs/your-domain/external-verification"
            className="text-accent transition-colors hover:text-[#8a6414] dark:hover:text-[#f0dcae]"
          >
            Read the documentation
          </a>
          <a
            href="https://verify.tagbase.io/docs/resources/support"
            className="text-accent transition-colors hover:text-[#8a6414] dark:hover:text-[#f0dcae]"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Unknown;
