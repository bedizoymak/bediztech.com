import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroIllustration } from "./HeroIllustration";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {t.hero.headline}{" "}
              <span className="text-gradient">{t.hero.headlineHighlight}</span>
              <br />
              <span className="text-muted-foreground">{t.hero.headlineSuffix}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button size="lg" className="w-full sm:w-auto glow" asChild>
                <a
                  href="https://wa.me/90XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.hero.whatsapp}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="tel:+90XXXXXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.hero.call}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {t.hero.trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToContact}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-wider">{t.hero.explore}</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
};
