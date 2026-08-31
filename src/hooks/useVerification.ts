import { useState, useEffect } from "react";
import type { Message, Verification } from "@tagbase-io/verify";

// The client arrives as a script tag in index.html, which leaves it on window
// rather than in the bundle.
const { verify, VerifyError } = window.tagbase;

// The server's own statuses, plus the three states that only exist in this
// page: before a tap, during the request, and when the request failed.
export type VerificationStatus =
  "idle" | "loading" | "pending" | "valid" | "invalid" | "valid_with_warnings" | "error";

interface ProductData {
  number?: string;
  total?: string;
}

export interface UseVerificationReturn {
  status: VerificationStatus;
  /** Set when the failure was "no such verification" rather than a fault. */
  unknown: boolean;
  messages: Message[];
  data: Verification | null;
  tid: string | null;
  productData: ProductData | null;
}

const BASE_URL = import.meta.env.VITE_TAGBASE_BASE_URL ?? "https://verify.customdomain.xyz";

export const useVerification = (): UseVerificationReturn => {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [data, setData] = useState<Verification | null>(null);
  const [tid, setTid] = useState<string | null>(null);
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [unknown, setUnknown] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchVerification = async () => {
      const tidParam = new URLSearchParams(window.location.search).get("tid");

      if (!tidParam) {
        setStatus("idle");
        return;
      }

      setTid(tidParam);
      setStatus("loading");

      try {
        const verification = await verify({ baseUrl: BASE_URL, signal: controller.signal });

        setData(verification);
        setMessages(verification.messages);
        setProductData(verification.data as ProductData);
        setStatus(verification.status);
      } catch (error) {
        if (controller.signal.aborted) return;

        setUnknown(error instanceof VerifyError && error.code === "not_found");
        setStatus("error");
        setMessages([{ type: "error", text: explain(error) }]);
      }
    };

    fetchVerification();

    return () => controller.abort();
  }, []);

  return { status, messages, data, tid, productData, unknown };
};

// An unknown tag and an unreachable server are different problems, and telling
// somebody to try again only helps with one of them.
function explain(error: unknown): string {
  if (!(error instanceof VerifyError)) {
    return "We could not check this product. Please try again.";
  }

  switch (error.code) {
    case "not_found":
      return "We have no record of this tag. Tap it again to complete the check.";
    case "network":
      return "We could not reach the verification service. Check your connection and try again.";
    case "no_id":
      return "There is no tag in this link to check.";
    default:
      return "We could not check this product. Please try again.";
  }
}
