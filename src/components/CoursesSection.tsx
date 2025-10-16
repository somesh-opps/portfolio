import Section from "./Section";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import coursesData from "@/data/courses.json";

const CoursesSection = () => {
  const courses = coursesData;
  const [selectedCertificates, setSelectedCertificates] = useState<{name: string, urls: string[]} | null>(null);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Helper function to extract all certificate URLs from a course object
  const getCertificateUrls = (course: Record<string, unknown>): string[] => {
    const urls: string[] = [];
    let counter = 1;
    
    // Check certificateUrl first
    if (course.certificateUrl && typeof course.certificateUrl === 'string') {
      urls.push(course.certificateUrl);
    }
    
    // Check certificateUrl2, certificateUrl3, etc.
    while (course[`certificateUrl${counter + 1}`] && typeof course[`certificateUrl${counter + 1}`] === 'string') {
      urls.push(course[`certificateUrl${counter + 1}`] as string);
      counter++;
    }
    
    return urls;
  };

  const handleCertificateClick = (courseName: string, course: Record<string, unknown>) => {
    const urls = getCertificateUrls(course);
    setSelectedCertificates({name: courseName, urls});
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

  // Determine which courses to show based on screen size and state
  const getCoursesToShow = () => {
    // On mobile, show limited courses based on showAllCourses state
    // On desktop/tablet, always show all courses
    return courses;
  };

  const coursesToDisplay = getCoursesToShow();
  const shouldShowViewMore = courses.length > 6;

  return (
    <Section
      id="courses"
      title="Courses & Certifications"
      subtitle="CONTINUOUS LEARNING"
      className="bg-background"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-base">
        {coursesToDisplay.map((course, index) => {
          // On mobile, hide courses beyond index 5 (6th course) if showAllCourses is false
          const shouldHideCourse = !showAllCourses && index >= 6;
          
          return (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all hover:-translate-y-1 ${shouldHideCourse ? 'md:block hidden' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base md:text-xl font-bold mb-2">'{course.title}'</h4>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{course.description}</p>
                  {course.certificate && course.certificateUrl ? (
                    <button
                      onClick={() => handleCertificateClick(course.title, course)}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium hover:bg-primary/20 transition-colors cursor-pointer inline-block"
                    >
                      Certificate Awarded
                    </button>
                  ) : (
                    <span className="text-xs bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full font-medium inline-block">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      {/* View More/Less Button - Mobile Only */}
      {shouldShowViewMore && (
        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {showAllCourses ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
      
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
              <h3 className="text-xl font-semibold">Certificate of Completion</h3>
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

export default CoursesSection;
