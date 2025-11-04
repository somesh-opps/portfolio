import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Code, Database, Wrench, Users, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof Code;
  skills: Skill[];
}

interface CoreCompetency {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: Skill) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 100);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef} className="mb-2 md:mb-4">
      <div className="flex justify-between mb-1 md:mb-2">
        <span className="text-xs md:text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const CircularProgress = ({ name, level }: CoreCompetency) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setProgress(level), 100);
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <svg className="transform -rotate-90 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg md:text-xl font-bold text-primary">{progress}%</span>
        </div>
      </div>
      <span className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI & ML",
      icon: Brain,
      skills: [
        { name: "Python", level: 95 },
        { name: "OpenCV", level: 90 },
        { name: "Yolo model", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "RoboFlow", level: 70 },
      ],
    },
    {
      title: "Web Development",
      icon: Database,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Python", level: 90 },
        { name: "REST APIs", level: 80 },
        { name: "Figma", level: 80 },
        { name: "Version Control (Git)", level: 75 },
        { name: "React", level: 65 }
      ],
    },
    {
      title: "Programming Languages",
      icon: Users,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 75 },
        { name: "C", level: 95 },
        { name: "C++", level: 70 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Wrench,
      skills: [
        { name: "AWS", level: 65 },
        { name: "Docker", level: 70 },
        { name: "Google Cloud", level: 85 },
        { name: "Azure", level: 60 },
      ],
    }
  ];

  const coreCompetencies: CoreCompetency[] = [
    { name: "Team Collaboration", level: 95 },
    { name: "Data Structures & Algorithms", level: 80 },
    { name: "Communication", level: 80 },
    { name: "Time Management", level: 75 },
  ];

  const toolsAndTechnologies: string[] = [
    "VS Code",
    "GitHub",
    "Git",
    "Linux",
    "Matlab",
    "Docker",
    "AutoCAD",
    "Tinkercad",
    "Figma",
    "Canva",
    "Jupyter Notebook"
  ];
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="TECHNICAL PROFICIENCY"
      className="md:bg-muted/50"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card
              key={index}
              className="p-4 md:p-6 glow-on-hover bg-muted/50 md:bg-black/20 backdrop-blur border-muted"
            >
              <div className="flex items-center gap-2 mb-2 md:mb-5">
                <Icon className="text-primary" size={18} />
                <h3 className="text-base font-bold">{category.title}</h3>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} {...skill} />
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-4 md:p-8 border border-muted/40 rounded-xl bg-muted/50 md:bg-black/20 glow-on-hover">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-10">Core Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {coreCompetencies.map((competency, index) => (
            <CircularProgress key={index} {...competency} />
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 md:p-8 border border-muted/40 rounded-xl bg-muted/50 md:bg-black/20 glow-on-hover">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-10">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {toolsAndTechnologies.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 md:px-4 md:py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
