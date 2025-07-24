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
                  src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740" 
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
              Creative and versatile software developer with hands-on experience in web development, AI/ML, and scalable solution design. 
              Skilled in building end-to-end web applications and integrating intelligent features using technologies like Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP).
              Known for visual thinking, intuitive problem-solving, and blending frontend and backend expertise to craft user-focused, AI-powered systems from concept to deployment.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a background in Computer Science and a focus on emerging technologies, I bridge the gap between traditional web development 
              and modern AI implementations. I'm particularly experienced in Python-based machine learning, React ecosystems, and cloud 
              architectures, enabling me to develop intelligent and efficient applications.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities to keep a balanced lifestyle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">B.E in Computer Science</span>
              </div>
              <div className="flex items-center">
                <Code className="text-primary mr-2 h-5 w-5" />
                <span className="text-foreground">web dev & AI Developer</span>
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
            
             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
               <Button variant="secondary" className="bg-foreground text-background hover:bg-foreground/90">
               <FileDown className="mr-2 h-4 w-4" /> View Resume
               </Button>
             </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
