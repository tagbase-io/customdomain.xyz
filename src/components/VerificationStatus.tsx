import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Clock, ShieldCheck, ShieldAlert, Loader2, ExternalLink } from "lucide-react";
import type { VerificationStatus as VerificationStatusType } from "@/hooks/useVerification";

interface VerificationStatusProps {
  status: VerificationStatusType;
  messages: { type: string; text: string }[];
  verificationId?: string;
}

const statusConfig = {
  loading: {
    icon: Loader2,
    title: "Verifying...",
    bgClass: "bg-muted",
    iconClass: "text-muted-foreground animate-spin",
    borderClass: "border-muted",
  },
  pending: {
    icon: Clock,
    title: "Verification Pending",
    bgClass: "bg-amber-500/10",
    iconClass: "text-amber-400",
    borderClass: "border-amber-500/25",
  },
  valid: {
    icon: ShieldCheck,
    title: "Authentic Product",
    bgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-400",
    borderClass: "border-emerald-500/25",
  },
  valid_with_warnings: {
    icon: AlertCircle,
    title: "Verified with Warnings",
    bgClass: "bg-amber-500/10",
    iconClass: "text-amber-400",
    borderClass: "border-amber-500/25",
  },
  invalid: {
    icon: ShieldAlert,
    title: "Verification Failed",
    bgClass: "bg-rose-500/10",
    iconClass: "text-rose-400",
    borderClass: "border-rose-500/25",
  },
  error: {
    icon: AlertCircle,
    title: "Error",
    bgClass: "bg-rose-500/10",
    iconClass: "text-rose-400",
    borderClass: "border-rose-500/25",
  },
  idle: {
    icon: CheckCircle2,
    title: "",
    bgClass: "",
    iconClass: "",
    borderClass: "",
  },
};

const VerificationStatus = ({ status, messages, verificationId }: VerificationStatusProps) => {
  if (status === "idle") return null;

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`mb-6 rounded-lg border-2 ${config.borderClass} p-4`}
    >
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 ${config.iconClass}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className={`font-body text-lg font-semibold ${config.iconClass.replace('animate-spin', '').trim()}`}>
            {config.title}
          </h3>
          {messages.length > 0 && status !== "valid" && (
            <div className="mt-2 space-y-1">
              {messages.map((message, index) => (
                <p
                  key={index}
                  className="font-body text-sm text-muted-foreground"
                >
                  {message.text}
                </p>
              ))}
            </div>
          )}
          {status === "valid" && (
            <>
              <p className="mt-2 font-body text-sm text-emerald-300">
                This product has been verified as authentic by TAGBASE.
              </p>
              {verificationId && (
                <p className="mt-2 font-body text-sm text-emerald-300">
                  View proof of this verification:
                </p>
              )}
              {verificationId && (
                <a
                  href={`https://tagbase.io/verifications/${verificationId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 font-body text-sm text-emerald-300 underline hover:text-emerald-200 transition-colors break-all"
                >
                  <span className="hidden sm:inline">tagbase.io/verifications/{verificationId}</span>
                  <span className="sm:hidden">View verification</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
              )}
            </>
          )}
          {status === "invalid" && (
            <p className="mt-2 font-body text-sm text-rose-300">
              Warning: This product could not be verified. It may be counterfeit or the tag has been tampered with.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default VerificationStatus;
