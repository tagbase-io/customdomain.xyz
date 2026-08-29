import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              Collections
            </a>
            <a
              href="#"
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#"
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
              Search
            </button>
            <button className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
              Bag (0)
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
