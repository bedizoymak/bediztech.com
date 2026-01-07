import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Bediz</span>
              <span className="text-gradient"> Teknik</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Network • CCTV • IT Services • Web Development
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Bediz Teknik. All rights reserved.</p>
          <p>
            Istanbul, Türkiye • 
            <a href="mailto:hello@bediteknik.com" className="hover:text-primary transition-colors ml-1">
              hello@bediteknik.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
