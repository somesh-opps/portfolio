import { Linkedin, Github, Twitter, Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile-placeholder.jpg";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "events", label: "Events Attended" },
    { id: "courses", label: "Courses Completed" },
    { id: "contact", label: "Contact Address" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 text-white hover:bg-black/40 transition-all"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <nav className="fixed top-20 right-6 left-6 bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl animate-slideUp border border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 px-4 text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-96 gradient-sidebar flex-col items-center py-12 px-8 overflow-y-auto">
        <div className="flex flex-col items-center mb-8 animate-fadeIn">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-2xl">
            <img
              src={profileImg}
              alt="Somesh Kumar Sahoo"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-primary-foreground text-center mb-2">
            Somesh Kumar Sahoo
          </h2>
        </div>

        <div className="flex flex-col gap-2 mb-8 w-full animate-slideInLeft">
          <a
            href="mailto:someshkumarsahoo28@gmail.com"
            className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-all hover:translate-x-1"
          >
            <Mail size={18} />
            <span className="text-sm">someshkumarsahoo28@gmail.com</span>
          </a>
          <a
            href="tel:+919614175335"
            className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-all hover:translate-x-1"
          >
            <Phone size={18} />
            <span className="text-sm">+91 96141 75335</span>
          </a>
        </div>

        <div className="flex gap-4 mb-10 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-primary-foreground" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} className="text-primary-foreground" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={20} className="text-primary-foreground" />
          </a>
        </div>

        <nav className="flex flex-col gap-2 w-full animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-3 px-4 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
