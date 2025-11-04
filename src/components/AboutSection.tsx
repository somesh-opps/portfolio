import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <Section id="about" title="About me" subtitle="A bit about me">
      <Card className="bg-muted/50 border-border/50 backdrop-blur-sm glow-on-hover">
        <CardContent className="p-8">
          <p className="text-xs sm:text-lg text-foreground/80 leading-relaxed">
            Welcome to my portfolio! I'm a passionate computer science student with strong interests in
            programming, software development, and emerging technologies. I enjoy solving problems
            through code and exploring how technology can be applied to real-world challenges. My
            curiosity drives me to keep learning more about areas like artificial intelligence, data
            science, and web development. Beyond academics, I also love being creative through projects
            and personal experiments that let me blend logic with innovation.
          </p>
        </CardContent>
      </Card>
    </Section>
  );
};

export default AboutSection;
