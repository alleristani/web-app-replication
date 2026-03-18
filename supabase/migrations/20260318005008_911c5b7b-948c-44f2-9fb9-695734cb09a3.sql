
-- Add new status to contact_status enum
ALTER TYPE public.contact_status ADD VALUE IF NOT EXISTS 'non_disponibile_degustazione';

-- Make numero_scelto nullable so we can "free" a number without deleting the contact
ALTER TABLE public.contacts ALTER COLUMN numero_scelto DROP NOT NULL;
