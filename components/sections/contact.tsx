import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Contato</h2>
        <Separator />

        <form className="grid gap-4 max-w-xl">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Escreva sua mensagem..."
              className="min-h-32"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Enviar</Button>
            <Button type="button" variant="outline" asChild>
              <a href="mailto:seuemail@exemplo.com">Enviar por e-mail</a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
