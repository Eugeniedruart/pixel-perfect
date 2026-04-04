import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import Methodologie from "./pages/Methodologie.tsx";
import Offres from "./pages/Offres.tsx";
import NotFound from "./pages/NotFound.tsx";
import Eligibilite from "./pages/Eligibilite.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/methodologie" element={<Methodologie />} />
          <Route path="/eligibilite" element={<Eligibilite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
