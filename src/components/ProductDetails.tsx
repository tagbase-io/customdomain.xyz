import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import type { VerificationStatus } from "@/hooks/useVerification";

interface ProductDetailsProps {
  status: VerificationStatus;
  productData: { number?: string; total?: string } | null;
}

const ProductDetails = ({ status, productData }: ProductDetailsProps) => {
  const features = [
    { icon: Truck, text: "Complimentary worldwide shipping" },
    { icon: Shield, text: "Authenticity guaranteed" },
    { icon: RotateCcw, text: "30-day return policy" },
  ];

  // Build dynamic title based on verification status and product data
  const getProductTitle = () => {
    const baseTitle = "Leopard Luxe";
    const subtitle = "City Bag";
    
    if (status === "valid" && productData?.number && productData?.total) {
      return {
        main: baseTitle,
        sub: `${subtitle} ${productData.number} of ${productData.total}`,
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
        Limited Edition
      </span>

      {/* Product Title */}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
        {title.main}
        <br />
        <span className="italic">{title.sub}</span>
      </h1>

      {/* Description */}
      <p className="font-body text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
        Where wild elegance meets modern sophistication. This statement tote blends smooth beige and caramel leather with a bold leopard print panel, accented by sleek black handles and gold hardware. Designed for the confident trendsetter, it's the perfect mix of fierce and refined — your ultimate city-chic companion.
      </p>

      {/* Price */}
      <div className="mb-8">
        <span className="font-display text-3xl text-foreground">€2,450</span>
        <span className="font-body text-sm text-muted-foreground ml-2">incl. VAT</span>
      </div>

      {/* Color Options */}
      <div className="mb-8">
        <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-3 block">
          Color — Beige Leopard
        </span>
        <div className="flex gap-3">
          <button className="relative w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 ring-2 ring-foreground ring-offset-2 ring-offset-background">
            <Check className="absolute inset-0 m-auto w-4 h-4 text-foreground" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-800 to-stone-900 transition-all hover:scale-110" />
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-red-800 to-red-900 transition-all hover:scale-110" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button variant="luxury" size="xl" className="flex-1">
          Add to Bag
        </Button>
        <Button variant="luxuryOutline" size="xl">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="font-body text-sm text-muted-foreground">In stock — ships within 24 hours</span>
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
    </motion.div>
  );
};

export default ProductDetails;
