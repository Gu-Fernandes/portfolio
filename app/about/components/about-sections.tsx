import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ABOUT } from "../data/about";

export function AboutSections() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-base">Sobre mim</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {ABOUT.bio.map((p) => (
            <p
              key={p}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-base">Destaques</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {ABOUT.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-md border border-purple-600 p-3"
            >
              <p className="text-xs text-muted-foreground">{h.label}</p>
              <p className="text-sm font-medium">{h.value}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
