import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Badge } from "../ui/badge";

const PROJECTS = [
  {
    title: "Café e Pauta",
    description:
      "Blog/site com categorias, navegação por âncoras e layout responsivo.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Dashboard de Chamados",
    description:
      "Kanban com filtros e modais padronizados, foco em UX e organização.",
    tags: ["React", "shadcn/ui", "TanStack Query"],
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
