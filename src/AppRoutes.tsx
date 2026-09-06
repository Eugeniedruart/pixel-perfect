import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import Methodologie from "./pages/Methodologie.tsx";
import Offres from "./pages/Offres.tsx";
import NotFound from "./pages/NotFound.tsx";
import Eligibilite from "./pages/Eligibilite.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import GestionCookies from "./pages/GestionCookies.tsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/offres" element={<Offres />} />
    <Route path="/methodologie" element={<Methodologie />} />
    <Route path="/eligibilite" element={<Eligibilite />} />
    <Route path="/mentions-legales" element={<MentionsLegales />} />
    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
    <Route path="/gestion-cookies" element={<GestionCookies />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
