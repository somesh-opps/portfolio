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
        className="lg:hidden fixed top-6 right-6 z-50 p-2 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 text-white hover:bg-black/60 transition-all"
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
            className="flex items-center gap-3 text-gray-200 hover:text-primary-foreground transition-all hover:translate-x-1"
          >
            <Mail size={18} />
            <span className="text-sm">someshkumarsahoo28@gmail.com</span>
          </a>
          <a
            href="tel:+919614175335"
            className="flex items-center gap-3 text-gray-200 hover:text-primary-foreground transition-all hover:translate-x-1"
          >
            <Phone size={18} />
            <span className="text-sm">+91 96141 75335</span>
          </a>
        </div>

        <div className="flex gap-4 mb-10 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://www.linkedin.com/in/someshkumarsahoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-primary-foreground" />
          </a>
          <a
            href="https://github.com/somesh-opps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} className="text-primary-foreground" />
          </a>
          <a
            href="https://x.com/someshsahoo_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter size={20} className="text-primary-foreground" />
          </a>
          <a
            href="https://discord.com/users/someshsahoo_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Discord"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
              <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.486.486 0 0 0-.517.243c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.52 0c-.164-.385-.397-.874-.608-1.249a.486.486 0 0 0-.517-.243c-1.432.326-2.814.846-4.112 1.57a.48.48 0 0 0-.221.188C.533 9.043-.32 13.579.099 18.057a.487.487 0 0 0 .186.326c1.733 1.27 3.415 2.048 5.01 2.518a.485.485 0 0 0 .527-.176c.387-.53.732-1.09 1.03-1.674a.486.486 0 0 0-.263-.677c-.547-.21-1.067-.462-1.563-.752a.486.486 0 0 1-.048-.805c.104-.08.208-.162.308-.246a.486.486 0 0 1 .49-.07c3.927 1.793 8.18 1.793 12.08 0a.486.486 0 0 1 .491.07c.1.084.204.166.308.246a.486.486 0 0 1-.048.805c-.496.29-1.016.542-1.563.752a.486.486 0 0 0-.263.677c.298.584.643 1.144 1.03 1.674a.485.485 0 0 0 .527.176c1.595-.47 3.277-1.248 5.01-2.518a.487.487 0 0 0 .186-.326c.5-5.177-.838-9.673-3.682-13.5a.48.48 0 0 0-.221-.188zM8.02 15.331c-1.01 0-1.845-.924-1.845-2.057 0-1.133.818-2.057 1.845-2.057 1.034 0 1.86.933 1.845 2.057 0 1.133-.818 2.057-1.845 2.057zm7.96 0c-1.01 0-1.845-.924-1.845-2.057 0-1.133.818-2.057 1.845-2.057 1.034 0 1.86.933 1.845 2.057 0 1.133-.818 2.057-1.845 2.057z"/>
            </svg>
          </a>
        </div>

        <nav className="flex flex-col gap-2 w-full animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left py-3 px-6 text-sm text-gray-200 hover:text-primary-foreground hover:bg-white/15 rounded-lg transition-all"
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
