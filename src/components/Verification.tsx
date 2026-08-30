import type { Message } from "@tagbase-io/verify";
import type { VerificationStatus } from "@/hooks/useVerification";

type CalmStatus = Exclude<VerificationStatus, "idle" | "invalid" | "error">;

const tone = {
  loading: {
    bg: "bg-[#f4efe6] dark:bg-[#1d1814]",
    line: "border-[#e4dcd0] dark:border-[#2f2822]",
    ink: "text-muted-foreground",
    dim: "text-muted-foreground",
    stroke: "currentColor",
  },
  pending: {
    bg: "bg-[#fdf6e8] dark:bg-[#241d10]",
    line: "border-[#ecdcb8] dark:border-[#4a3b1c]",
    ink: "text-[#8a6414] dark:text-[#e8c777]",
    dim: "text-[#9c8352] dark:text-[#a89268]",
    stroke: "currentColor",
  },
  valid: {
    bg: "bg-[#f0f7f0] dark:bg-[#101c13]",
    line: "border-[#cbe0cf] dark:border-[#27452f]",
    ink: "text-[#2f5d3a] dark:text-[#8fd3a2]",
    dim: "text-[#6f8a74] dark:text-[#6e9078]",
    stroke: "currentColor",
  },
  valid_with_warnings: {
    bg: "bg-[#fdf6e8] dark:bg-[#241d10]",
    line: "border-[#ecdcb8] dark:border-[#4a3b1c]",
    ink: "text-[#8a6414] dark:text-[#e8c777]",
    dim: "text-[#9c8352] dark:text-[#a89268]",
    stroke: "currentColor",
  },
} as const;

const heading: Record<CalmStatus, string> = {
  loading: "Checking this product",
  pending: "Tap once more",
  valid: "Authentic",
  valid_with_warnings: "Authentic, with a note",
};

const Mark = ({ status, stroke }: { status: CalmStatus; stroke: string }) => {
  const shared = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (status === "valid" || status === "valid_with_warnings") {
    return (
      <svg {...shared} className="mt-0.5 shrink-0">
        <path d="M12 2.5 4 6v6c0 4.4 3.2 8.2 8 9.5 4.8-1.3 8-5.1 8-9.5V6z" />
        {status === "valid" ? (
          <path d="m8.8 12 2.2 2.2 4.2-4.6" />
        ) : (
          <>
            <path d="M12 8.4v4" />
            <path d="M12 15.6h.01" />
          </>
        )}
      </svg>
    );
  }

  return (
    <svg {...shared} className={`mt-0.5 shrink-0 ${status === "loading" ? "animate-breathe" : ""}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
};

interface VerificationProps {
  status: CalmStatus;
  messages: Message[];
  verificationId?: string;
}

const Verification = ({ status, messages, verificationId }: VerificationProps) => {
  const skin = tone[status];

  return (
    <section
      aria-live="polite"
      className={`animate-fade-in flex items-start gap-4 rounded-sm border px-5 py-5 sm:px-7 sm:py-6 ${skin.bg} ${skin.line}`}
    >
      <span className={skin.ink}>
        <Mark status={status} stroke={skin.stroke} />
      </span>

      <div className="min-w-0 flex-1">
        <h2 className={`font-display text-2xl leading-tight sm:text-3xl ${skin.ink}`}>
          {heading[status]}
        </h2>

        {messages.length > 0 && (
          <ul className={`mt-1.5 space-y-1 font-body text-sm leading-relaxed ${skin.ink}`}>
            {messages.map((message, index) => (
              <li key={index}>{message.text}</li>
            ))}
          </ul>
        )}

        {verificationId && (
          <p className={`mt-3 font-body text-[11px] tracking-[0.02em] ${skin.dim}`}>
            Checked just now &middot; {verificationId}
          </p>
        )}
      </div>
    </section>
  );
};

export default Verification;
