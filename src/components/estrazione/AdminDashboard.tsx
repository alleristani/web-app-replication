
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import NumberGrid from "./NumberGrid";
import type {
  Contact,
  ContactStatus,
  PRProfile,
  Extraction,
} from "@/types/estrazione";
import { statusLabels } from "@/types/estrazione";
import {
  LogOut,
  Users,
  Trophy,
  BarChart3,
  Trash2,
  ClipboardList,
  Unlock,
} from "lucide-react";

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [prProfiles, setPrProfiles] = useState<PRProfile[]>([]);
  const [extraction, setExtraction] = useState<Extraction | null>(null);
  const [takenNumbers, setTakenNumbers] = useState<number[]>([]);

  const [newPrUsername, setNewPrUsername] = useState("");
  const [newPrPassword, setNewPrPassword] = useState("");
  const [newPrDisplayName, setNewPrDisplayName] = useState("");
  const [creatingPr, setCreatingPr] = useState(false);

  const [extractionDate, setExtractionDate] = useState("");
  const [winningNumber, setWinningNumber] = useState("");

  const fetchData = useCallback(async () => {
    const { data: contactsData } = await supabase
      .from("contacts" as any)
      .select("*")
      .order("created_at", { ascending: false });
    const contactsList = ((contactsData as any[]) || []) as Contact[];
    setContacts(contactsList);
    setTakenNumbers(contactsList.filter((c) => c.numero_scelto !== null).map((c) => c.numero_scelto as number));

    const { data: prData } = await supabase
      .from("pr_profiles" as any)
      .select("*")
      .order("created_at", { ascending: false });
    setPrProfiles(((prData as any[]) || []) as PRProfile[]);

    const { data: extractionData } = await supabase
      .from("extractions" as any)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (extractionData) {
      const ext = extractionData as any as Extraction;
      setExtraction(ext);
      setExtractionDate(ext.data_estrazione || "");
      setWinningNumber(ext.numero_vincente?.toString() || "");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateContactStatus = async (
    contactId: string,
    newStatus: ContactStatus
  ) => {
    await supabase
      .from("contacts" as any)
      .update({ stato: newStatus })
      .eq("id", contactId);
    setContacts((prev) =>
      prev.map((c) => (c.id === contactId ? { ...c, stato: newStatus } : c))
    );
  };

  const freeNumber = async (contactId: string, numero: number | null) => {
    if (!numero) return;
    if (!confirm(`Liberare il numero ${numero}? Il contatto resterà nel database.`)) return;
    const { error } = await supabase
      .from("contacts" as any)
      .update({ numero_scelto: null, stato: "non_disponibile_degustazione" })
      .eq("id", contactId);
    if (error) {
      toast({ title: "Errore", description: error.message, variant: "destructive" });
    } else {
      toast({ title: `✅ Numero ${numero} liberato` });
      fetchData();
    }
  };

  const deleteContact = async (contactId: string, nome: string) => {
    if (!confirm(`Eliminare definitivamente il contatto "${nome}"?`)) return;
    const { error } = await supabase
      .from("contacts" as any)
      .delete()
      .eq("id", contactId);
    if (error) {
      toast({ title: "Errore", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Contatto eliminato" });
      fetchData();
    }
  };

  const createPR = async () => {
    if (!newPrUsername || !newPrPassword) return;
    setCreatingPr(true);
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: {
        action: "create_pr",
        username: newPrUsername,
        password: newPrPassword,
        display_name: newPrDisplayName || newPrUsername,
      },
    });
    if (error || data?.error) {
      toast({
        title: "Errore",
        description: data?.error || error?.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "✅ PR creato con successo!" });
      setNewPrUsername("");
      setNewPrPassword("");
      setNewPrDisplayName("");
      fetchData();
    }
    setCreatingPr(false);
  };

  const deletePR = async (userId: string, username: string) => {
    if (
      !confirm(
        `Eliminare il PR "${username}"? Tutti i suoi contatti saranno rimossi.`
      )
    )
      return;
    const { data, error } = await supabase.functions.invoke("manage-users", {
      body: { action: "delete_pr", user_id: userId },
    });
    if (error || data?.error) {
      toast({
        title: "Errore",
        description: data?.error || error?.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "PR eliminato" });
      fetchData();
    }
  };

  const saveExtraction = async () => {
    if (!extractionDate) return;
    const numVincente = winningNumber ? parseInt(winningNumber) : null;

    if (extraction) {
      await supabase
        .from("extractions" as any)
        .update({
          data_estrazione: extractionDate,
          numero_vincente: numVincente,
        })
        .eq("id", extraction.id);
    } else {
      await supabase.from("extractions" as any).insert({
        data_estrazione: extractionDate,
        numero_vincente: numVincente,
      });
    }
    toast({ title: "✅ Estrazione salvata!" });
    fetchData();
  };

  const getPrName = (userId: string) => {
    const pr = prProfiles.find((p) => p.user_id === userId);
    return pr?.display_name || pr?.username || "N/A";
  };

  const winner = extraction?.numero_vincente
    ? contacts.find((c) => c.numero_scelto === extraction.numero_vincente)
    : null;

  const prStats = prProfiles.map((pr) => ({
    ...pr,
    contactCount: contacts.filter((c) => c.pr_user_id === pr.user_id).length,
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card p-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-bold">Dashboard Admin</h1>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{contacts.length} contatti</Badge>
          <Button variant="ghost" size="sm" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        <Tabs defaultValue="contatti" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="contatti" className="text-xs sm:text-sm">
              <ClipboardList className="h-4 w-4 mr-1 hidden sm:inline" />
              Contatti
            </TabsTrigger>
            <TabsTrigger value="pr" className="text-xs sm:text-sm">
              <Users className="h-4 w-4 mr-1 hidden sm:inline" />
              PR
            </TabsTrigger>
            <TabsTrigger value="estrazione" className="text-xs sm:text-sm">
              <Trophy className="h-4 w-4 mr-1 hidden sm:inline" />
              Estrazione
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-xs sm:text-sm">
              <BarChart3 className="h-4 w-4 mr-1 hidden sm:inline" />
              Stats
            </TabsTrigger>
          </TabsList>

          {/* CONTATTI */}
          <TabsContent value="contatti">
            {winner && (
              <Card className="mb-4 border-yellow-400 bg-yellow-50">
                <CardContent className="p-4 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-yellow-600 shrink-0" />
                  <div>
                    <p className="font-bold text-yellow-900">
                      🎉 Vincitore: {winner.nome} {winner.cognome}
                    </p>
                    <p className="text-sm text-yellow-700">
                      Numero {winner.numero_scelto} • Tel: {winner.telefono} •
                      PR: {getPrName(winner.pr_user_id)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Telefono</TableHead>
                        <TableHead>N°</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Note
                        </TableHead>
                        <TableHead>PR</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Data
                        </TableHead>
                         <TableHead>Stato</TableHead>
                         <TableHead>Azioni</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((c) => (
                        <TableRow
                          key={c.id}
                          className={
                            winner?.id === c.id ? "bg-yellow-50" : ""
                          }
                        >
                          <TableCell className="font-medium whitespace-nowrap">
                            {c.nome} {c.cognome}
                          </TableCell>
                          <TableCell className="whitespace-nowrap">
                            {c.telefono}
                          </TableCell>
                           <TableCell>
                             <span className="font-bold text-primary">
                               {c.numero_scelto ?? "—"}
                             </span>
                           </TableCell>
                          <TableCell className="text-xs max-w-[120px] truncate hidden md:table-cell">
                            {c.note || "-"}
                          </TableCell>
                          <TableCell className="text-xs whitespace-nowrap">
                            {getPrName(c.pr_user_id)}
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground whitespace-nowrap hidden sm:table-cell">
                            {new Date(c.created_at).toLocaleDateString("it-IT")}
                          </TableCell>
                          <TableCell>
                            <Select
                              value={c.stato}
                              onValueChange={(v) =>
                                updateContactStatus(
                                  c.id,
                                  v as ContactStatus
                                )
                              }
                            >
                              <SelectTrigger className="h-7 text-xs w-[130px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(statusLabels).map(
                                  ([key, label]) => (
                                    <SelectItem
                                      key={key}
                                      value={key}
                                      className="text-xs"
                                    >
                                      {label}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {c.numero_scelto && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  title="Libera numero"
                                  onClick={() => freeNumber(c.id, c.numero_scelto)}
                                >
                                  <Unlock className="h-4 w-4 text-orange-500" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                title="Elimina contatto"
                                onClick={() => deleteContact(c.id, `${c.nome} ${c.cognome}`)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {contacts.length === 0 && (
                        <TableRow>
                          <TableCell
                            colSpan={9}
                            className="text-center text-muted-foreground py-8"
                          >
                            Nessun contatto inserito
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PR */}
          <TabsContent value="pr" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Crea nuovo PR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label>Username *</Label>
                    <Input
                      value={newPrUsername}
                      onChange={(e) => setNewPrUsername(e.target.value)}
                      placeholder="username"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Password *</Label>
                    <Input
                      value={newPrPassword}
                      onChange={(e) => setNewPrPassword(e.target.value)}
                      placeholder="password"
                      type="password"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Nome visualizzato</Label>
                    <Input
                      value={newPrDisplayName}
                      onChange={(e) => setNewPrDisplayName(e.target.value)}
                      placeholder="opzionale"
                    />
                  </div>
                </div>
                <Button
                  onClick={createPR}
                  disabled={creatingPr || !newPrUsername || !newPrPassword}
                >
                  {creatingPr ? "Creazione..." : "Crea PR"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">PR attivi</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Contatti</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Data creazione
                      </TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prStats.map((pr) => (
                      <TableRow key={pr.id}>
                        <TableCell className="font-medium">
                          {pr.username}
                        </TableCell>
                        <TableCell>{pr.display_name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{pr.contactCount}</Badge>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                          {new Date(pr.created_at).toLocaleDateString("it-IT")}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deletePR(pr.user_id, pr.username)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {prStats.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center text-muted-foreground py-8"
                        >
                          Nessun PR creato
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ESTRAZIONE */}
          <TabsContent value="estrazione" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gestione Estrazione</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label>Data estrazione</Label>
                    <Input
                      type="date"
                      value={extractionDate}
                      onChange={(e) => setExtractionDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Numero vincente (Ruota di Bari)</Label>
                    <Input
                      type="number"
                      min={1}
                      max={90}
                      value={winningNumber}
                      onChange={(e) => setWinningNumber(e.target.value)}
                      placeholder="1-90"
                    />
                  </div>
                </div>
                <Button onClick={saveExtraction} disabled={!extractionDate}>
                  Salva Estrazione
                </Button>

                {winner && (
                  <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-300">
                    <p className="font-bold text-yellow-900 text-lg">
                      🏆 Vincitore trovato!
                    </p>
                    <p className="text-yellow-800">
                      {winner.nome} {winner.cognome} – Numero{" "}
                      {winner.numero_scelto}
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Telefono: {winner.telefono} • PR:{" "}
                      {getPrName(winner.pr_user_id)}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Griglia Numeri</CardTitle>
              </CardHeader>
              <CardContent>
                <NumberGrid
                  takenNumbers={takenNumbers}
                  selectedNumber={null}
                  winningNumber={extraction?.numero_vincente}
                  disabled
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* STATS */}
          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance PR</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PR</TableHead>
                      <TableHead>Contatti inseriti</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prStats
                      .sort((a, b) => b.contactCount - a.contactCount)
                      .map((pr) => (
                        <TableRow key={pr.id}>
                          <TableCell className="font-medium">
                            {pr.display_name || pr.username}
                          </TableCell>
                          <TableCell>
                            <Badge>{pr.contactCount}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    {prStats.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          className="text-center text-muted-foreground py-8"
                        >
                          Nessun PR
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
