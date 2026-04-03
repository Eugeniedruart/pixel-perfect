import { Link } from "react-router-dom";
import { X } from "lucide-react";
import welLogo from "@/assets/wel-logo.png";

const EligibiliteHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-6">
      <div className="flex items-center gap-4">
        <img src={welLogo} alt="Women Equity Label" className="h-12" />
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">
          Testez votre{" "}
          <span className="font-serif-display italic font-normal">éligibilité</span>
        </h1>
      </div>
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Quitter <X className="h-4 w-4" />
      </Link>
    </header>
  );
};

export default EligibiliteHeader;
