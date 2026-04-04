
CREATE POLICY "Deny all select on contact_submissions"
ON public.contact_submissions
FOR SELECT
USING (false);

CREATE POLICY "Deny all select on eligibilite_submissions"
ON public.eligibilite_submissions
FOR SELECT
USING (false);
