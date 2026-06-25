-- Lock down SECURITY DEFINER function executability
REVOKE EXECUTE ON FUNCTION public.validate_numero_scelto() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.validate_numero_vincente() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_taken_numbers() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
-- has_role and get_taken_numbers remain callable by authenticated users
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_taken_numbers() TO authenticated;