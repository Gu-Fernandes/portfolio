"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "../data/contact";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = form.subject?.trim() || "Contato pelo portfólio";
    const bodyLines = [
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ];
    const body = bodyLines.join("\n");

    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">Me mande um e-mail</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu email</Label>
            <Input
              id="email"
              placeholder="Seu e-mail"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input
            id="subject"
            placeholder="Qual o assunto?"
            value={form.subject}
            onChange={(e) =>
              setForm((p) => ({ ...p, subject: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            placeholder="Escreva aqui sua mensagem..."
            className="min-h-[140px]"
            value={form.message}
            onChange={(e) =>
              setForm((p) => ({ ...p, message: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button asChild disabled={!isValid}>
            <a href={mailtoHref}>Enviar</a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          *O botão “Enviar” abre seu app de email com a mensagem pronta.
        </p>
      </CardContent>
    </Card>
  );
}
