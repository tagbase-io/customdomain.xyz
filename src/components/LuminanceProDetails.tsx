import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Droplets, Shield, Sparkles, Clock, Leaf } from "lucide-react";
import { VerificationStatus } from "@/hooks/useVerification";

interface LuminanceProDetailsProps {
  status: VerificationStatus;
  productData: { number?: string; total?: string } | null;
}

const LuminanceProDetails = ({ status, productData }: LuminanceProDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Product Category */}
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 text-xs font-medium rounded-full">
          Premium Skincare
        </span>
        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
          50 ml
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif text-foreground">
        Luminance Pro Anti-Aging Cream
      </h1>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        This premium cosmetic cream is produced in large volumes with identical formulation and packaging. Each unit is physically identical, but every item is still assigned a secure TAGBASE digital identity for verification and traceability. The NFC tag allows consumers and supply-chain partners to instantly confirm authenticity and access product information.
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-light text-foreground">€189</span>
        <span className="text-sm text-muted-foreground">incl. VAT</span>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Droplets className="w-4 h-4 text-amber-600" />
          <span>Deep Hydration</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Anti-Wrinkle</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-amber-600" />
          <span>Skin Barrier</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Leaf className="w-4 h-4 text-amber-600" />
          <span>Botanical Extracts</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-2">
        <Button className="flex-1 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" className="border-amber-200 hover:bg-amber-50">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 text-sm">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-muted-foreground">In Stock • Ships within 2-3 business days</span>
      </div>

      {/* Product Highlights */}
      <div className="border-t border-border pt-6 space-y-4">
        <h3 className="font-medium text-foreground">Product Highlights</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Droplets className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Hyaluronic Acid Complex</p>
              <p className="text-xs text-muted-foreground">Deep, long-lasting hydration for all skin types</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-rose-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Peptide Technology</p>
              <p className="text-xs text-muted-foreground">Supports collagen production for firmer skin</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Leaf className="w-4 h-4 text-green-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Clean Beauty</p>
              <p className="text-xs text-muted-foreground">Paraben-free, cruelty-free, dermatologically tested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="border-t border-border pt-6 space-y-4">
        <h3 className="font-medium text-foreground">Specifications</h3>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <span className="text-muted-foreground">Volume</span>
          <span className="text-foreground">50 ml</span>
          <span className="text-muted-foreground">Container</span>
          <span className="text-foreground">Frosted glass jar</span>
          <span className="text-muted-foreground">Closure</span>
          <span className="text-foreground">Gold-finished lid</span>
          <span className="text-muted-foreground">Net Weight</span>
          <span className="text-foreground">~180 g</span>
          <span className="text-muted-foreground">Shelf Life</span>
          <span className="text-foreground">30 months (12 after opening)</span>
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-700" />
          <span className="text-sm font-medium text-foreground">Storage Recommendations</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Store at room temperature (15–25°C). Avoid direct sunlight and excessive heat. Keep lid tightly closed after use.
        </p>
      </div>
    </motion.div>
  );
};

export default LuminanceProDetails;
