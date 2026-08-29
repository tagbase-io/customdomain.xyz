import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import AuroraVienna from "./pages/AuroraVienna";
import TwinValleyReserve from "./pages/TwinValleyReserve";
import LuminancePro from "./pages/LuminancePro";
import BarcelonaBackpack from "./pages/BarcelonaBackpack";
import McfBlackCap from "./pages/McfBlackCap";
import McfShirt2526 from "./pages/McfShirt2526";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/leopard-luxe-city-bag" element={<Product />} />
          <Route path="/product/aurora-over-vienna" element={<AuroraVienna />} />
          <Route path="/product/twin-valley-reserve-cabernet-sauvignon" element={<TwinValleyReserve />} />
          <Route path="/product/luminance-pro-anti-aging-cream-50ml" element={<LuminancePro />} />
          <Route path="/product/large-barcelona-backpack" element={<BarcelonaBackpack />} />
          <Route path="/product/mcf-black-cap" element={<McfBlackCap />} />
          <Route path="/product/shirt2526" element={<McfShirt2526 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
