"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";
import { OtherWork } from "./workData";

const INITIAL_COUNT = 6;

function OtherProjects() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? OtherWork : OtherWork.slice(0, INITIAL_COUNT);
  const hasMore = OtherWork.length > INITIAL_COUNT;

  return (
    <section className="mt-32">
      <h3 className="text-center text-2xl font-semibold text-light md:text-3xl">
        Other Noteworthy Projects
      </h3>

      <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <ProjectCard
            key={item.id}
            name={item.name}
            desc={item.desc}
            stacks={item.stacks}
            link={item.link}
            github={item.github}
          />
        ))}
      </ul>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="cursor-pointer rounded-[5px] border-2 border-pry bg-transparent px-6 py-3 text-pry transition-all duration-300 hover:bg-hover hover:shadow-glow"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default OtherProjects;
