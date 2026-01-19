import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Contato</h2>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Vamos conversar?</p>
              <p className="text-sm text-muted-foreground">
                Acesse a seção de contato e me envie uma mensagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <Link href="/contact">Ir para contato</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/#projects">Ver projetos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
