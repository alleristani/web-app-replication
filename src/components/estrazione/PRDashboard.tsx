
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import NumberGrid from "./NumberGrid";
import type { Contact } from "@/types/estrazione";
import { LogOut, Plus, List } from "lucide-react";

interface PRDashboardProps {
  onLogout: () => void;
  userId: string;
}

const PRDashboard = ({ onLogout, userId }: PRDashboardProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [takenNumbers, setTakenNumbers] = useState<number[]>([]);
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numeroScelto, setNumeroScelto] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: myContacts } = await supabase
      .from("contacts" as any)
      .select("*")
      .eq("pr_user_id", userId)
      .order("created_at", { ascending: false });
    setContacts(((myContacts as any[]) || []) as Contact[]);

    const { data: takenData } = await supabase.rpc(
      "get_taken_numbers" as any
    );
    setTakenNumbers((takenData as number[]) || []);
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!numeroScelto) {
      toast({
        title: "Errore",
        description: "Seleziona un numero dalla griglia",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contacts" as any).insert({
      nome: nome.trim(),
      cognome: cognome.trim(),
      telefono: telefono.trim(),
      numero_scelto: numeroScelto,
      note: note.trim() || null,
      pr_user_id: userId,
    });
    if (error) {
      toast({
        title: "Errore",
        description: error.message.includes("unique")
          ? "Numero già assegnato ad un altro contatto"
          : error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "✅ Contatto inserito con successo!" });
      setNome("");
      setCognome("");
      setTelefono("");
      setNumeroScelto(null);
      setNote("");
      fetchData();
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card p-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-bold">Area PR</h1>
        <Button variant="ghost" size="sm" onClick={onLogout}>
          <LogOut className="h-4 w-4 mr-1" /> Esci
        </Button>
      </header>

      <div className="max-w-2xl mx-auto p-4">
        <Tabs defaultValue="nuovo" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="nuovo">
              <Plus className="h-4 w-4 mr-1" /> Nuovo
            </TabsTrigger>
            <TabsTrigger value="lista">
              <List className="h-4 w-4 mr-1" /> I Miei ({contacts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nuovo">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inserisci Contatto</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label>Nome *</Label>
                      <Input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Cognome *</Label>
                      <Input
                        value={cognome}
                        onChange={(e) => setCognome(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Telefono *</Label>
                    <Input
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      required
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Numero scelto (1-90) *{" "}
                      {numeroScelto && (
                        <span className="text-primary font-bold">
                          → {numeroScelto}
                        </span>
                      )}
                    </Label>
                    <NumberGrid
                      takenNumbers={takenNumbers}
                      selectedNumber={numeroScelto}
                      onSelect={setNumeroScelto}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Note (facoltative)</Label>
                    <Textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={2}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Invio..." : "Inserisci Contatto"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lista">
            <Card>
              <CardContent className="p-0">
                {contacts.length === 0 ? (
                  <p className="p-6 text-center text-muted-foreground">
                    Nessun contatto inserito
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead>Telefono</TableHead>
                          <TableHead>N°</TableHead>
                          <TableHead>Data</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((c) => (
                          <TableRow key={c.id}>
                            <TableCell className="font-medium">
                              {c.nome} {c.cognome}
                            </TableCell>
                            <TableCell>{c.telefono}</TableCell>
                            <TableCell>
                              <span className="font-bold text-primary">
                                {c.numero_scelto}
                              </span>
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground">
                              {new Date(c.created_at).toLocaleDateString(
                                "it-IT"
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PRDashboard;
