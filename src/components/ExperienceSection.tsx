import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import experienceData from "@/data/experience.json";

const ExperienceSection = () => {
  const experience = experienceData;
  const isMobile = useIsMobile();
  const [selectedCertificates, setSelectedCertificates] = useState<{name: string, urls: string[]} | null>(null);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Helper function to extract all certificate URLs from an experience object
  const getCertificateUrls = (exp: Record<string, unknown>): string[] => {
    const urls: string[] = [];
    let counter = 1;
    
    // Check certificateUrl first
    if (exp.certificateUrl && typeof exp.certificateUrl === 'string') {
      urls.push(exp.certificateUrl);
    }
    
    // Check certificateUrl2, certificateUrl3, etc.
    while (exp[`certificateUrl${counter + 1}`] && typeof exp[`certificateUrl${counter + 1}`] === 'string') {
      urls.push(exp[`certificateUrl${counter + 1}`] as string);
      counter++;
    }
    
    return urls;
  };

  const handleCertificateClick = (expName: string, exp: Record<string, unknown>) => {
    const urls = getCertificateUrls(exp);
    setSelectedCertificates({name: expName, urls});
    setCurrentCertificateIndex(0);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedCertificates(null);
    setCurrentCertificateIndex(0);
  };

  const nextCertificate = () => {
    if (selectedCertificates && currentCertificateIndex < selectedCertificates.urls.length - 1) {
      setCurrentCertificateIndex(currentCertificateIndex + 1);
    }
  };

  const prevCertificate = () => {
    if (currentCertificateIndex > 0) {
      setCurrentCertificateIndex(currentCertificateIndex - 1);
    }
  };

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Practical Learning"
    >
      {/* Mobile: Horizontal scroll layout */}
      {isMobile ? (
        <div className="overflow-x-auto overflow-y-visible pt-4 pb-4 -mx-6 pr-6">
          <div className="flex gap-4 w-max py-2">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-3 glow-on-hover bg-muted/50 text-xs flex-shrink-0 w-64 h-40"
              >
                <div className="relative flex flex-col justify-between h-full gap-4">
                  {/* top-right icon */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center" aria-hidden="true">
                    <Award size={14} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">{exp.name}</h3>
                    {exp.description && (
                      <p className="text-xs text-muted-foreground mt-2">{exp.description}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground">{exp.type}</span>
                    {exp.certificate && (
                      <button
                        onClick={() => handleCertificateClick(exp.name, exp)}
                        className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                        aria-label={`View certificate for ${exp.name}`}
                      >
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        /* Tablet/Desktop: Grid layout */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-base">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="p-3 md:p-6 glow-on-hover bg-muted/50 h-full text-xs md:text-base"
            >
              <div className="relative flex flex-col justify-between h-full gap-4">
                {/* top-right icon */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center" aria-hidden="true">
                  <Award size={14} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold mb-1">{exp.name}</h3>
                  {exp.description && (
                    <p className="text-xs md:text-sm text-muted-foreground mt-2">{exp.description}</p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs md:text-sm text-muted-foreground">{exp.type}</span>
                  {exp.certificate && (
                    <button
                      onClick={() => handleCertificateClick(exp.name, exp)}
                      className="text-[10px] md:text-xs bg-primary/10 text-primary px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                      aria-label={`View certificate for ${exp.name}`}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      {/* Certificate Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-sm md:text-base">Certificate - {selectedCertificates?.name}</span>
              {selectedCertificates && selectedCertificates.urls.length > 1 && (
                <span className="text-sm text-muted-foreground">
                  {currentCertificateIndex + 1} of {selectedCertificates.urls.length}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="relative flex items-center justify-center p-4">
            {/* Previous button */}
            {selectedCertificates && selectedCertificates.urls.length > 1 && currentCertificateIndex > 0 && (
              <button
                onClick={prevCertificate}
                className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            {/* Certificate image */}
            {selectedCertificates && selectedCertificates.urls[currentCertificateIndex] ? (
              <img
                src={selectedCertificates.urls[currentCertificateIndex]}
                alt={`Certificate ${currentCertificateIndex + 1} for ${selectedCertificates.name}`}
                loading="lazy"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            
            {/* Next button */}
            {selectedCertificates && selectedCertificates.urls.length > 1 && currentCertificateIndex < selectedCertificates.urls.length - 1 && (
              <button
                onClick={nextCertificate}
                className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                aria-label="Next certificate"
              >
                <ChevronRight size={24} />
              </button>
            )}
            
            {/* Fallback placeholder */}
            <div className="text-center space-y-4 hidden">
              <Award size={64} className="text-primary mx-auto" />
              <h4 className="text-xl font-semibold">Certificate of Participation</h4>
              <p className="text-muted-foreground">For {selectedCertificates?.name}</p>
              <p className="text-sm text-muted-foreground mt-4">
                Certificate image could not be loaded.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default ExperienceSection;
