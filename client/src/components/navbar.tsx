import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/pavanhs1808", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaDribbble, href: "#", label: "Dribbble" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      id="navbar" 
      className={cn(
        "fixed w-full bg-background/90 backdrop-blur-md z-50 transition-all duration-300",
        scrolled ? "shadow-md py-2" : "shadow-sm py-3"
      )}
    >
      <div className="container px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Pavan<span className="text-foreground">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="flex items-center space-x-6 mr-4">
            {navLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-3 border-l border-border pl-4 mr-2">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors p-1.5"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
        
        {/* Mobile: Menu Button + Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className="text-foreground hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div 
            className="md:hidden bg-background border-t border-border mt-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href} 
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Social Icons (Mobile) */}
              <div className="flex items-center space-x-4 pt-3 border-t border-border">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors p-1.5"
                    aria-label={link.label}
                    onClick={closeMenu}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
