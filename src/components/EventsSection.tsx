import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import eventsData from "@/data/events.json";

const EventsSection = () => {
  const events = eventsData;
  const isMobile = useIsMobile();
  const [selectedCertificates, setSelectedCertificates] = useState<{name: string, urls: string[]} | null>(null);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Helper function to extract all certificate URLs from an event object
  const getCertificateUrls = (event: Record<string, unknown>): string[] => {
    const urls: string[] = [];
    let counter = 1;
    
    // Check certificateUrl first
    if (event.certificateUrl && typeof event.certificateUrl === 'string') {
      urls.push(event.certificateUrl);
    }
    
    // Check certificateUrl2, certificateUrl3, etc.
    while (event[`certificateUrl${counter + 1}`] && typeof event[`certificateUrl${counter + 1}`] === 'string') {
      urls.push(event[`certificateUrl${counter + 1}`] as string);
      counter++;
    }
    
    return urls;
  };

  const handleCertificateClick = (eventName: string, event: Record<string, unknown>) => {
    const urls = getCertificateUrls(event);
    setSelectedCertificates({name: eventName, urls});
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
      id="events"
      title="Events Attended"
      subtitle="GAINED VALUABLE INSIGHTS"
      className="md:bg-muted/50"
    >
      {/* Mobile: Horizontal scroll layout */}
      {isMobile ? (
        <div className="overflow-x-auto overflow-y-visible pt-4 pb-4 -mx-6 pr-6">
          <div className="flex gap-4 w-max py-2">
            {events.map((event, index) => (
              <Card
                key={index}
                className="p-3 glow-on-hover bg-muted/50 text-xs flex-shrink-0 w-80 h-40"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="text-primary" size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold mb-2">'{event.name}'</h3>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">{event.description}</p>
                    {event.certificate && event.certificateUrl && (
                      <button
                        onClick={() => handleCertificateClick(event.name, event)}
                        className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer inline-block"
                        aria-label={`View certificate for ${event.name}`}
                      >
                        Certificate Awarded
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
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-6 glow-on-hover bg-muted/50 md:bg-transparent"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="text-primary" size={16} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2">'{event.name}'</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 leading-relaxed">{event.description}</p>
                  {event.certificate && event.certificateUrl && (
                    <button
                      onClick={() => handleCertificateClick(event.name, event)}
                      className="text-[10px] md:text-xs bg-primary/10 text-primary px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer inline-block"
                      aria-label={`View certificate for ${event.name}`}
                    >
                      Certificate Awarded
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

export default EventsSection;
