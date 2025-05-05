import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillTag {
  name: string;
  colorClass: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColorClass: string;
  skills: SkillTag[];
}

export function SkillCard({
  title,
  description,
  icon: Icon,
  iconColorClass,
  skills,
}: SkillCardProps) {
  const bgClass = `bg-${iconColorClass}/10`;
  const textClass = `text-${iconColorClass}`;

  return (
    <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mr-4", bgClass)}>
          <Icon className={cn("text-xl", textClass)} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.name} 
            className={cn(
              "skill-tag px-3 py-1 rounded-full text-sm", 
              `bg-${skill.colorClass}/10`, 
              `text-${skill.colorClass}`
            )}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
