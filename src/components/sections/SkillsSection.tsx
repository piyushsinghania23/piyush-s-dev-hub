import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Settings, Users, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "C++", "C#", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    icon: Settings,
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Node.js"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Visual Studio", "Git/GitHub", "Postman"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI & Cloud",
    icon: Cpu,
    skills: ["Gemini AI API", "REST APIs", "JSON"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Concepts",
    icon: Database,
    skills: ["Data Structures & Algorithms", "OOP", "Code Quality & Best Practices", "Authentication/Authorization"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Interpersonal Skills",
    icon: Users,
    skills: ["Leadership", "Team Collaboration", "Communication", "Decision-Making", "Multitasking"],
    color: "from-pink-500 to-rose-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
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
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive skill set spanning full-stack development, software engineering 
              principles, and modern frameworks for building scalable applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
