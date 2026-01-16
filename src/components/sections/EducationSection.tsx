import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = {
  degree: "Bachelor's in Computer Science",
  institution: "University Name",
  period: "2020 - 2024",
  highlights: [
    "Strong foundation in Computer Science fundamentals",
    "Focus on Software Engineering principles",
    "Hands-on project-based learning",
  ],
};

const certifications = [
  {
    title: "NPTEL Certification",
    issuer: "IIT/IISC",
    score: "94%",
    description: "Excellence in core computer science concepts",
    featured: true,
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Consistently high academic performance throughout the program",
  },
  {
    icon: Award,
    title: "94% in NPTEL",
    description: "Top performer in national certification program",
  },
  {
    icon: BookOpen,
    title: "Project-Based Learning",
    description: "Completed multiple real-world software projects",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-secondary/30">
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
              Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Education & <span className="text-gradient">Achievements</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Education & Certifications */}
            <div className="space-y-6">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {education.degree}
                    </h3>
                    <p className="text-muted-foreground">{education.institution}</p>
                    <p className="text-sm text-primary font-medium mt-1">
                      {education.period}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {education.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Certification Card */}
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`bg-card rounded-2xl p-6 shadow-card ${
                    cert.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold text-foreground">
                          {cert.title}
                        </h3>
                        {cert.featured && (
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="text-2xl font-bold text-gradient">
                          {cert.score}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-2xl p-6 shadow-card h-fit"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Key Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <achievement.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
