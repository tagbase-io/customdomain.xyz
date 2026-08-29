import { useEffect } from "react";
import { motion } from "framer-motion";
import LuminanceProCarousel from "@/components/LuminanceProCarousel";
import LuminanceProDetails from "@/components/LuminanceProDetails";
import VerificationStatus from "@/components/VerificationStatus";
import { useVerification } from "@/hooks/useVerification";
import { Info } from "lucide-react";
import tagbaseLogo from "@/assets/tagbase-logo.png";

const LuminancePro = () => {
  const { status, messages, data, tid, productData } = useVerification();

  useEffect(() => {
    document.title = "TAGBASE | Demo Product";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    const descriptionText = "This is a TAGBASE demo product showcasing how physical products can be authenticated and verified using NFC technology and digital identity.";
    
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }
    
    if (ogTitle) {
      ogTitle.setAttribute("content", "TAGBASE | Demo Product");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "TAGBASE | Demo Product";
      document.head.appendChild(meta);
    }
    
    if (ogDescription) {
      ogDescription.setAttribute("content", descriptionText);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-serif tracking-wide text-foreground">Luminance Pro</h1>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Collections</a>
            <a href="#" className="hover:text-foreground transition-colors">Skincare</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Info Box */}
        <div className="mb-8 p-4 bg-gradient-to-r from-amber-100/50 to-rose-100/50 border border-amber-200/50 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-900">
              This demo shows how a product can be linked to a custom URL you control, giving consumers a seamless, branded authentication experience.
            </p>
          </div>
        </div>

        {/* Verification Status */}
        {tid && (
          <div className="mb-8">
            <VerificationStatus status={status} messages={messages} verificationId={tid} />
          </div>
        )}

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuminanceProCarousel />
          </motion.div>

          {/* Right: Details */}
          <LuminanceProDetails status={status} productData={productData} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>White-label solution by</span>
            <img src={tagbaseLogo} alt="TAGBASE" className="h-5" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuminancePro;
