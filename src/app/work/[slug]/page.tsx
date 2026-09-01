import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";
import { ProjectLinks } from "@/components/work/project-links";
import { SystemArchitecture } from "@/components/work/system-architecture";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | Daniel Ubani`,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [{ url: project.coverImage, alt: project.coverAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main-content" className="case-page">
      <header className={`case-hero case-hero--${project.accent}`}>
        <div className="page-shell">
          <Link className="case-back mono" href="/work"><ArrowLeft aria-hidden="true" /> Back to work</Link>
          <div className="case-hero__meta mono">
            <span>{project.index} / {project.status ? "Personal project" : "Selected system"}</span>
            <span>{project.industry}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="case-hero__descriptor">{project.descriptor}</p>
          <div className="case-hero__summary">
            <p>{project.summary}</p>
            <div>
              <span className="mono">Role</span>
              <strong>{project.role}</strong>
            </div>
          </div>
          <ProjectLinks links={project.links} />
        </div>
      </header>

      <section className={`case-visual case-visual--${project.accent}`} aria-label={`${project.title} product preview`}>
        <div className="page-shell">
          <figure>
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 92vw"
            />
            <figcaption className="mono">
              <span>{project.index} / Product interface</span>
              <span>{project.industry}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-story section page-shell" aria-labelledby="challenge-title">
        <div>
          <p className="eyebrow">The challenge</p>
          <h2 id="challenge-title">Complexity has to become operational clarity.</h2>
        </div>
        <p>{project.challenge}</p>
      </section>

      <section className="case-system section">
        <div className="page-shell">
          <header className="case-system__heading">
            <p className="eyebrow">Architecture</p>
            <h2>One system.<br />Multiple surfaces.</h2>
            <p>{project.solution}</p>
          </header>
          <SystemArchitecture nodes={project.architecture} accent={project.accent} />
        </div>
      </section>

      <section className="case-features section page-shell" aria-labelledby="capabilities-title">
        <p className="eyebrow">Core capabilities</p>
        <h2 id="capabilities-title">Built around the work.</h2>
        <div className="case-features__grid">
          {project.features.map((feature, index) => (
            <div key={feature}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <strong>{feature}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="case-stack section-rule">
        <div className="page-shell">
          <p className="eyebrow">Technology</p>
          <div>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
      </section>

      <Link className="next-system" href={`/work/${nextProject.slug}`}>
        <span className="mono">Next system</span>
        <strong>{nextProject.title}</strong>
        <ArrowRight aria-hidden="true" />
      </Link>
      <ContactSection />
    </main>
  );
}
