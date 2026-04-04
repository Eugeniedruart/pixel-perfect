import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import welLogo from "@/assets/wel-logo.png";
import { Linkedin, ArrowRight } from "lucide-react";

const footerLinks = [
  { label: "Le label", href: "#label" },
  { label: "Nos offres", href: "/offres" },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Test d'éligibilité", href: "/eligibilite" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main footer */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left - brand */}
            <div>
              <div className="mb-4">
                <img src={welLogo} alt="WEL - Women Equity Label" className="h-10" />
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Women Equity Label est le premier label européen qui
                certifie et accompagne les entreprises engagées pour
                l'égalité professionnelle femmes-hommes.
              </p>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="https://www.linkedin.com/company/women-equity-label/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Rejoignez-nous sur LinkedIn
                </a>
              </Button>
            </div>

            {/* Middle - links */}
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label} <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            {/* Right - CTA */}
            <div className="rounded-xl bg-wel-cream p-6">
              <h4 className="font-bold text-foreground mb-2">
                Prêt·e à obtenir
                <br />
                votre label WEL ?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Évaluez vos pratiques, identifiez vos
                leviers d'amélioration et obtenez
                une label reconnue
              </p>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                <Link to="/contact">Je veux être Welbellisé <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-background py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Women Equity Label</p>
          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">Politiques de confidentialité</Link>
            <Link to="/gestion-cookies" className="hover:text-foreground transition-colors">Gestion des cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
