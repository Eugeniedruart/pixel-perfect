
-- Add CHECK constraints on contact_submissions
ALTER TABLE public.contact_submissions
  ADD CONSTRAINT chk_first_name_len CHECK (char_length(first_name) <= 200),
  ADD CONSTRAINT chk_last_name_len CHECK (char_length(last_name) <= 200),
  ADD CONSTRAINT chk_company_len CHECK (char_length(company) <= 300),
  ADD CONSTRAINT chk_email_len CHECK (char_length(email) <= 320),
  ADD CONSTRAINT chk_message_len CHECK (char_length(message) <= 5000);

-- Add CHECK constraints on eligibilite_submissions
ALTER TABLE public.eligibilite_submissions
  ADD CONSTRAINT chk_elig_company_name_len CHECK (char_length(company_name) <= 200),
  ADD CONSTRAINT chk_elig_employee_count_len CHECK (char_length(employee_count) <= 50),
  ADD CONSTRAINT chk_elig_convention_len CHECK (char_length(convention_collective) <= 300),
  ADD CONSTRAINT chk_elig_contact_nom_len CHECK (char_length(contact_nom) <= 200),
  ADD CONSTRAINT chk_elig_contact_prenom_len CHECK (char_length(contact_prenom) <= 200),
  ADD CONSTRAINT chk_elig_contact_email_len CHECK (char_length(contact_email) <= 320),
  ADD CONSTRAINT chk_elig_contact_fonction_len CHECK (char_length(contact_fonction) <= 200),
  ADD CONSTRAINT chk_elig_q_fields_len CHECK (
    char_length(q_remuneration_mesure) <= 1000
    AND char_length(q_remuneration_actions) <= 1000
    AND char_length(q_gouvernance_part) <= 1000
    AND char_length(q_gouvernance_objectifs) <= 1000
    AND char_length(q_prevention_actions) <= 1000
    AND char_length(q_prevention_formation) <= 1000
    AND char_length(q_equilibre_dispositifs) <= 1000
    AND char_length(q_equilibre_politiques) <= 1000
    AND char_length(q_engagement_12mois) <= 1000
  );
