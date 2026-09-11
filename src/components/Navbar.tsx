import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import welLogo from "@/assets/wel-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo – left */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={welLogo} alt="WEL - Women Equity Label" className="h-10" />
          </Link>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            <Link to="/#label" className="text-sm text-foreground hover:text-primary transition-colors">{t("nav.label")}</Link>
            <Link to="/offres" className="text-sm text-foreground hover:text-primary transition-colors">{t("nav.offres")}</Link>
            <Link to="/methodologie" className="text-sm text-foreground hover:text-primary transition-colors">{t("nav.methodologie")}</Link>
            <Link to="/entreprises-labellisees" className="text-sm text-foreground hover:text-primary transition-colors">{t("nav.labeled")}</Link>
            <Link to="/contact" className="text-sm text-foreground hover:text-primary transition-colors">{t("nav.contact")}</Link>
          </div>

          {/* Right button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">{t("nav.cta")}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" className="inline-flex h-11 w-11 items-center justify-center -mr-2">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <Link to="/#label" className="block py-1.5 text-sm text-foreground">{t("nav.label")}</Link>
          <Link to="/offres" className="block py-1.5 text-sm text-foreground">{t("nav.offres")}</Link>
          <Link to="/methodologie" className="block py-1.5 text-sm text-foreground">{t("nav.methodologie")}</Link>
          <Link to="/entreprises-labellisees" className="block py-1.5 text-sm text-foreground">{t("nav.labeled")}</Link>
          <Link to="/contact" className="block py-1.5 text-sm text-foreground">{t("nav.contact")}</Link>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1 bg-primary text-primary-foreground" asChild><Link to="/contact">{t("nav.cta")}</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
