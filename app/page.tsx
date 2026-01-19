import { Container } from "@/components/layout/container";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ProfilePhoto } from "@/components/sections/profile-photo";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <main>
        <Container>
          <div className="space-y-12 py-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
              <div className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:mx-0 lg:w-[320px] lg:max-w-none">
                <ProfilePhoto />
              </div>
              <div className="order-2 space-y-12 lg:order-1">
                <HeroSection />
                <AboutSection />
              </div>
            </div>

            <ProjectsSection />
            <ContactSection />
          </div>
        </Container>
      </main>
    </div>
  );
}
