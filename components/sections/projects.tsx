import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "infoCrypto",
    description:
      "Trabalho de conclusão de curso. Aplicação web educacional sobre criptomoedas.",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "TypeScript"],
  },
  {
    title: "Prospecção de Clientes",
    description:
      "Sistema para auxiliar na prospecção de clientes B2B, gerenciar leads e cadastrar produtos.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Jogo do Impostor",
    description:
      "Jogo offline desenvolvido em Next.js onde jogadores recebem uma palavra e tentam adivinhar as pessoas infiltradas.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Central de Ajuda",
    description:
      "App de um ecosistema empresarial, para criação e acompanhamentos dos chamados criados.",
    tags: ["Next.js", "TypeScript", "Shadcn UI"],
  },
] as const;

export function ProjectsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">Projetos</h2>
      <Separator />

      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="transition hover:shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col gap-4">
              <p className="text-sm text-muted-foreground">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button variant="outline" className="mt-auto self-end">
                Ver projeto
                <ArrowRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
