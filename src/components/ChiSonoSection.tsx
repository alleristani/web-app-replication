const ChiSonoSection = () => (
  <section className="section-padding bg-background" id="chi-sono">
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block bg-primary/8 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
        Chi sono
      </span>
      <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
        Piacere, Alessio
      </h2>
      <div className="w-12 h-[2px] bg-accent mx-auto mb-8" />
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
        Mi chiamo <strong className="text-foreground">Alessio Ristani</strong> e sono consulente <strong className="text-foreground">Nims</strong>, azienda del Gruppo Lavazza specializzata in sistemi per caffè in capsule e acqua microfiltrata. Ho scelto Nims Lavazza perché è un brand affermato, sinonimo di qualità e tradizione dal 1895.
      </p>
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
        Il mio obiettivo è guidarti nella scelta della soluzione più adatta alle tue esigenze — con un supporto dedicato prima, durante e dopo l'installazione.
      </p>
    </div>
  </section>
);

export default ChiSonoSection;
