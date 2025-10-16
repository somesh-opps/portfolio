import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  status: string;
}

const ProjectsSection = () => {
  const projects: Project[] = projectsData;

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="MY WORK"
      className="bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto text-xs sm:text-base">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group bg-card/50 border-muted hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden backdrop-blur"
          >
            {/* Project Image */}
            <div className="relative h-32 md:h-48 overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <Badge
                  className={`text-xs px-2 py-1 font-medium shadow-lg ${
                    project.status === 'Completed'
                      ? 'bg-green-500/90 text-white border-green-600'
                      : project.status === 'In Progress'
                      ? 'bg-blue-500/90 text-white border-blue-600'
                      : project.status === 'On Hold'
                      ? 'bg-yellow-500/90 text-white border-yellow-600'
                      : 'bg-gray-500/90 text-white border-gray-600'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              {/* Title and Links */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.githubLink && (
                    <button className="w-8 h-8 bg-muted hover:bg-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all">
                      <Code size={16} />
                    </button>
                  )}
                  {project.liveLink && (
                    <button className="w-8 h-8 bg-accent hover:bg-accent/80 rounded-lg flex items-center justify-center text-accent-foreground transition-all">
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-[10px] md:text-xs px-1 py-0.5 md:px-2 md:py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
