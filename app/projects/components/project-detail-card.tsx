import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ProjectImageCarousel } from "./project-image-carousel";
import { PortfolioProject } from "../types/project";

type Props = {
  project: PortfolioProject;
};

export function ProjectDetailCard({ project }: Props) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {project.shortDescription}
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        <ProjectImageCarousel images={project.images} title={project.title} />

        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {!!project.highlights?.length && (
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {!!project.links?.length && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.links.map((l) => {
                const isRepo = l.type === "repo";
                const label = isRepo ? "Repositório" : "Visitar site";

                return (
                  <Button
                    key={l.href}
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <Link href={l.href} target="_blank" rel="noreferrer">
                      {isRepo ? (
                        <Github className="h-4 w-4" />
                      ) : (
                        <ExternalLink className="h-4 w-4" />
                      )}
                      {label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
