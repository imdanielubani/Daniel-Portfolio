import { ExternalLink, Store } from "lucide-react";
import type { Project } from "@/types/content";

type ProjectLinksProps = {
  links: Project["links"];
};

const destinations = [
  { key: "live", label: "Live view", Icon: ExternalLink },
  { key: "playStore", label: "Play Store", Icon: Store },
] as const;

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="case-project-links" aria-label="Project destinations">
      {destinations.map(({ key, label, Icon }) => {
        const href = links[key];

        if (!href) {
          return (
            <span className="case-project-link is-disabled" aria-disabled="true" key={key}>
              <Icon aria-hidden="true" />
              <span>{label}<small>Link pending</small></span>
            </span>
          );
        }

        return (
          <a className="case-project-link" href={href} target="_blank" rel="noreferrer" key={key}>
            <Icon aria-hidden="true" />
            <span>{label}<small>Open project</small></span>
          </a>
        );
      })}
    </div>
  );
}
