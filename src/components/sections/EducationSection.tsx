import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Trophy, Star } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "Chandigarh University",
    period: "2021 – 2025",
    score: "CGPA: 7.61",
  },
  {
    degree: "Intermediate (BSEB)",
    institution: "College of Commerce, Arts Science",
    period: "2018 – 2020",
    score: "Percentage: 83.8%",
  },
  {
    degree: "Matriculation (CBSE)",
    institution: "Presidency School",
    period: "2017 – 2018",
    score: "Percentage: 83.2%",
  },
];

const certifications = [
  {
    title: "Internet of Things – NPTEL",
    issuer: "NPTEL, 2023",
    score: "94%",
    description: "Excellence in IoT concepts and applications",
    featured: true,
  },
  {
    title: "Quantum Physics – NPTEL",
    issuer: "NPTEL, 2023",
    score: "63%",
    description: "Understanding of quantum physics fundamentals",
    featured: false,
  },
  {
    title: "Introduction to MySQL Databases",
    issuer: "Coursera",
    score: null,
    description: "Database management and SQL fundamentals",
    featured: false,
  },
];

const achievements = [
  {
    icon: Star,
    title: "5-Star C++ Badge",
    description: "HackerRank - Advanced coding proficiency",
  },
  {
    icon: Trophy,
    title: "120+ DSA Problems",
    description: "Solved on LeetCode platform",
  },
  {
    icon: Award,
    title: "94% in NPTEL IoT",
    description: "Top performer in certification",
  },
  {
    icon: BookOpen,
    title: "Hackathon Participant",
    description: "College-level hackathons and coding contests",
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
              {/* Education Cards */}
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-primary font-medium">
                          {edu.period}
                        </span>
                        <span className="text-sm font-semibold text-foreground bg-secondary px-2 py-0.5 rounded">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.title}
                      className={`p-4 rounded-xl ${
                        cert.featured ? "bg-primary/5 ring-1 ring-primary/20" : "bg-secondary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">
                          {cert.title}
                        </h4>
                        {cert.score && (
                          <span className={`text-sm font-bold ${cert.featured ? "text-primary" : "text-muted-foreground"}`}>
                            {cert.score}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
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

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Languages</h4>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">English</span>
                    <span className="text-xs text-primary font-medium">Fluent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Hindi</span>
                    <span className="text-xs text-primary font-medium">Native</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
