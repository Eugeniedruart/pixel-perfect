import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string)?.trim().slice(0, 200);
    const lastName = (formData.get("lastName") as string)?.trim().slice(0, 200);
    const email = (formData.get("email") as string)?.trim().slice(0, 320);
    const company = (formData.get("company") as string)?.trim().slice(0, 300);
    const message = (formData.get("message") as string)?.trim().slice(0, 5000);

    if (!firstName || !lastName || !email) {
      toast({ title: "Erreur", description: "Veuillez remplir les champs obligatoires.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Erreur", description: "Veuillez entrer un email valide.", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      company: company || null,
      message: message || null,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
      return;
    }

    toast({ title: "Merci !", description: "Votre demande a bien été envoyée. Nous vous recontacterons rapidement." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground mb-6 md:mb-8">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
          Je veux être <span className="font-serif-display italic font-normal">Welbellisé</span>
        </h1>
        <p className="text-xs sm:text-base text-muted-foreground mb-6 md:mb-10">
          Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement.
        </p>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs md:text-sm">Prénom</Label>
              <Input id="firstName" name="firstName" placeholder="Votre prénom" required maxLength={200} className="h-10 md:h-11 text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs md:text-sm">Nom</Label>
              <Input id="lastName" name="lastName" placeholder="Votre nom" required maxLength={200} className="h-10 md:h-11 text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-xs md:text-sm">Entreprise</Label>
            <Input id="company" name="company" placeholder="Nom de votre entreprise" maxLength={300} className="h-10 md:h-11 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs md:text-sm">Email professionnel</Label>
            <Input id="email" name="email" type="email" placeholder="vous@entreprise.com" required maxLength={320} className="h-10 md:h-11 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
            <Textarea id="message" name="message" placeholder="Décrivez votre projet ou posez-nous vos questions..." rows={4} maxLength={5000} className="text-sm" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
