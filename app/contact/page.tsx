import type { Metadata } from "next";
import { ContactHero } from "./components/contact-hero";
import { ContactMethods } from "./components/contact-methods";
import { ContactForm } from "./components/contact-form";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      <div className="space-y-10">
        <ContactHero />

        <div className="grid gap-6 lg:grid-cols-2">
          <ContactMethods />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
