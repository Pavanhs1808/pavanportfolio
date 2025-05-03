import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { 
  Code, 
  Paintbrush, 
  Server, 
  Wrench, 
  AlignJustify, 
  Gauge
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: Code,
      iconColorClass: "primary",
      skills: [
        { name: "HTML5", colorClass: "primary" },
        { name: "CSS3", colorClass: "primary" },
        { name: "JavaScript", colorClass: "primary" },
        { name: "React", colorClass: "primary" },
        { name: "Vue.js", colorClass: "primary" },
        { name: "TypeScript", colorClass: "primary" }
      ]
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with focus on usability and user experience.",
      icon: Paintbrush,
      iconColorClass: "secondary",
      skills: [
        { name: "Figma", colorClass: "secondary" },
        { name: "Adobe XD", colorClass: "secondary" },
        { name: "Sketch", colorClass: "secondary" },
        { name: "Prototyping", colorClass: "secondary" },
        { name: "Wireframing", colorClass: "secondary" }
      ]
    },
    {
      title: "Backend Development",
      description: "Building scalable server-side applications and APIs to support frontend functionality.",
      icon: Server,
      iconColorClass: "accent",
      skills: [
        { name: "Node.js", colorClass: "accent" },
        { name: "Express", colorClass: "accent" },
        { name: "MongoDB", colorClass: "accent" },
        { name: "Firebase", colorClass: "accent" },
        { name: "REST APIs", colorClass: "accent" }
      ]
    },
    {
      title: "Tools & Deployment",
      description: "Utilizing modern development tools and deploying applications to production environments.",
      icon: Wrench,
      iconColorClass: "foreground",
      skills: [
        { name: "Git", colorClass: "foreground" },
        { name: "Webpack", colorClass: "foreground" },
        { name: "Docker", colorClass: "foreground" },
        { name: "AWS", colorClass: "foreground" },
        { name: "Netlify", colorClass: "foreground" },
        { name: "Vercel", colorClass: "foreground" }
      ]
    },
    {
      title: "CSS Frameworks",
      description: "Building beautiful UIs with modern CSS frameworks and styling approaches.",
      icon: AlignJustify,
      iconColorClass: "blue-600",
      skills: [
        { name: "Tailwind CSS", colorClass: "blue-600" },
        { name: "Bootstrap", colorClass: "blue-600" },
        { name: "SASS/SCSS", colorClass: "blue-600" },
        { name: "Styled Components", colorClass: "blue-600" },
        { name: "CSS Modules", colorClass: "blue-600" }
      ]
    },
    {
      title: "Testing & Performance",
      description: "Ensuring application quality and performance through testing and optimization.",
      icon: Gauge,
      iconColorClass: "green-600",
      skills: [
        { name: "Jest", colorClass: "green-600" },
        { name: "Cypress", colorClass: "green-600" },
        { name: "React Testing Library", colorClass: "green-600" },
        { name: "Lighthouse", colorClass: "green-600" },
        { name: "Web Vitals", colorClass: "green-600" }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <SectionHeader 
          title="My Skills" 
          description="I've worked with a variety of technologies in the web development world. Here are my main areas of expertise:" 
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${skill.iconColorClass}/10 rounded-lg flex items-center justify-center mr-4`}>
                    <skill.icon className={`text-${skill.iconColorClass} text-xl`} />
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`skill-tag bg-${tag.colorClass}/10 text-${tag.colorClass} px-3 py-1 rounded-full text-sm`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
