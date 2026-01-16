import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Code Review System",
    problem: "Development teams struggle with manual code reviews, leading to inconsistent feedback and missed bugs.",
    approach: "Engineered an intelligent web application using the MERN stack integrated with Gemini AI to automate code reviews with real-time analysis.",
    features: [
      "Real-time bug detection",
      "Best-practice validation",
      "AI-driven improvement suggestions",
      "Role-based access control",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI"],
    github: "https://github.com/piyushsinghania23",
    demo: null,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-500",
  },
  {
    title: "CPU Scheduling Simulator",
    problem: "Understanding CPU scheduling algorithms can be abstract without visual representation of process execution.",
    approach: "Simulated CPU scheduling algorithms like FCFS, SJF, Round Robin with dynamic visualization and turnaround time calculation.",
    features: [
      "Algorithm comparison",
      "Dynamic queue visualization",
      "Turnaround time calculation",
      "Process execution demo",
    ],
    technologies: ["C++", "Algorithms", "Data Structures"],
    github: "https://github.com/piyushsinghania23",
    demo: null,
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-500",
  },
  {
    title: "Portfolio Website",
    problem: "Showcasing skills and projects professionally to potential employers and recruiters.",
    approach: "Designed and developed a modern, responsive portfolio with smooth animations and intuitive navigation.",
    features: [
      "Responsive design",
      "Smooth animations",
      "SEO optimized",
      "Contact integration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/piyushsinghania23",
    demo: null,
    gradient: "from-green-500/20 to-teal-500/20",
    accent: "text-green-500",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of projects showcasing my problem-solving abilities and 
              technical skills in software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Project Header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <h3 className="text-xl font-bold text-foreground z-10 px-6 text-center">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Problem */}
                  <div>
                    <h4 className={`text-sm font-semibold ${project.accent} mb-1`}>
                      Problem
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className={`text-sm font-semibold ${project.accent} mb-1`}>
                      Approach
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.approach}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className={`text-sm font-semibold ${project.accent} mb-2`}>
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-muted-foreground flex items-center gap-1"
                        >
                          <span className={`w-1 h-1 rounded-full bg-current ${project.accent}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
