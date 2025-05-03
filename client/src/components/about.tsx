import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FileDown, GraduationCap, Code, Briefcase, Award } from "lucide-react";

export function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4">
        <SectionHeader title="About Me" />
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-muted rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                  alt="Pavan coding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Frontend Developer with a keen eye for design and user experience. I specialize in building responsive, 
              performant web applications using modern JavaScript frameworks and libraries.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a background in computer science and UI/UX design, I bridge the gap between aesthetic appeal and technical 
              functionality. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities to keep a balanced lifestyle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center">
                <Code className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">3+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">10+ Projects Completed</span>
              </div>
              <div className="flex items-center">
                <Award className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">Multiple Certifications</span>
              </div>
            </div>
            
            <Button variant="secondary" className="bg-foreground text-background hover:bg-foreground/90">
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
