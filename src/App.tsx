import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TechTayari from "./pages/TechTayari";
import NotFound from "./pages/NotFound";
import Instructors from "./pages/Instructors";
import CallForPublications from "./pages/CallForPublications";
import CorporateTraining from "./pages/services/CorporateTraining";
import RiskAssessments from "./pages/services/RiskAssessments";
import GRC from "./pages/services/GRC";
import VAPT from "./pages/services/VAPT";
import MalwareDetection from "./pages/services/MalwareDetection";
import UndergraduateGuidance from "./pages/services/UndergraduateGuidance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech-tayari" element={<TechTayari />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/call-for-publications" element={<CallForPublications />} />
          <Route path="/services/vapt" element={<VAPT />} />
          <Route path="/services/grc" element={<GRC />} />
          <Route path="/services/risk-assessments" element={<RiskAssessments />} />
          <Route path="/services/corporate-training" element={<CorporateTraining />} />
          <Route path="/services/malware-detection" element={<MalwareDetection />} />
          <Route path="/services/undergraduate-guidance" element={<UndergraduateGuidance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;