import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  // ...existing code...

  return (
    <section id="contact" className="bg-muted/50 py-12 relative">
  <div className="container mx-auto px-6 lg:pl-32">

        {/* Mobile / Tablet: centered card layout (visible below lg) */}
        <div className="lg:hidden flex justify-center">
          <div className="w-full max-w-md p-6 rounded-2xl border border-muted/40 bg-muted/30">
            <h3 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">I'd love to hear<br />
                  from you.</h3>
            {/* <p className="text-center text-sm mb-6">Feel free to reach out for collaborations or just a friendly chat!</p> */}

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg transition-shadow duration-200 hover:shadow-lg">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href="mailto:someshkumarsahoo28@gmail.com" className="font-semibold text-sm text-foreground">someshkumarsahoo28@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg transition-shadow duration-200 hover:shadow-lg">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone size={18} className="text-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <a href="tel:+919614175335" className="font-semibold text-sm text-foreground">+91 96141 75335</a>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 text-sm">Connect with me on</div>
            <div className="flex justify-center gap-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-blue-100/30 flex items-center justify-center group relative"
              >
                <Linkedin size={18} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-blue-100/30 flex items-center justify-center group relative"
              >
                <Twitter size={18} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Twitter</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-blue-100/30 flex items-center justify-center group relative"
              >
                <Github size={18} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop / Laptop: original layout (visible from lg and up) */}
        <div className="hidden lg:block">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              {/* Left Side - Title */}
              <div className="lg:w-1/2 -ml-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                  I'd love to hear<br />
                  from you.
                </h2>
              </div>

              {/* Right Side - Contact Info */}
              <div className="lg:w-1/2 lg:text-right space-y-4">
                  {/* Desktop-only boxed contact cards */}
                  <div className="hidden lg:flex lg:justify-end">
                    <div className="w-full max-w-md">
                      {/* Email card */}
                    <div className="p-4 rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center mt-1">
                            <Mail size={18} className="text-purple-600" />
                          </div>
                          <div className="min-w-0 pl-0">
                            <div className="text-xs text-slate-400">Email</div>
                            <a href="mailto:someshkumarsahoo28@gmail.com" className="font-semibold text-sm text-slate-900 break-words">someshkumarsahoo28@gmail.com</a>
                          </div>
                        </div>
                      </div>

                      {/* Phone card - smaller and below */}
                      <div className="mt-4 w-56">
                        <div className="p-3 rounded-lg border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-lg">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center mt-0.5">
                              <Phone size={18} className="text-purple-600" />
                            </div>
                            <div className="min-w-0 pl-0">
                              <div className="text-xs text-slate-400">Phone</div>
                              <a href="tel:+919614175335" className="font-semibold text-sm text-slate-900">+91 96141 75335</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mt-10 mb-6 -ml-32">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="GitHub"
              >
                <Github size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="Twitter"
              >
                <Twitter size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Footer - Visible on all devices */}
        <div className="mt-8 pt-2 text-center text-xs lg:text-[0.8rem] text-muted-foreground">
          © {new Date().getFullYear()} Somesh Kumar Sahoo. Built with passion and code.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
