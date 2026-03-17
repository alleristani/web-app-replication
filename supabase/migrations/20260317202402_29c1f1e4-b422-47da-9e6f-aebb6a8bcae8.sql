
-- Enums
CREATE TYPE public.app_role AS ENUM ('admin', 'pr');
CREATE TYPE public.contact_status AS ENUM ('nuovo', 'da_chiamare', 'contattato', 'appuntamento_fissato', 'non_interessato', 'venduto');

-- Tables
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.pr_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  username text NOT NULL UNIQUE,
  display_name text NOT NULL,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.pr_profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  cognome text NOT NULL,
  telefono text NOT NULL,
  numero_scelto integer NOT NULL UNIQUE,
  note text,
  pr_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stato contact_status NOT NULL DEFAULT 'nuovo',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.extractions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  data_estrazione date NOT NULL,
  numero_vincente integer,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.extractions ENABLE ROW LEVEL SECURITY;

-- Validation triggers
CREATE OR REPLACE FUNCTION public.validate_numero_scelto()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF NEW.numero_scelto < 1 OR NEW.numero_scelto > 90 THEN
    RAISE EXCEPTION 'numero_scelto deve essere tra 1 e 90';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER check_numero_scelto BEFORE INSERT OR UPDATE ON public.contacts FOR EACH ROW EXECUTE FUNCTION public.validate_numero_scelto();

CREATE OR REPLACE FUNCTION public.validate_numero_vincente()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF NEW.numero_vincente IS NOT NULL AND (NEW.numero_vincente < 1 OR NEW.numero_vincente > 90) THEN
    RAISE EXCEPTION 'numero_vincente deve essere tra 1 e 90';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER check_numero_vincente BEFORE INSERT OR UPDATE ON public.extractions FOR EACH ROW EXECUTE FUNCTION public.validate_numero_vincente();

-- Security definer functions
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.get_taken_numbers()
RETURNS integer[] LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COALESCE(array_agg(numero_scelto), '{}') FROM public.contacts
$$;

-- RLS Policies
CREATE POLICY "Users read own role" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admin manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "PR read own profile" ON public.pr_profiles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Admin manage profiles" ON public.pr_profiles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "PR insert own contacts" ON public.contacts FOR INSERT TO authenticated WITH CHECK (pr_user_id = auth.uid());
CREATE POLICY "PR read own contacts" ON public.contacts FOR SELECT TO authenticated USING (pr_user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin update contacts" ON public.contacts FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin delete contacts" ON public.contacts FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Auth read extractions" ON public.extractions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin manage extractions" ON public.extractions FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
