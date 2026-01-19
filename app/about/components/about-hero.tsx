import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ABOUT } from "../data/about";

export function AboutHero() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{ABOUT.role}</Badge>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {ABOUT.name}
            </h1>

            <p className="text-sm text-muted-foreground sm:text-base">
              {ABOUT.headline}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Button>
                <Link href="/projects">Ver projetos</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/contact">Falar comigo</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
