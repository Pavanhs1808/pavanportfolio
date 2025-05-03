import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh">
      <div className="container px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary mb-2 font-medium tracking-wide">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="typewriter inline-block">Pavan HS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Frontend Developer & UI Designer</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-lg">
              Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                  View My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5">
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/pavanhs1808" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaDribbble className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative z-10 bg-white p-3 rounded-full shadow-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Developer illustration" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full"></div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-primary/20">
              <ArrowDown className="h-5 w-5 text-primary" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor" className="text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,161.39,19.38,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
