import { useEffect } from "react";
import { motion } from "framer-motion";
import { useGitHubRepos } from "@/hooks/use-github";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { AlertCircle } from "lucide-react";

export function Projects() {
  const { repos, isLoading, error } = useGitHubRepos("pavanhs1808", 6);

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container px-4">
        <SectionHeader 
          title="My Projects" 
          description="A collection of my recent work. These projects showcase my skills and experience in web development."
        />
        
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <AlertCircle className="text-destructive h-12 w-12 mb-4" />
            <p className="text-muted-foreground text-center max-w-md">
              {error}. Please try again later or check out my GitHub profile directly.
            </p>
          </div>
        ) : repos.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No repositories found. Check back soon for updates!</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {repos.map((repo) => (
              <ProjectCard key={repo.id} project={repo} />
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://github.com/pavanhs1808" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="secondary" 
              className="bg-foreground hover:bg-foreground/90 text-background"
            >
              <FaGithub className="mr-2 h-4 w-4" /> View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
