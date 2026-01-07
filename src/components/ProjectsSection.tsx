import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "3-Floor PoE CCTV Deployment",
    challenge: "Coverage gaps and unreliable wireless cameras across multiple floors.",
    solution: "Designed a wired PoE topology with centralized NVR and proper cable management.",
    outcome: "100% coverage, 30-day retention, remote viewing enabled.",
  },
  {
    title: "Wi-Fi Dead Zone Elimination",
    challenge: "Home office with inconsistent Wi-Fi in the work area and garden.",
    solution: "Installed wired access points with proper channel separation and roaming optimization.",
    outcome: "Consistent 200+ Mbps throughout, seamless device roaming.",
  },
  {
    title: "Small Business Digital Presence",
    challenge: "Local business with no online visibility and outdated contact methods.",
    solution: "Built a fast, SEO-optimized website with Google Business Profile setup.",
    outcome: "First page Google ranking for local keywords within 3 months.",
  },
  {
    title: "Home Network Overhaul",
    challenge: "Messy cables, slow speeds, and no network segmentation.",
    solution: "Complete re-cabling with Cat6, managed switch, and guest network isolation.",
    outcome: "Clean rack installation, documented topology, 10x improvement in reliability.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real problems, systematic solutions, measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Challenge</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Outcome</span>
                  <p className="text-sm text-foreground font-medium mt-1 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
