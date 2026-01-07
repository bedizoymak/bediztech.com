import { Camera, Wifi, Globe, Network } from "lucide-react";

interface ProjectImageProps {
  type: string;
  title: string;
}

const imageConfig = {
  cctv: { icon: Camera, label: "CCTV System", gradient: "from-red-500/20 to-orange-500/20" },
  wifi: { icon: Wifi, label: "Wi-Fi Coverage", gradient: "from-blue-500/20 to-cyan-500/20" },
  website: { icon: Globe, label: "Web Development", gradient: "from-purple-500/20 to-pink-500/20" },
  network: { icon: Network, label: "Network Setup", gradient: "from-green-500/20 to-teal-500/20" },
};

export const ProjectImage = ({ type, title }: ProjectImageProps) => {
  const config = imageConfig[type as keyof typeof imageConfig] || imageConfig.network;
  const Icon = config.icon;

  return (
    <div className={`w-full h-full bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center relative`}>
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Icon and label */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center border border-border">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <span className="text-sm font-medium text-foreground/80 px-3 py-1 bg-card/60 backdrop-blur rounded-full">
          {config.label}
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};
