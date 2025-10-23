import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import eventsData from "@/data/events.json";

const EventsSection = () => {
  const events = eventsData;
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
      className="bg-muted/50"
    >
  <div className="grid md:grid-cols-2 gap-6 text-sm">
        {events.map((event, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CalendarDays className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-base font-bold mb-2">'{event.name}'</h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{event.description}</p>
                {event.certificate && event.certificateUrl && (
                  <button
                    onClick={() => handleCertificateClick(event.name, event)}
                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium hover:bg-accent/20 transition-colors cursor-pointer inline-block"
                  >
                    Certificate Awarded
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

export default EventsSection;
