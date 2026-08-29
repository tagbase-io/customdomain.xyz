import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Award, Palette, Frame, FileCheck } from "lucide-react";
import type { VerificationStatus } from "@/hooks/useVerification";

interface AuroraViennaDetailsProps {
  status: VerificationStatus;
  productData: { number?: string; total?: string } | null;
}

const AuroraViennaDetails = ({ status, productData }: AuroraViennaDetailsProps) => {
  const features = [
    { icon: Shield, text: "NFC-verified authenticity" },
    { icon: Award, text: "Certificate of authenticity included" },
    { icon: Frame, text: "Handcrafted gold-leaf frame" },
  ];

  const specifications = [
    { label: "Artist", value: "Contemporary European Artist" },
    { label: "Year", value: "2024" },
    { label: "Medium", value: "Oil on canvas" },
    { label: "Canvas Size", value: "120 × 80 cm" },
    { label: "Framed Size", value: "140 × 100 cm" },
    { label: "Edition", value: "Unique original (1/1)" },
  ];

  // Build dynamic title based on verification status
  const getProductTitle = () => {
    const baseTitle = "Aurora over Vienna";
    const subtitle = "Original Oil Painting";
    
    if (status === "valid" && productData?.number && productData?.total) {
      return {
        main: baseTitle,
        sub: `${subtitle} — ${productData.number} of ${productData.total}`,
      };
    }
    
    return { main: baseTitle, sub: subtitle };
  };

  const title = getProductTitle();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col justify-center"
    >
      {/* Category Tag */}
      <span className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
        <span className="w-8 h-px bg-gold" />
        Unique Artwork
      </span>

      {/* Product Title */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
        {title.main}
        <br />
        <span className="italic text-2xl md:text-3xl lg:text-4xl">{title.sub}</span>
      </h1>

      {/* Description */}
      <p className="font-body text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
        This original oil painting by a contemporary European artist captures the city of Vienna at dawn, with warm light reflecting on historic architecture. It is a one-of-a-kind artwork, created and signed in 2024, with no reproductions in existence. The attached TAGBASE NFC tag provides its permanent digital identity and proof of authenticity.
      </p>

      {/* Price */}
      <div className="mb-8">
        <span className="font-display text-3xl text-foreground">Price on Request</span>
      </div>

      {/* Specifications */}
      <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3">
        {specifications.map((spec, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">{spec.label}</span>
            <span className="font-body text-sm text-foreground">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button variant="luxury" size="xl" className="flex-1">
          Inquire About This Piece
        </Button>
        <Button variant="luxuryOutline" size="xl">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 mb-8">
        <Palette className="w-4 h-4 text-gold" />
        <span className="font-body text-sm text-muted-foreground">Available for private viewing</span>
      </div>

      {/* Features */}
      <div className="border-t border-border pt-8 space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <feature.icon className="w-4 h-4 text-gold" />
            <span className="font-body text-sm text-muted-foreground">{feature.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Additional Details Accordion */}
      <div className="border-t border-border mt-8 pt-8">
        <h3 className="font-display text-lg text-foreground mb-4">About This Work</h3>
        <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
          <strong>Aurora over Vienna</strong> depicts the city of Vienna at sunrise, with St. Stephen's Cathedral rising above the historic rooftops as the first golden light spreads across the skyline. The composition combines architectural precision with a warm, atmospheric color palette, creating a sense of depth, serenity, and timeless European elegance.
        </p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
          The artwork is executed in a hyperrealistic style with visible painterly texture, blending fine detail in the buildings and cathedral with soft, luminous transitions in the sky. The sunrise light reflects subtly off rooftops and stone facades, while the foreground trees introduce natural warmth and seasonal character, suggesting early autumn.
        </p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          The painting is presented in a handcrafted classical wooden frame with a gold-leaf finish, designed to complement both traditional interiors and contemporary gallery spaces.
        </p>
      </div>
    </motion.div>
  );
};

export default AuroraViennaDetails;
