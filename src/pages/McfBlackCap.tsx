import { useEffect } from "react";
import { motion } from "framer-motion";
import McfCapCarousel from "@/components/McfCapCarousel";
import VerificationStatus from "@/components/VerificationStatus";
import { useVerification } from "@/hooks/useVerification";
import { MessageCircle, FileText, Leaf, Info, ExternalLink, ShieldCheck, File, Download, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import malagaLogo from "@/assets/malaga-cf-logo.png";

const MCF_BLUE = "#009FE3";
const MCF_DARK = "#0C1624";

const McfBlackCap = () => {
  const { status, messages, tid, data } = useVerification();

  useEffect(() => {
    document.title = "TAGBASE | Black Fan Cap Malaga CF";
    const descriptionText =
      "Official Málaga CF Black Fan Cap with embroidered MCF lettering in sky blue. NFC-verified authentic merchandise.";
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
    <div className="min-h-screen text-white font-body" style={{ background: MCF_DARK }}>
      {/* Tagbase Banner */}
      <div
        className="text-center py-2.5 px-4"
        style={{ background: MCF_BLUE }}
      >
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
          white label demo for Málaga CF — in production, this page runs on the
          club's own domain.
        </p>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div
          className="w-full py-6 flex flex-col items-center gap-2"
          style={{
            background: `linear-gradient(180deg, ${MCF_BLUE} 0%, ${MCF_DARK} 100%)`,
          }}
        >
          <img
            src={malagaLogo}
            alt="Málaga CF"
            className="h-32 w-auto drop-shadow-lg"
          />
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
              <McfCapCarousel />
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
                <h1 className="text-2xl font-bold tracking-tight uppercase font-body">
                  Black Fan Cap Malaga CF
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                  Málaga Club de Fútbol
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a href="https://www.instagram.com/malagacf/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@malagacf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
                  </svg>
                </a>
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
                    <Info className="h-4 w-4 shrink-0" style={{ color: MCF_BLUE }} />
                    <span className="text-sm font-bold tracking-wider uppercase text-white font-body">
                      Product Info
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Official Málaga CF fan cap for the 2024/25 season. Features bold
                    3D embroidered "MCF" lettering in sky blue on a sleek black
                    100% cotton twill body. The structured six-panel design with a
                    pre-curved brim offers a comfortable, classic fit. Finished with
                    an adjustable strap at the back for a perfect fit. Material: 100% Cotton Twill.
                    Color: Black / Sky Blue. Adjustable strap closure. From the Fan Line 24/25 collection.
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
                    <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: MCF_BLUE }} />
                    <span className="text-sm font-bold tracking-wider uppercase text-white font-body">
                      Product Authenticity
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  {/* Verification Status */}
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
                    <File className="h-4 w-4 shrink-0" style={{ color: MCF_BLUE }} />
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
                        <FileText className="h-5 w-5 shrink-0" style={{ color: MCF_BLUE }} />
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
              onClick={() =>
                toast.info("Digital Product Passport is a demo feature")
              }
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

            {/* Shop link */}
            <a
              href="https://www.tiendamalagacf.com/es/accesorios/246-24-gorra-fan-negra.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: MCF_BLUE }}
            >
              Buy at Official Store
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Social & Website Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 mb-4 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="https://www.instagram.com/malagacf/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/MalagaCF" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/MalagaCF" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@malagacf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/malaga-cf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <a
              href="https://www.malagacf.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              www.malagacf.com
            </a>
          </motion.div>
        </div>
      </main>


      {/* Floating Chat Button */}
      <button
        onClick={() => toast.info("Live chat is a demo feature")}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ background: MCF_BLUE }}
        aria-label="Live Customer Support"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2" style={{ borderColor: MCF_BLUE }} />
      </button>
    </div>
  );
};

export default McfBlackCap;
