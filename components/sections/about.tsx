import { Button } from "../ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">Sobre mim</h2>

      <p className="max-w-3xl text-muted-foreground">
        Ajudo a transformar ideias em experiências, criando interfaces
        intuitivas e responsivas. Com atenção aos detalhes, buscando sempre
        entregar soluções superem as expectativas dos usuários.
        <Button variant="link" className="px-2 sm:p-2">
          <Link href="/about">Ver mais</Link>
        </Button>
      </p>
    </div>
  );
}
