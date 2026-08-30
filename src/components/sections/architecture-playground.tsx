"use client";

import { useState } from "react";

const nodes = [
  { id: "web", label: "Web", type: "Client", detail: "Responsive browser interfaces and operational dashboards." },
  { id: "mobile", label: "Mobile", type: "Client", detail: "Flutter and React Native experiences built around real user workflows." },
  { id: "api", label: "API", type: "Service", detail: "Domain boundaries, validation, authentication, and provider orchestration." },
  { id: "postgres", label: "PostgreSQL", type: "Database", detail: "Relational models, transactions, constraints, and durable state." },
  { id: "redis", label: "Redis", type: "Cache", detail: "Fast access, queues, session data, and transient coordination." },
  { id: "events", label: "WebSockets / Events", type: "Real-time", detail: "Live state propagation across clients, teams, and devices." },
];

export function ArchitecturePlayground() {
  const [active, setActive] = useState("api");
  const selected = nodes.find((node) => node.id === active) ?? nodes[2];

  return (
    <section className="architecture section" aria-labelledby="architecture-title">
      <div className="page-shell">
        <header className="chapter-heading architecture__heading">
          <p className="eyebrow">System design in practice</p>
          <h2 id="architecture-title">How I<br /><span>think.</span></h2>
        </header>

        <div className="architecture__stage">
          <svg className="architecture__lines" viewBox="0 0 1000 630" preserveAspectRatio="none" aria-hidden="true">
            <path d="M180 110 C180 200 430 170 500 260" />
            <path d="M820 110 C820 200 570 170 500 260" />
            <path d="M500 300 C500 370 260 340 260 440" />
            <path d="M500 300 C500 370 740 340 740 440" />
            <path d="M260 480 C260 550 500 510 500 590" />
            <path d="M740 480 C740 550 500 510 500 590" />
          </svg>
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`architecture-node architecture-node--${node.id} ${active === node.id ? "is-active" : ""}`}
              onClick={() => setActive(node.id)}
              aria-pressed={active === node.id}
            >
              <span className="mono">{node.type}</span>
              <strong>{node.label}</strong>
            </button>
          ))}
          <div className="architecture__pulse" aria-hidden="true" />
        </div>

        <div className="architecture__readout">
          <span className="mono">Active layer / {selected.type}</span>
          <p>{selected.detail}</p>
        </div>
      </div>
    </section>
  );
}
