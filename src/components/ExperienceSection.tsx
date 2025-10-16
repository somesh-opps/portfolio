import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import experienceData from "@/data/experience.json";

const ExperienceSection = () => {
  const experience = experienceData;
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-base">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 h-full"
          >
            <div className="relative flex flex-col justify-between h-full gap-4">
              {/* top-right icon */}
              <div className="absolute -top-1 -right-1 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center" aria-hidden="true">
                <Award size={14} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{exp.name}</h4>
                {exp.description && (
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">{exp.type}</span>
                {exp.certificate && (
                  <button
                    onClick={() => handleCertificateClick(exp.name, exp)}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    View Certificate
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Certificate Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Certificate - {selectedCertificates?.name}</span>
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
              <h3 className="text-xl font-semibold">Certificate of Participation</h3>
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
