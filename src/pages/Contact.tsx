import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
      toast({ title: t("contact.errorTitle"), description: t("contact.errorRequired"), variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: t("contact.errorTitle"), description: t("contact.errorEmail"), variant: "destructive" });
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
      toast({ title: t("contact.errorTitle"), description: t("contact.errorGeneric"), variant: "destructive" });
      return;
    }

    toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground mb-6 md:mb-8">
          <ArrowLeft className="h-4 w-4" /> {t("contact.back")}
        </Link>

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">
          {t("contact.title1")} <span className="font-serif-display italic font-normal">{t("contact.title2")}</span>
        </h1>
        <p className="text-xs sm:text-base text-muted-foreground mb-6 md:mb-10">
          {t("contact.subtitle")}
        </p>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs md:text-sm">{t("contact.firstName")}</Label>
              <Input id="firstName" name="firstName" placeholder={t("contact.firstNamePh")} required maxLength={200} className="h-10 md:h-11 text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs md:text-sm">{t("contact.lastName")}</Label>
              <Input id="lastName" name="lastName" placeholder={t("contact.lastNamePh")} required maxLength={200} className="h-10 md:h-11 text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-xs md:text-sm">{t("contact.company")}</Label>
            <Input id="company" name="company" placeholder={t("contact.companyPh")} maxLength={300} className="h-10 md:h-11 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs md:text-sm">{t("contact.email")}</Label>
            <Input id="email" name="email" type="email" placeholder={t("contact.emailPh")} required maxLength={320} className="h-10 md:h-11 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs md:text-sm">{t("contact.message")}</Label>
            <Textarea id="message" name="message" placeholder={t("contact.messagePh")} rows={4} maxLength={5000} className="text-sm" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12" disabled={loading}>
            {loading ? t("contact.submitting") : t("contact.submit")}
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
