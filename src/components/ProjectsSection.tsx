import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectImage } from "./ProjectImage";

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ProjectImage type={project.image} title={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{t.projects.challenge}</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{t.projects.solution}</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{t.projects.outcome}</span>
                    <p className="text-sm text-foreground font-medium mt-1 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
