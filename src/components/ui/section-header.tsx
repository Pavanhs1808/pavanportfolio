import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  title,
  description,
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto"></div>
      {description && (
        <p className={cn("text-muted-foreground mt-4 max-w-2xl mx-auto", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
