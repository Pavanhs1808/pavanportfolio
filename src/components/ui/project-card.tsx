import { motion } from "framer-motion";
import { Star, GitFork, ArrowRight } from "lucide-react";
import { ExtendedGitHubRepo } from "@/hooks/use-github";

interface ProjectCardProps {
  project: ExtendedGitHubRepo;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="project-card bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 bg-muted overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-white text-lg font-bold truncate">{project.name}</h3>
            <p className="text-white/80 text-sm">{project.language || "Not specified"}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4 h-20 overflow-hidden">
          {project.description || "No description available"}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-yellow-500 mr-1" /> {project.stargazers_count}
            </span>
            <span className="flex items-center text-sm text-muted-foreground">
              <GitFork className="h-4 w-4 text-muted-foreground mr-1" /> {project.forks_count}
            </span>
          </div>
          <a 
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 font-medium flex items-center"
          >
            View Project <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
