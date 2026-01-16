import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "120+ DSA problems on LeetCode",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative and communicative",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Adapting to new technologies fast",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Passionate About Building{" "}
              <span className="text-gradient">Great Software</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science Engineering graduate with a strong foundation in{" "}
                <span className="text-foreground font-medium">C++, C#, ASP.NET Core</span>, and 
                SQL Server. My journey in tech is driven by a passion for creating 
                solutions that are not just functional, but elegant and scalable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Completed multiple full-stack projects using{" "}
                <span className="text-foreground font-medium">MERN Stack</span> and 
                consistently improved problem-solving abilities through platforms 
                like LeetCode with 120+ solved problems and earned a 5-Star C++ 
                badge on HackerRank.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seeking an entry-level software development role in an MNC to 
                apply my technical skills and contribute to impactful solutions 
                while growing as a developer.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
