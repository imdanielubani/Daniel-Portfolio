const disciplines = ["Web", "Mobile", "Backend", "AI", "Real-time"];

export function Metrics() {
  return (
    <section className="metrics section-rule" aria-label="Engineering metrics">
      <div className="page-shell metrics__grid">
        <div className="metric">
          <strong>05+</strong>
          <span className="mono">Years building</span>
        </div>
        <div className="metric">
          <strong>10+</strong>
          <span className="mono">Enterprise systems</span>
        </div>
        <div className="metric metric--disciplines">
          <div>
            {disciplines.map((item) => <strong key={item}>{item}</strong>)}
          </div>
          <span className="mono">Across the product stack</span>
        </div>
      </div>
    </section>
  );
}
