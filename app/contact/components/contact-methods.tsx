import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT } from "../data/contact";

function MethodRow({
  icon: Icon,
  title,
  description,
  href,
  cta,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border p-4">
      <div className="flex gap-3">
        <div className="mt-0.5 rounded-md border bg-muted p-2">
          <Icon className="h-4 w-4" />
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <Button asChild variant="outline" size="sm">
        <Link href={href} target="_blank" rel="noreferrer">
          {cta}
        </Link>
      </Button>
    </div>
  );
}

export function ContactMethods() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">Canais</CardTitle>
        <p className="text-sm text-muted-foreground">
          Escolha o mais prático pra você.
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <MethodRow
          icon={Mail}
          title="Email"
          description={CONTACT.email}
          href={`mailto:${CONTACT.email}`}
          cta="Enviar"
        />

        <MethodRow
          icon={Linkedin}
          title="LinkedIn"
          description="Me chama por lá também."
          href={CONTACT.linkedin}
          cta="Abrir"
        />

        <MethodRow
          icon={Github}
          title="GitHub"
          description="Veja meus projetos."
          href={CONTACT.github}
          cta="Abrir"
        />

        {!!CONTACT.whatsapp && (
          <MethodRow
            icon={MessageCircle}
            title="WhatsApp"
            description="Respondo o quanto antes."
            href={CONTACT.whatsapp}
            cta="Chamar"
          />
        )}
      </CardContent>
    </Card>
  );
}
