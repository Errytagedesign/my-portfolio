import { FiFolder } from "react-icons/fi";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import type { Project } from "@/types";

type ProjectCardProps = Pick<
  Project,
  "name" | "desc" | "stacks" | "link" | "github"
>;

/**
 * Compact "other noteworthy project" card — folder icon, links, title,
 * blurb, and a tech list pinned to the bottom so cards stay aligned.
 */
function ProjectCard({ name, link, stacks, desc, github }: ProjectCardProps) {
  return (
    <li className="group flex h-full flex-col rounded bg-sec p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
      <div className="mb-8 flex flex-row items-center justify-between">
        <FiFolder className="text-pry" size={40} strokeWidth={1} />

        <div className="flex flex-row items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} source on GitHub`}
              className="text-light transition-colors hover:text-pry"
            >
              <BsGithub size={20} />
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${name}`}
              className="text-light transition-colors hover:text-pry"
            >
              <BsBoxArrowUpRight size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-3 text-xl font-semibold text-light transition-colors group-hover:text-pry">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
        ) : (
          name
        )}
      </h3>

      <p className="text-sm text-light">{desc}</p>

      <ul className="mt-auto flex list-none flex-wrap gap-x-4 gap-y-1 p-0 pt-8 text-xs text-light/70">
        {stacks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default ProjectCard;
