import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TIMELINE } from "../data/about";

export function AboutTimeline() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">Linha do tempo</CardTitle>
        <p className="text-sm text-muted-foreground">
          Um overview do que venho construindo
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {TIMELINE.map((t, idx) => (
          <div key={t.title} className="relative pl-5">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
            <p className="text-sm font-medium">
              {idx + 1}. {t.title}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
