import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// AnimationObserver removed — animations are disabled
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show initial load animation
    setIsLoaded(true);
    
    // Handle route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
      setIsLoaded(false);
      setTimeout(() => setIsLoaded(true), 100); // Brief fade-out and fade-in
    };
    
    return () => handleRouteChange();
  }, [location.pathname]);

  return (
    <div 
      style={{ 
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/portfolio">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
