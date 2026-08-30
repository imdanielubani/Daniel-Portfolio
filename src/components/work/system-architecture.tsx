type SystemArchitectureProps = {
  nodes: string[];
  accent: "orange" | "lime" | "white";
};

export function SystemArchitecture({ nodes, accent }: SystemArchitectureProps) {
  return (
    <div className={`case-architecture case-architecture--${accent}`} aria-label="System architecture overview">
      <div className="case-architecture__core">
        <span className="mono">System core</span>
        <strong>{nodes[0]}</strong>
      </div>
      <div className="case-architecture__nodes">
        {nodes.slice(1).map((node, index) => (
          <div key={node} style={{ "--position": index } as React.CSSProperties}>
            <i aria-hidden="true" />
            <span className="mono">Layer {String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
