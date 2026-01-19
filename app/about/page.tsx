import { AboutSkills } from "./components/about-skills";
import { AboutSections } from "./components/about-sections";
import { AboutHero } from "./components/about-hero";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      <div className="space-y-10">
        <AboutHero />

        <AboutSections />

        <div className="grid gap-6 lg:grid-cols-2">
          <AboutSkills />
        </div>
      </div>
    </main>
  );
}
