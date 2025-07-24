import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { scrollToSection } from '@/utils/scroll';

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
              <span >Pavan HS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Sofware developper, Web developper,RAG engineer, AI/ML Enthusiast,Problem solver</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-lg">
            Building powerful web applications and AI solutions with cutting-edge technologies like MCP, focusing on scalable architectures and intuitive user experiences,versatile in many ai agent model usage and Ai integration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-white font-medium transform transition-transform hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary transform transition-transform hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/pavanhs1808" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/pavan-hs-33137b272/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/pavanhs_?igsh=MTdpMXM0MXVsNWRycg==" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://x.com/PavanHs1815" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FaTwitter className="text-2xl" />
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
                src="https://avatars.githubusercontent.com/u/135006096?v=4"
                alt="Pavan HS" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
                onError={(e) => {
                  console.error('Image failed to load:', e.currentTarget.src);
                  // Try loading with a different path
                  if (e.currentTarget.src.startsWith('/')) {
                    e.currentTarget.src = 'anime-profile.jpg';
                  } else {
                    e.currentTarget.src = '/default-avatar.png';
                    e.currentTarget.onerror = null;
                  }
                }}
                onLoad={() => console.log('Image loaded successfully')}
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
