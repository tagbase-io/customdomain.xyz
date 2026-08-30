interface PrivateBrowsingProps {
  verificationId?: string;
  /** The counterfeit page runs on a dark ground. */
  onDark?: boolean;
}

/**
 * Stands in for the status banner. A private window throws away what the first
 * tap left behind, so the second one can never settle the result and no scan in
 * one ever gets past pending.
 */
const PrivateBrowsing = ({ verificationId, onDark = false }: PrivateBrowsingProps) => {
  const skin = onDark
    ? {
        box: "border-[#5c2c38] bg-[#24121a]",
        ink: "text-[#f0a8b6]",
        dim: "text-[#a9808c]",
      }
    : {
        box: "border-[#ecdcb8] bg-[#fdf6e8] dark:border-[#4a3b1c] dark:bg-[#241d10]",
        ink: "text-[#8a6414] dark:text-[#e8c777]",
        dim: "text-[#9c8352] dark:text-[#a89268]",
      };

  return (
    <section
      aria-live="polite"
      className={`animate-fade-in flex items-start gap-4 rounded-sm border px-5 py-5 sm:px-7 sm:py-6 ${skin.box}`}
    >
      <span className={skin.ink}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 shrink-0"
          aria-hidden
        >
          <path d="M12 2.5 4 6v6c0 4.4 3.2 8.2 8 9.5 4.8-1.3 8-5.1 8-9.5V6z" />
          <path d="M12 8.4v4" />
          <path d="M12 15.6h.01" />
        </svg>
      </span>

      <div className="min-w-0 flex-1">
        <h2 className={`font-display text-2xl leading-tight sm:text-3xl ${skin.ink}`}>
          Turn off private browsing
        </h2>

        <p className={`mt-1.5 font-body text-sm leading-relaxed ${skin.ink}`}>
          This check cannot finish in a private window. Close it, open this page again, and tap the
          tag once more.
        </p>

        {verificationId && (
          <p className={`mt-3 font-body text-[11px] tracking-[0.02em] ${skin.dim}`}>
            Checked just now &middot; {verificationId}
          </p>
        )}
      </div>
    </section>
  );
};

export default PrivateBrowsing;
