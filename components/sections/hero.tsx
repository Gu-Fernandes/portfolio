import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="space-y-5">
        <h1 className="text-xl font-semibold tracking-tight sm:text-3xl">
          Gustavo Fernandes - Desenvolvedor Front-end
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          Desenvolvedor Front-end, com experiência em desenvolvimento de
          interfaces dinâmicas e responsivas utilizando HTML, CSS, JavaScript e
          frameworks modernos.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href="#projects">Ver projetos</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
