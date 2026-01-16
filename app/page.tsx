import { Container } from "@/components/layout/container";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <main>
        <Container>
          <div className="space-y-12 py-10">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </Container>
      </main>
    </div>
  );
}
