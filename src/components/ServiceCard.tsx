import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  index: number;
  whatYouGet: string;
  requestThis: string;
}

export const ServiceCard = ({ icon: Icon, title, description, bullets, index, whatYouGet, requestThis }: ServiceCardProps) => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="space-y-2 mb-4">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {whatYouGet}
          </span>
          <ul className="space-y-1">
            {bullets.slice(0, 3).map((bullet, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={scrollToContact}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {requestThis}
        </button>
      </div>
    </motion.div>
  );
};
