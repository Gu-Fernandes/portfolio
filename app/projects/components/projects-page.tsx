import { Container } from "@/components/layout/container";
import { PROJECTS } from "@/data/projects";
import { ProjectDetailCard } from "./project-detail-card";

export function ProjectsPage() {
  return (
    <main className="py-10">
      <Container className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Projetos</h1>
          <p className="text-sm text-muted-foreground">
            Aqui estão todos os projetos com mais detalhes, imagens e
            tecnologias.
          </p>
        </header>

        <section className="space-y-6">
          {PROJECTS.map((project) => (
            <ProjectDetailCard key={project.slug} project={project} />
          ))}
        </section>
      </Container>
    </main>
  );
}
