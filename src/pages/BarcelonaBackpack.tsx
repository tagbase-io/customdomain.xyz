import { useEffect } from "react";
import robinRuthLogo from "@/assets/robin-ruth-logo.png";
import { motion } from "framer-motion";
import BarcelonaBackpackCarousel from "@/components/BarcelonaBackpackCarousel";
import VerificationStatus from "@/components/VerificationStatus";
import { useVerification } from "@/hooks/useVerification";
import { MessageCircle, FileText, Leaf, Info, ExternalLink, ShieldCheck, File, Download, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const RR_ACCENT = "#ffffff";
const RR_DARK = "#0a0a0a";

const BarcelonaBackpack = () => {
  const { status, messages, tid, data } = useVerification();

  useEffect(() => {
    document.title = "TAGBASE | Large Barcelona Backpack — Robin Ruth";
    const descriptionText =
      "Large Barcelona Backpack in beige with iconic city lettering. 100% Nylon, 32×16×42 cm. NFC-verified authentic merchandise.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen text-white font-body" style={{ background: RR_DARK }}>
      {/* Tagbase Banner */}
      <div className="text-center py-2.5 px-4" style={{ background: "#333333" }}>
        <p className="text-xs font-semibold tracking-wide text-white">
          ⚡ This is a{" "}
          <a
            href="https://www.tagbase.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold hover:text-white/80 transition-colors"
          >
            TAGBASE
          </a>{" "}
          white label demo for Robin Ruth — in production, this page runs on the
          brand's own domain.
        </p>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div
          className="w-full py-6 flex flex-col items-center gap-2"
          style={{
            background: `linear-gradient(180deg, #000000 0%, ${RR_DARK} 100%)`,
          }}
        >
          <img
            src={robinRuthLogo}
            alt="Robin Ruth"
            className="h-12 w-auto drop-shadow-lg invert brightness-200"
          />
          {tid && (
            <div className="mt-1">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                VERIFIED BY TAGBASE
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-12">
        <div className="max-w-lg mx-auto px-4">

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="-mx-4"
          >
            <div className="px-4">
              <BarcelonaBackpackCarousel />
            </div>
          </motion.div>

          {/* Product Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-1" style={{ color: RR_ACCENT }}>
                  Barcelona Collection
                </p>
                <h1 className="text-2xl font-bold tracking-tight uppercase font-body">
                  Large Barcelona Backpack
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                  Robin Ruth · Beige Letters
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordion Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6"
          >
            <Accordion type="multiple" defaultValue={tid ? ["product-info", "authenticity"] : ["product-info"]} className="space-y-3">
              {/* Product Info */}
              <AccordionItem
                value="product-info"
                className="rounded-xl border-0 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 shrink-0" style={{ color: RR_ACCENT }} />
                    <span className="text-sm font-bold tracking-wider uppercase text-white font-body">
                      Product Info
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    Carry a piece of Barcelona wherever you go. This spacious backpack features bold 
                    typographic lettering showcasing iconic Barcelona landmarks — La Sagrada Familia, 
                    Las Ramblas, Parque Güell, Paseo de Gracia, and Plaza España. Crafted from durable 
                    nylon with a clean beige-and-tan color palette, it's the perfect blend of 
                    city-inspired style and everyday functionality. Size: 32×16×42 cm. Material: 100% Nylon. Multiple pockets.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Product Authenticity */}
              <AccordionItem
                value="authenticity"
                className="rounded-xl border-0 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: RR_ACCENT }} />
                    <span className="text-sm font-bold tracking-wider uppercase text-white font-body">
                      Product Authenticity
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  {tid && (
                    <div className="mb-4">
                      <VerificationStatus
                        status={status}
                        messages={messages}
                        verificationId={data?.id}
                      />
                    </div>
                  )}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    This product contains an NFC authentication chip. To verify its authenticity, hold your smartphone near the NFC tag on the product. The verification result will appear here.
                  </p>
                  {status === "pending" && (
                    <p className="text-sm text-amber-400 mt-2">
                      Tap the NFC tag on the product again with your phone to complete the verification.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>

              {/* Documents */}
              <AccordionItem
                value="documents"
                className="rounded-xl border-0 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 shrink-0" style={{ color: RR_ACCENT }} />
                    <span className="text-sm font-bold tracking-wider uppercase text-white font-body">
                      Documents
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <div className="space-y-2">
                    {[
                      { name: "Certificate of Authenticity", type: "PDF", size: "124 KB" },
                      { name: "Care Instructions", type: "PDF", size: "89 KB" },
                      { name: "Official License Agreement", type: "PDF", size: "210 KB" },
                    ].map((doc) => (
                      <button
                        key={doc.name}
                        onClick={() => toast.info("Document download is a demo feature")}
                        className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-white/5"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <FileText className="h-5 w-5 shrink-0" style={{ color: RR_ACCENT }} />
                        <div className="text-left flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-200 truncate">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.type} · {doc.size}</p>
                        </div>
                        <Download className="h-4 w-4 text-gray-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 flex flex-col gap-3"
          >
            {/* DPP */}
            <button
              onClick={() => toast.info("Digital Product Passport is a demo feature")}
              className="w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-colors"
              style={{
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <div className="flex items-center gap-1.5">
                <Leaf className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-semibold text-emerald-300">
                  EU Digital Product Passport
                </p>
                <p className="text-xs text-emerald-500/70">
                  View supply chain, materials & sustainability data
                </p>
              </div>
            </button>

          </motion.div>

          {/* Website Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 mb-4 flex flex-col items-center gap-4"
          >
            <img
              src={robinRuthLogo}
              alt="Robin Ruth"
              className="h-8 w-auto opacity-40 invert brightness-200"
            />
            <a
              href="https://robin-ruth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              www.robin-ruth.com
            </a>
          </motion.div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button
        onClick={() => toast.info("Live chat is a demo feature")}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ background: RR_ACCENT }}
        aria-label="Live Customer Support"
      >
        <MessageCircle className="h-6 w-6 text-black" />
        <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2" style={{ borderColor: RR_ACCENT }} />
      </button>
    </div>
  );
};

export default BarcelonaBackpack;
