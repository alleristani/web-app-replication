
-- Create contacts table for form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  cognome TEXT NOT NULL,
  telefono TEXT NOT NULL,
  indirizzo TEXT NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can insert contacts"
  ON public.contacts FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admin) can read contacts
CREATE POLICY "Authenticated users can read contacts"
  ON public.contacts FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can delete contacts
CREATE POLICY "Authenticated users can delete contacts"
  ON public.contacts FOR DELETE
  TO authenticated
  USING (true);
