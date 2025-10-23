import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter'] text-sm sm:text-base">
      <Sidebar />
      
      {/* Main content - offset for desktop sidebar */}
      <main className="lg:ml-96 ">
        <Hero />
        <div className="px-4 sm:px-0 text-[10px] sm:text-base">
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EventsSection />
          <CoursesSection />
        </div>
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
