import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
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

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Pavan<span className="text-primary">.dev</span></h2>
            <p className="text-muted mt-2">Frontend Developer & UI Designer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted hover:text-background transition-colors"
                aria-label={link.label}
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
        
        <hr className="border-muted/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted mb-4 md:mb-0">
            &copy; {currentYear} Pavan HS. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            {navLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                className="text-muted hover:text-background transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
