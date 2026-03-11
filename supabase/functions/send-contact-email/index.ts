import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { nome, cognome, telefono, indirizzo, paese, provincia, note } =
      await req.json();

    // Validate required fields
    if (!nome || !cognome || !telefono || !indirizzo || !paese || !provincia) {
      return new Response(
        JSON.stringify({ error: "Tutti i campi obbligatori devono essere compilati" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize inputs (max lengths)
    const sanitize = (s: string, max = 200) => String(s).slice(0, max).trim();
    const data = {
      nome: sanitize(nome, 100),
      cognome: sanitize(cognome, 100),
      telefono: sanitize(telefono, 30),
      indirizzo: sanitize(indirizzo, 200),
      paese: sanitize(paese, 100),
      provincia: sanitize(provincia, 10),
      note: sanitize(note || "", 1000),
    };

    const emailHtml = `
      <h2>Nuova richiesta dal sito</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Nome</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.nome} ${data.cognome}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefono</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.telefono}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Indirizzo</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.indirizzo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Città</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.paese} (${data.provincia})</td></tr>
        ${data.note ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Note</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.note}</td></tr>` : ""}
      </table>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sito Nims <onboarding@resend.dev>",
        to: ["alessioristani@gmail.com"],
        subject: `Nuova richiesta da ${data.nome} ${data.cognome}`,
        html: emailHtml,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", resendData);
      throw new Error(`Resend API error [${resendRes.status}]: ${JSON.stringify(resendData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
