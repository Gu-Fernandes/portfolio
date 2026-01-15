import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <Container>
          <div className="space-y-24 py-16">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
