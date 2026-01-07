import { ServiceCard } from "./ServiceCard";
import { 
  Network, 
  Camera, 
  Wifi, 
  Monitor, 
  ShoppingCart, 
  Globe, 
  MapPin, 
  Search, 
  Megaphone, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Network Infrastructure Setup",
    description: "Structured cabling and network architecture for homes and small businesses.",
    bullets: [
      "Cat6 cabling planning & installation",
      "Router, switch & firewall configuration",
      "VLAN segmentation if needed",
      "Remote access setup",
    ],
  },
  {
    icon: Camera,
    title: "Security Camera Projects",
    description: "Professional IP CCTV systems with proper planning and clean installations.",
    bullets: [
      "Weatherproof IP camera selection",
      "PoE topology design",
      "NVR/NAS storage planning",
      "Bandwidth & retention calculation",
    ],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Coverage Improvement",
    description: "Eliminate dead zones with properly planned access point deployments.",
    bullets: [
      "Site survey & AP placement",
      "Roaming optimization",
      "Mesh vs wired backhaul advice",
      "Channel & power tuning",
    ],
  },
  {
    icon: Monitor,
    title: "PC/Mac Services",
    description: "System maintenance, optimization, and health restoration.",
    bullets: [
      "OS installation & data migration",
      "Thermal paste replacement",
      "Fan cleaning & dust removal",
      "Performance health checks",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Procurement",
    description: "Expert guidance for choosing the right tech within your budget.",
    bullets: [
      "Laptop & desktop selection",
      "Network gear recommendations",
      "Price-performance optimization",
      "Vendor-neutral advice",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional full-stack websites built with modern standards.",
    bullets: [
      "Modern frontend & backend",
      "SEO-ready architecture",
      "Fast loading & clean UI",
      "Analytics integration",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Get found on Google Maps with an optimized business listing.",
    bullets: [
      "Profile setup & verification",
      "Category & keyword optimization",
      "Photo & post strategy",
      "Review management guidance",
    ],
  },
  {
    icon: Search,
    title: "SEO & Local Visibility",
    description: "Improve your online visibility with technical SEO fundamentals.",
    bullets: [
      "On-page SEO optimization",
      "Technical SEO checklist",
      "Performance improvements",
      "Schema markup implementation",
    ],
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description: "Strategic ad campaigns on Google and Meta platforms.",
    bullets: [
      "Campaign setup & goals",
      "Conversion tracking",
      "Budget optimization",
      "Monthly reporting",
    ],
  },
  {
    icon: Settings,
    title: "Engineering Consulting",
    description: "Industrial engineering expertise for process improvement.",
    bullets: [
      "Workflow optimization",
      "Simple KPI dashboards",
      "Process documentation",
      "Efficiency analysis",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I Can Do For You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From network infrastructure to full-stack websites — systematic solutions with documented delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
