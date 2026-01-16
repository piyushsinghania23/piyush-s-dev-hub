import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Rocket } from "lucide-react";

const experiences = [
  {
    type: "Project",
    title: "Software Development Projects",
    organization: "Academic & Personal",
    period: "2023 - Present",
    description:
      "Developed multiple software projects focusing on real-world problem solving and industry best practices.",
    highlights: [
      "Built full-stack web applications using modern technologies",
      "Implemented CPU scheduling algorithms with visual simulations",
      "Created a code review platform with version control integration",
      "Practiced agile methodologies and collaborative development",
    ],
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "Training",
    title: "Software Engineering Foundations",
    organization: "NPTEL / Academic Program",
    period: "2023",
    description:
      "Completed intensive training in core computer science and software engineering concepts.",
    highlights: [
      "Data Structures & Algorithms mastery",
      "Object-Oriented Programming principles",
      "Software Development Life Cycle understanding",
      "Debugging and code optimization techniques",
    ],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "Learning",
    title: "Frontend Development Journey",
    organization: "Self-Directed Learning",
    period: "2022 - Present",
    description:
      "Continuous learning and skill development in modern frontend technologies and best practices.",
    highlights: [
      "Mastered HTML, CSS, and JavaScript fundamentals",
      "Learned React for building dynamic user interfaces",
      "Studied responsive web design principles",
      "Explored UI/UX design basics with Figma",
    ],
    icon: Rocket,
    color: "from-green-500 to-teal-500",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background">
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
              My Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Experience & <span className="text-gradient">Training</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A timeline of my learning journey, projects, and professional development
              in software engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0`}
                      >
                        <exp.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground mb-4">
                      {exp.period}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
