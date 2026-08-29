import { motion } from "framer-motion";
import tagbaseLogo from "@/assets/tagbase-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <a href="https://www.tagbase.io" target="_blank" rel="noopener noreferrer">
          <img 
            src={tagbaseLogo} 
            alt="Tagbase" 
            className="h-16 md:h-20 w-auto hover:opacity-80 transition-opacity"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Index;
