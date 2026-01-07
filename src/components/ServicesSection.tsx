import { ServiceCard } from "./ServiceCard";
import { 
  Network, 
  Camera, 
  Wifi, 
  Monitor, 
  Fan,
  ShoppingCart, 
  Globe, 
  MapPin, 
  Search, 
  Megaphone, 
  Settings 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Network, Camera, Wifi, Monitor, Fan, ShoppingCart, Globe, MapPin, Search, Megaphone, Settings];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            {t.services.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={icons[index]} 
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              index={index}
              whatYouGet={t.services.whatYouGet}
              requestThis={t.services.requestThis}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
