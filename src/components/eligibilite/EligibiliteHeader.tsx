import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import welLogo from "@/assets/wel-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const EligibiliteHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-3 px-4 sm:px-10 py-4 sm:py-6">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <Link to="/">
          <img src={welLogo} alt="Women Equity Label" className="h-9 sm:h-12" />
        </Link>
        <h1 className="text-base sm:text-2xl font-bold text-foreground">
          {t("eligibilite.headerTitle1")}{" "}
          <span className="font-serif-display italic font-normal">{t("eligibilite.headerTitle2")}</span>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("eligibilite.headerExit")} <X className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
};

export default EligibiliteHeader;
