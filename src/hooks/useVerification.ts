import { useState, useEffect } from "react";

export type VerificationStatus = "idle" | "loading" | "pending" | "valid" | "invalid" | "valid_with_warnings" | "error";

interface VerificationMessage {
  type: string;
  text: string;
}

interface ProductData {
  number?: string;
  total?: string;
}

interface VerificationData {
  id: string;
  status: string;
  title: string;
  description: string;
  image_urls: string[];
  website: string;
  data: string | ProductData;
  inserted_at: string;
  on_device: boolean;
}

interface VerificationResponse {
  data: VerificationData;
  messages: VerificationMessage[];
}

export interface UseVerificationReturn {
  status: VerificationStatus;
  messages: VerificationMessage[];
  data: VerificationData | null;
  tid: string | null;
  productData: ProductData | null;
}

const setGeolocationCookie = (latitude: number, longitude: number, accuracy: number) => {
  const geolocationData = JSON.stringify({ latitude, longitude, accuracy });
  // Get the domain for the cookie (use current domain without subdomain for broader access)
  const domain = window.location.hostname;
  document.cookie = `tagbase_geolocation=${encodeURIComponent(geolocationData)}; path=/; SameSite=Lax; domain=${domain}; max-age=600;`;
};

const requestGeolocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocationCookie(
          position.coords.latitude,
          position.coords.longitude,
          position.coords.accuracy
        );
      },
      (error) => {
        console.log("Geolocation permission denied or unavailable:", error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
};

export const useVerification = (): UseVerificationReturn => {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [messages, setMessages] = useState<VerificationMessage[]>([]);
  const [data, setData] = useState<VerificationData | null>(null);
  const [tid, setTid] = useState<string | null>(null);
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const fetchVerification = async () => {
      const params = new URLSearchParams(window.location.search);
      const tidParam = params.get("tid");

      if (!tidParam) {
        setStatus("idle");
        return;
      }

      setTid(tidParam);
      setStatus("loading");

      try {
        // Use the custom domain verification endpoint
        const url = `https://verify.customdomain.xyz/verifications/${tidParam}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: VerificationResponse = await response.json();
        
        setData(json.data);
        setMessages(json.messages || []);

        // Parse the nested data object if it exists
        if (json.data.data) {
          const nestedData = typeof json.data.data === 'string' 
            ? JSON.parse(json.data.data) 
            : json.data.data;
          setProductData(nestedData);
        }

        // Map the API status to our status type
        const apiStatus = json.data.status as VerificationStatus;
        setStatus(apiStatus);

        // If pending, request geolocation for the next scan
        if (apiStatus === "pending") {
          requestGeolocation();
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessages([{ type: "error", text: "Failed to verify product. Please try again." }]);
      }
    };

    fetchVerification();
  }, []);

  return { status, messages, data, tid, productData };
};
