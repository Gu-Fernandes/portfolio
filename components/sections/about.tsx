import { Separator } from "@radix-ui/react-dropdown-menu";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sobre mim</h2>
        <Separator />

        <p className="max-w-3xl text-muted-foreground">
          Transformo ideias em produtos com boa experiência de uso. Gosto de
          manter código limpo, componentizado e bem padronizado. Tenho foco em
          front-end e em construir interfaces consistentes.
        </p>
      </div>
    </section>
  );
}
