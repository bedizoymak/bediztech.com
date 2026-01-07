import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.howIWork, href: "#process" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-foreground">Bediz</span>
          <span className="text-gradient"> Teknik</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {item.label}
            </button>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 ml-2"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span>{language === "en" ? "TR" : "EN"}</span>
          </button>
          
          <Button
            onClick={() => scrollToSection("#contact")}
            className="ml-4"
            size="sm"
          >
            {t.nav.getQuote}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span>{language === "en" ? "TR" : "EN"}</span>
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border mt-2"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-2"
              >
                {t.nav.getQuote}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
