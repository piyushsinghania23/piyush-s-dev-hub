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
    description: "Analytical approach to challenges",
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
                I'm an aspiring Software Engineer with a strong foundation in{" "}
                <span className="text-foreground font-medium">Frontend Development</span> and 
                core Software Engineering principles. My journey in tech is driven by 
                a passion for creating solutions that are not just functional, but 
                elegant and user-centric.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in building responsive web applications and 
                a solid understanding of{" "}
                <span className="text-foreground font-medium">Data Structures & Algorithms</span>, 
                I approach each project with a problem-solving mindset. I believe in 
                writing clean, maintainable code that stands the test of time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a fresher with strong project-based learning, I'm eager to 
                contribute to innovative teams and grow as a developer while 
                building reliable, efficient applications that make a difference.
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
