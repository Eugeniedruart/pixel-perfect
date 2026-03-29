import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#label" className="text-sm text-foreground hover:text-primary transition-colors">Le label WEL</a>
            <a href="#solutions" className="text-sm text-foreground hover:text-primary transition-colors">Nos offres</a>
            <a href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img src={welLogo} alt="WEL - Women Equity Label" className="h-10" />
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">Mon compte</Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Je veux être Welbellisé
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <a href="#label" className="block text-sm text-foreground">Le label WEL</a>
          <a href="#solutions" className="block text-sm text-foreground">Nos offres</a>
          <a href="#faq" className="block text-sm text-foreground">Blog</a>
          <a href="#contact" className="block text-sm text-foreground">Contact</a>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">Mon compte</Button>
            <Button size="sm" className="flex-1 bg-primary text-primary-foreground">Je veux être Welbellisé</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
