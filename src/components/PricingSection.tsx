import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Quick Fix",
    price: "₺500–1,500",
    description: "Basic IT issues, cleanup, and quick wins.",
    features: [
      "OS reinstall or cleanup",
      "Driver updates",
      "Basic troubleshooting",
      "Thermal paste refresh",
      "Same-day availability",
    ],
  },
  {
    name: "Home / Small Office Network",
    price: "₺2,000–5,000",
    description: "Complete network setup with proper planning.",
    features: [
      "Router & AP configuration",
      "Basic network segmentation",
      "Cable management",
      "Speed optimization",
      "Topology documentation",
    ],
    featured: true,
  },
  {
    name: "CCTV Deployment",
    price: "₺3,000–10,000+",
    description: "Professional security camera installation.",
    features: [
      "Site survey & planning",
      "PoE infrastructure",
      "NVR/storage setup",
      "Remote access config",
      "Maintenance guidance",
    ],
  },
];

export const PricingSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ranges based on scope. Final quote after a short discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                pkg.featured
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/30 glow-sm"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-gradient mb-2">{pkg.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                variant={pkg.featured ? "default" : "outline"}
                className="w-full"
              >
                Get a Quote
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Website, SEO, and consulting services quoted separately based on requirements.
        </p>
      </div>
    </section>
  );
};
