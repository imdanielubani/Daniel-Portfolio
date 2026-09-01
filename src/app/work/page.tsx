import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected production systems built by Daniel Ubani across hospitality, civic technology, fintech, commerce, and property technology.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content" className="work-page">
      <header className="work-page__hero">
        <div className="page-shell work-page__hero-inner">
          <div className="work-page__meta mono">
            <span>Selected production systems</span>
            <span>{String(projects.length).padStart(2, "0")} case studies</span>
          </div>
          <h1>Work<span>.</span></h1>
          <p>Products, operational platforms, and infrastructure built from architecture through production.</p>
        </div>
      </header>

      <section className="work-archive" aria-labelledby="work-archive-title">
        <div className="page-shell">
          <h2 className="sr-only" id="work-archive-title">Project archive</h2>
          {projects.map((project) => (
            <article className="work-archive__item" key={project.slug}>
              <div className="work-archive__index mono">
                <span>{project.index}</span>
                <span>{project.year}</span>
              </div>

              <Link className="work-archive__media" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                <Image
                  src={project.coverImage}
                  alt={project.coverAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
              </Link>

              <div className="work-archive__content">
                <div className="work-archive__industry mono">
                  <span>{project.industry}</span>
                  <span>{project.status ?? "Production system"}</span>
                </div>
                <div>
                  <p>{project.descriptor}</p>
                  <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
                  <p>{project.summary}</p>
                </div>
                <Link className="work-archive__open mono" href={`/work/${project.slug}`}>
                  View case study <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
