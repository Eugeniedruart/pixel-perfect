import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import welLogo from "@/assets/wel-logo.png";
import { Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const links = t("footer.links", { returnObjects: true }) as Array<{ label: string; href: string }>;

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-muted/50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="mb-3">
                <img src={welLogo} alt="WEL - Women Equity Label" className="h-8 md:h-10" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 max-w-xs">
                {t("footer.tagline")}
              </p>
              <Button variant="outline" size="sm" className="gap-2 text-xs" asChild>
                <a href="https://www.linkedin.com/company/women-equity-label/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex flex-row md:flex-col flex-wrap gap-2 md:gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-xs md:text-sm text-foreground hover:text-primary transition-colors"
                >
                  {link.label} <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            <div className="rounded-xl bg-wel-cream p-4 md:p-6">
              <h4 className="font-bold text-foreground text-sm md:text-base mb-2">
                {t("footer.ctaTitle")}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">
                {t("footer.ctaDesc")}
              </p>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                <Link to="/contact">{t("footer.ctaButton")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-background py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Women Equity Label</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">{t("footer.legal.contact")}</Link>
            <Link to="/mentions-legales" className="hover:text-foreground transition-colors">{t("footer.legal.mentions")}</Link>
            <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">{t("footer.legal.privacy")}</Link>
            <Link to="/gestion-cookies" className="hover:text-foreground transition-colors">{t("footer.legal.cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
