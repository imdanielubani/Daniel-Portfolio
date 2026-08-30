import { AboutSection } from "@/components/sections/about-section";
import { ArchitecturePlayground } from "@/components/sections/architecture-playground";
import { ContactSection } from "@/components/sections/contact-section";
import { EngineeringStatement } from "@/components/sections/engineering-statement";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { SelectedSystems } from "@/components/sections/selected-systems";
import { TechnologyEcosystem } from "@/components/sections/technology-ecosystem";
import { contactDetails } from "@/data/contact";
import { siteOrigin } from "@/lib/site-url";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Ubani",
    jobTitle: "Full Stack Software Engineer",
    address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
    email: "mailto:imdanielubani@gmail.com",
    url: siteOrigin,
    sameAs: [contactDetails.linkedin.href, contactDetails.instagram.href],
    knowsAbout: ["System architecture", "Web engineering", "Mobile engineering", "AI integrations", "Real-time systems"],
  };

  return (
    <main id="main-content" className="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <EngineeringStatement />
      <Metrics />
      <SelectedSystems />
      <ExperienceSection />
      <TechnologyEcosystem />
      <ArchitecturePlayground />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
