
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import LoginForm from "@/components/estrazione/LoginForm";
import AdminDashboard from "@/components/estrazione/AdminDashboard";
import PRDashboard from "@/components/estrazione/PRDashboard";

const Estrazione = () => {
  const [session, setSession] = useState<any>(null);
  const [role, setRole] = useState<"admin" | "pr" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        if (session?.user) {
          setTimeout(async () => {
            const { data } = await supabase
              .from("user_roles" as any)
              .select("role")
              .eq("user_id", session.user.id)
              .single();
            setRole((data as any)?.role || null);
            setLoading(false);
          }, 0);
        } else {
          setRole(null);
          setLoading(false);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const renderContent = () => {
    if (loading)
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      );
    if (!session) return <LoginForm />;
    if (role === "admin") return <AdminDashboard onLogout={handleLogout} />;
    if (role === "pr")
      return <PRDashboard onLogout={handleLogout} userId={session.user.id} />;
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Ruolo non riconosciuto. Contatta l'amministratore.
        </p>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Area Riservata – Estrazione</title>
      </Helmet>
      {renderContent()}
    </>
  );
};

export default Estrazione;
