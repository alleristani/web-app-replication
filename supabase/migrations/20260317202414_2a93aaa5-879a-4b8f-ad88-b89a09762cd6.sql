
CREATE OR REPLACE FUNCTION public.validate_numero_scelto()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.numero_scelto < 1 OR NEW.numero_scelto > 90 THEN
    RAISE EXCEPTION 'numero_scelto deve essere tra 1 e 90';
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_numero_vincente()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.numero_vincente IS NOT NULL AND (NEW.numero_vincente < 1 OR NEW.numero_vincente > 90) THEN
    RAISE EXCEPTION 'numero_vincente deve essere tra 1 e 90';
  END IF;
  RETURN NEW;
END;
$$;
