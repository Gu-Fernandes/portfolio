import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "../ui/badge";

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
      "Sistema para auxiliar na prospecção de clientes B2B e gerenciar leads.",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Jogo do Impostor",
    description:
      "Jogo offline desenvolvido em Next.js onde jogadores recebem uma palavra e tentam adivinhar quem é o impostor.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Projetos</h2>
        <Separator />

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="transition hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
