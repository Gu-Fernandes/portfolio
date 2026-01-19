import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "../data/about";

export function AboutSkills() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base">Skills</CardTitle>
        <p className="text-sm text-muted-foreground">Tecnologias</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {SKILLS.map((group) => (
          <div key={group.title} className="space-y-2">
            <p className="text-sm font-medium">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
