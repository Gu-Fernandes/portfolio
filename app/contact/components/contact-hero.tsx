import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "../data/contact";

export function ContactHero() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {CONTACT.title}
          </h1>

          <p className="text-sm text-muted-foreground sm:text-base">
            {CONTACT.subtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
