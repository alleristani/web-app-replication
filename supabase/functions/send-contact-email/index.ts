import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, cognome, telefono, indirizzo, note } = await req.json();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const emailHtml = `
      <h2>Nuovo contatto dal sito</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Nome</td><td style="padding:8px;">${nome} ${cognome}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Telefono</td><td style="padding:8px;">${telefono}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Indirizzo</td><td style="padding:8px;">${indirizzo}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Note</td><td style="padding:8px;">${note || 'Nessuna nota'}</td></tr>
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Sito Web <onboarding@resend.dev>',
        to: ['alessioristani@gmail.com'],
        subject: `Nuovo contatto: ${nome} ${cognome}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
