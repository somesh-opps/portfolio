import { ReactNode } from "react";
// AnimatedElement removed

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 ${className}`}>
      <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gradient">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground text-sm md:text-lg uppercase tracking-wider">{subtitle}</p>
            )}
          </div>
        
          {children}
      </div>
    </section>
  );
};

export default Section;
