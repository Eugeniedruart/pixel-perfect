
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Eligibility test submissions
CREATE TABLE public.eligibilite_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  employee_count TEXT NOT NULL,
  convention_collective TEXT NOT NULL,
  q_remuneration_mesure TEXT,
  q_remuneration_actions TEXT,
  q_gouvernance_part TEXT,
  q_gouvernance_objectifs TEXT,
  q_prevention_actions TEXT,
  q_prevention_formation TEXT,
  q_equilibre_dispositifs TEXT,
  q_equilibre_politiques TEXT,
  q_engagement_12mois TEXT,
  contact_nom TEXT,
  contact_prenom TEXT,
  contact_email TEXT,
  contact_fonction TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.eligibilite_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit eligibility test"
  ON public.eligibilite_submissions
  FOR INSERT
  WITH CHECK (true);
