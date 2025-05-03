import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Award } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  imageUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "April 2023",
    description: "Comprehensive certification covering modern web development with React, Node.js, and MongoDB. Built full-stack applications with authentication, API integration, and deployment.",
    skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    credentialUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    date: "January 2023",
    description: "Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS. Covers core AWS services, best practices, and application lifecycle management.",
    skills: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "CloudFormation"],
    credentialUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1607034071576-13b66bdddcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    organization: "Interaction Design Foundation",
    date: "September 2022",
    description: "Comprehensive course covering user interface and experience design principles. Includes user research, wireframing, prototyping, usability testing, and design systems.",
    skills: ["UI Design", "UX Research", "Figma", "Wireframing", "Prototyping", "Usability"],
    credentialUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container px-4">
        <SectionHeader
          title="Certifications"
          description="Professional certifications and courses I've completed to expand my knowledge and skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <Award className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                  
                  <p className="text-sm text-foreground mb-4">{cert.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 4).map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 4 && (
                        <Badge variant="outline" className="bg-accent/10">
                          +{cert.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    {cert.credentialUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center justify-center gap-2"
                        asChild
                      >
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <span>View Credential</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}