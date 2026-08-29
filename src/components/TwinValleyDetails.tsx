import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Award, Wine, Thermometer, Clock } from "lucide-react";
import type { VerificationStatus } from "@/hooks/useVerification";

interface TwinValleyDetailsProps {
  status: VerificationStatus;
  productData: { number?: string; total?: string } | null;
}

const TwinValleyDetails = ({ status, productData }: TwinValleyDetailsProps) => {
  const features = [
    { icon: Shield, text: "NFC-verified authenticity" },
    { icon: Award, text: "Certificate of authenticity included" },
    { icon: Wine, text: "Handcrafted wooden presentation box" },
  ];

  const specifications = [
    { label: "Vintage", value: "2023" },
    { label: "Varietal", value: "100% Cabernet Sauvignon" },
    { label: "Origin", value: "Single-parcel vineyard" },
    { label: "Format", value: "750 ml" },
    { label: "Aging", value: "18 months French oak" },
    { label: "Edition", value: "Bottle A (1 of 2)" },
  ];

  const tastingNotes = [
    { label: "Color", value: "Deep ruby with garnet reflections" },
    { label: "Nose", value: "Blackcurrant, ripe blackberry, cedarwood, graphite, subtle vanilla and toasted oak" },
    { label: "Palate", value: "Full-bodied and structured, with fine-grained tannins, dark fruit concentration, hints of cocoa, spice, and a long, elegant finish" },
    { label: "Aging Potential", value: "15–20 years under proper cellaring conditions" },
  ];

  const storageNotes = [
    { icon: Thermometer, text: "Temperature: 12–14°C" },
    { icon: Wine, text: "Humidity: 60–70%" },
    { icon: Clock, text: "Position: Horizontal, dark UV-protected environment" },
  ];

  // Build dynamic title based on verification status
  const getProductTitle = () => {
    const baseTitle = "Twin Valley Reserve";
    const subtitle = "Cabernet Sauvignon";
    
    if (status === "valid" && productData?.number && productData?.total) {
      return {
        main: baseTitle,
        sub: `${subtitle} — Bottle ${productData.number} of ${productData.total}`,
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
        Limited Edition – Bottle A (1 of 2)
      </span>

      {/* Product Title */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
        {title.main}
        <br />
        <span className="italic text-2xl md:text-3xl lg:text-4xl">{title.sub}</span>
      </h1>

      {/* Description */}
      <p className="font-body text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
        This bottle is one of only two bottles produced from a special micro-batch harvest, making the set extremely rare. While both bottles originate from the same grapes and production run, each carries its own unique identity and individual numbering within the pair. The TAGBASE NFC tag links this specific bottle (1 of 2) to its secure digital twin and proof of authenticity.
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
          Inquire About This Bottle
        </Button>
        <Button variant="luxuryOutline" size="xl">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 mb-8">
        <Wine className="w-4 h-4 text-gold" />
        <span className="font-body text-sm text-muted-foreground">Available as part of a matched pair</span>
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

      {/* Tasting Notes */}
      <div className="border-t border-border mt-8 pt-8">
        <h3 className="font-display text-lg text-foreground mb-4">Tasting Notes</h3>
        <div className="space-y-3">
          {tastingNotes.map((note, index) => (
            <div key={index}>
              <span className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">{note.label}</span>
              <p className="font-body text-sm text-foreground">{note.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About This Wine */}
      <div className="border-t border-border mt-8 pt-8">
        <h3 className="font-display text-lg text-foreground mb-4">About This Wine</h3>
        <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
          Twin Valley Reserve Cabernet Sauvignon is an ultra-limited micro-batch wine produced in a quantity of only two bottles from a single, carefully selected vineyard parcel. Both bottles originate from the same harvest, the same vines, and the same vinification process, yet each bottle carries its own unique physical and digital identity.
        </p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground mb-4">
          The grapes were harvested at optimal phenolic ripeness and vinified in small open fermenters. Extended maceration was used to extract deep color, fine tannins, and complex aromatic compounds. The wine was aged in a single French oak barrique for 18 months, followed by bottle maturation in controlled cellar conditions.
        </p>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          This edition represents the highest level of rarity in collectible wine: a matched pair, produced once, never to be repeated. While the liquid inside both bottles is identical in origin and quality, each bottle is treated as a non-fungible collectible object, comparable to numbered art prints or limited sculpture casts.
        </p>
      </div>

      {/* Storage Recommendations */}
      <div className="border-t border-border mt-8 pt-8">
        <h3 className="font-display text-lg text-foreground mb-4">Storage & Care</h3>
        <div className="space-y-3">
          {storageNotes.map((note, index) => (
            <div key={index} className="flex items-center gap-3">
              <note.icon className="w-4 h-4 text-gold" />
              <span className="font-body text-sm text-muted-foreground">{note.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TwinValleyDetails;
