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
              <a
                href="https://discord.com/users/YOUR_DISCORD_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100/30 flex items-center justify-center group relative"
                aria-label="Discord"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6603a.061.061 0 0 0-.0312-.0286ZM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189Zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Discord</span>
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
                href="https://www.linkedin.com/in/someshkumarsahoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
              </a>
              <a
                href="https://github.com/somesh-opps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="GitHub"
              >
                <Github size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
              </a>
              <a
                href="https://x.com/someshsahoo_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="Twitter"
              >
                <Twitter size={24} className="text-foreground" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Twitter</span>
              </a>
              <a
                href="https://discord.com/users/someshsahoo_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all hover:scale-110 group relative"
                aria-label="Discord"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6603a.061.061 0 0 0-.0312-.0286ZM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189Zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Discord</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Footer - Visible on all devices */}
        <div className="mt-8 pt-2 text-center text-xs lg:text-[0.8rem] text-muted-foreground">
          © {new Date().getFullYear()} Designed & built with ❤️, ☕, and a sprinkle of magic by Somesh
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
