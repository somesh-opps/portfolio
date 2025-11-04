import Section from "./Section";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      level: "B.Tech",
      institution: "University of Engineering and Management (UEM), Kolkata",
      board: "Autonomous University",
      score: "Ongoing",
      year: "2024 - Present",
      description: "Computer Science and Technology"
    },
    {
      level: "12th Board",
      institution: "Contai Town R. C. Vidyapith, Contai",
      board: "WBCHSE Board",
      score: "91 percentile",
      year: "2022 - 2024",
      description: "Higher Secondary education with focus on Science stream"
    },
    {
      level: "10th Board",
      institution: "Contai Town R. C. Vidyapith, Contai",
      board: "WBBSE Board",
      score: "94.14 percent",
      year: "2022",
      description: "Secondary education with excellent academic performance"
    },
  ];

  return (
    <Section
      id="education"
      title="Education"
      subtitle="ACADEMIC BACKGROUND"
      className="bg-muted/50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          {education.map((edu, index) => (
            <div key={index} className="relative flex items-start mb-6 md:mb-12 last:mb-0">
              {/* Timeline icon - hidden on mobile */}
              <div className="absolute left-2 w-12 h-12 bg-muted rounded-full items-center justify-center z-10 mt-2 shadow-sm hidden md:flex">
                <GraduationCap className="text-primary w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="ml-0 md:ml-16 w-full">
                <Card className="p-2 md:p-6 glow-on-hover bg-card/50 backdrop-blur border-muted relative text-xs md:text-base">
                  {/* Mobile icon - top right corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center md:hidden">
                    <GraduationCap className="text-primary w-5 h-5" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <h3 className="text-base md:text-xl font-bold text-primary">{edu.level}</h3>
                    </div>
                    <span className="hidden md:inline text-sm font-medium text-primary bg-muted/50 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm md:text-lg font-semibold text-foreground">{edu.institution}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{edu.board}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{edu.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">Score:</span>
                      <span className="text-xs md:text-sm text-muted-foreground">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
