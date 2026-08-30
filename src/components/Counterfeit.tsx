import type { Verification } from "@tagbase-io/verify";

import Footer from "@/components/Footer";
import DemoNote from "@/components/DemoNote";
import Header from "@/components/Header";
import PrivateBrowsing from "@/components/PrivateBrowsing";

const DemoAction = ({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) => (
  <span className="group relative inline-flex cursor-default">
    <span
      className={`inline-flex items-center gap-2.5 rounded-sm px-5 py-3 font-body text-sm ${
        primary
          ? "bg-[#ff5b7f] font-medium text-[#17090d]"
          : "border border-[#5c2c38] text-[#f7ecee]"
      }`}
    >
      {children}
    </span>
    <span className="pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#f7ecee] px-3 py-1.5 font-body text-xs text-[#17090d] opacity-0 transition-opacity group-hover:opacity-100">
      Not available on this demo page
    </span>
    <span className="pointer-events-none absolute bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#f7ecee] opacity-0 transition-opacity group-hover:opacity-100" />
  </span>
);

/**
 * A failed check does not get the calm layout. The page changes ground, so a
 * customer can tell across a room that something is wrong.
 */
const Counterfeit = ({ verification }: { verification: Verification | null }) => (
  <div className="flex min-h-screen flex-col bg-[#17090d] text-[#f7ecee]">
    <Header onDark />

    <div className="border-b border-[#3a1c24] px-5 py-10 sm:px-14 sm:py-14">
      <div className="flex items-start gap-5 sm:gap-6">
        <svg
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5b7f"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1.5 hidden shrink-0 sm:block"
          aria-hidden
        >
          <path d="M12 2.5 4 6v6c0 4.4 3.2 8.2 8 9.5 4.8-1.3 8-5.1 8-9.5V6z" />
          <path d="m9.2 9.2 5.6 5.6" />
          <path d="m14.8 9.2-5.6 5.6" />
        </svg>

        <div className="flex flex-col gap-3.5">
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-[#ff5b7f]">
            Failed the check
          </p>
          <h1 className="font-display text-[42px] leading-[0.98] tracking-[-0.015em] text-white sm:text-[68px]">
            Do not trust
            <br />
            this product.
          </h1>
          <p className="max-w-[620px] font-body text-[15px] leading-relaxed text-[#e0c4cb] sm:text-base">
            The tag on this item did not answer the way a genuine one does. It may be a copy, and
            anything printed on it may be a copy too.
          </p>
        </div>
      </div>

      {verification?.incognito && (
        <div className="mt-8 sm:ml-[76px]">
          <PrivateBrowsing onDark />
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3 sm:ml-[76px]">
        <DemoAction primary>
          Report this to us
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#17090d"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h13" />
            <path d="m12 6 6 6-6 6" />
          </svg>
        </DemoAction>
        <DemoAction>Where did you buy it?</DemoAction>
      </div>
    </div>

    <div className="flex-1 px-5 py-10 sm:px-14 sm:py-12">
      <p className="font-body text-[11px] uppercase tracking-[0.18em] text-[#a9808c]">
        {verification?.imageUrls[0]
          ? "What the genuine article looks like"
          : "What the genuine article is"}
      </p>

      <div
        className={`mt-5 grid gap-8 lg:gap-12 ${verification?.imageUrls[0] ? "lg:grid-cols-2" : ""}`}
      >
        {verification?.imageUrls[0] && (
          <div className="flex flex-col gap-3">
            <img
              src={verification.imageUrls[0]}
              alt=""
              className="aspect-[16/10] w-full rounded-sm border border-[#3a1c24] object-cover opacity-40 grayscale"
            />
            <p className="font-body text-xs leading-relaxed text-[#a9808c]">
              These pictures show the genuine product, not the one you are holding.
            </p>
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="font-display text-2xl leading-tight text-[#e0c4cb] sm:text-[27px]">
            {verification?.title}
          </h2>
          {verification?.description && (
            <p className="mt-2.5 font-body text-sm leading-relaxed text-[#a9808c]">
              {verification.description}
            </p>
          )}

          {verification && verification.documents.length > 0 && (
            <div className="mt-6 flex flex-col gap-2.5">
              <p className="font-body text-[11px] uppercase tracking-[0.14em] text-[#a9808c]">
                Documents for the genuine product
              </p>
              <ul className="flex flex-col">
                {verification.documents.map((document) => (
                  <li key={document.id}>
                    <a
                      href={document.downloadUrl}
                      className="flex items-center justify-between border-t border-[#3a1c24] py-3 font-body text-sm text-[#f7ecee] last:border-b"
                    >
                      {document.title}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f0a8b6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M12 3v12" />
                        <path d="m7 11 5 5 5-5" />
                        <path d="M4 20h16" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs leading-relaxed text-[#a9808c]">
                Compare these against what came with your item.
              </p>
            </div>
          )}

          {verification && (
            <p className="mt-6 font-body text-[11px] tracking-[0.02em] text-[#7d5c66]">
              Checked just now &middot; {verification.id}
            </p>
          )}
        </div>
      </div>

      <DemoNote onDark />
    </div>

    <Footer onDark />
  </div>
);

export default Counterfeit;
