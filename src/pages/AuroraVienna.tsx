import { useEffect } from "react";
import { motion } from "framer-motion";
import AuroraViennaCarousel from "@/components/AuroraViennaCarousel";
import AuroraViennaDetails from "@/components/AuroraViennaDetails";
import VerificationStatus from "@/components/VerificationStatus";
import { useVerification } from "@/hooks/useVerification";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const AuroraVienna = () => {
  const { status, messages, tid, productData, data } = useVerification();

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
    <div className="min-h-screen bg-background">
      {/* White Label Info Box */}
      <div className="container mx-auto px-6 lg:px-12 pt-6 pb-4">
        <Alert className="bg-muted/50 border-muted-foreground/20">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-muted-foreground text-sm">
            This demo shows how a product can be linked to a custom URL you control, giving collectors a seamless, branded authentication experience.
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content */}
      <main className="pt-6 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Verification Status Banner */}
          {tid && <VerificationStatus status={status} messages={messages} verificationId={data?.id} />}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <AuroraViennaCarousel />
            </motion.div>

            {/* Product Details */}
            <AuroraViennaDetails status={status} productData={productData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-center items-center">
            <span className="font-body text-xs text-muted-foreground">
              customdomain.xyz is a <a href="https://www.tagbase.io" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline">TAGBASE</a> white label solution
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuroraVienna;
