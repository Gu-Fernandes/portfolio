"use client";

import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Salas de Reunião",
    description:
      "App de um ecosistema empresarial, utilizado para acompanhar disponibilidade e reservas das salas de reuniões das empresas do grupo.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
] as const;

export function ProjectsSection() {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());

    const onSelect = () => setSelected(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">Projetos</h2>

      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {PROJECTS.map((p) => (
            <CarouselItem key={p.title} className="basis-full md:basis-1/2">
              <Card className="h-full transition hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex h-full flex-col gap-4">
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-auto bg-card self-end inline-flex items-center gap-2"
                  >
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-3"
                    >
                      Ver projeto
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />

        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para o slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition",
                index === selected ? "bg-foreground" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
