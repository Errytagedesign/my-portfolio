"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import FeaturedProject from "./FeaturedProject";
import type { Project } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * Master-timeline beats, in arbitrary timeline units. Each slide gets one
 * STEP: its heading and description finish typing (TEXT) before the next
 * slide travels in (SLIDE) — so text is never cut off mid-reveal.
 */
const STEP = 1.4;
const TEXT = 0.8;
const SLIDE = 0.6;

/** Viewport-heights of scroll allotted to each slide. */
const SCROLL_PER_SLIDE = 200;

/**
 * Pins the featured rows and slides them in one at a time. The row layout
 * itself is unchanged — this only controls how each row arrives and how its
 * copy types out.
 *
 * Below `md`, or under reduced motion, none of this runs: the rows fall back
 * to the plain stacked list via the `max-md:` / `motion-reduce:` classes.
 */
export default function FeaturedShowcase({
  projects,
}: {
  projects: Project[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const sections = gsap.utils.toArray<HTMLElement>(container.children);
      if (sections.length === 0) return;

      const splits: SplitText[] = [];
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          // Park every slide off to the right; the first starts on screen.
          sections.forEach((section, i) => {
            if (i > 0) gsap.set(section, { left: "100%" });
          });

          // One paused timeline per slide, scrubbed by the master below.
          const textTimelines = sections.map((section) => {
            const heading = section.querySelector<HTMLElement>("[data-heading]");
            const body = section.querySelector<HTMLElement>("[data-body]");
            const tl = gsap.timeline({ paused: true });

            if (heading) {
              const split = new SplitText(heading, { type: "chars" });
              splits.push(split);
              gsap.set(split.chars, { opacity: 0.08, y: 50 });
              tl.to(split.chars, {
                opacity: 1,
                y: 0,
                stagger: 0.02,
                ease: "power2.out",
              });
            }

            if (body) {
              const split = new SplitText(body, { type: "chars, lines" });
              splits.push(split);
              gsap.set(split.chars, { opacity: 0 });
              // No y-offset here — a plain per-character fade reads as typing.
              tl.to(
                split.chars,
                { opacity: 1, stagger: 0.01, ease: "none" },
                heading ? ">-0.1" : 0,
              );
            }

            return tl;
          });

          const master = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: `+=${sections.length * SCROLL_PER_SLIDE}%`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          sections.forEach((section, i) => {
            const beat = i * STEP;

            // Slide arrives first, then its copy types out.
            if (i > 0) {
              master.to(
                section,
                { left: "0%", duration: SLIDE, ease: "power2.inOut" },
                beat - TEXT,
              );
            }

            master.to(
              textTimelines[i],
              { progress: 1, duration: TEXT, ease: "none" },
              beat,
            );
          });
        },
      );

      return () => {
        splits.forEach((split) => split.revert());
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [projects.length] },
  );

  return (
    <div
      ref={containerRef}
      className="relative mt-16 h-screen overflow-hidden max-md:h-auto max-md:overflow-visible motion-reduce:h-auto motion-reduce:overflow-visible"
    >
      {projects.map((project, index) => (
        <article
          key={index}
          style={{ zIndex: index + 1 }}
          className="absolute top-0 left-0 flex h-screen w-full items-center bg-main max-md:relative max-md:mb-24 max-md:h-auto max-md:bg-transparent motion-reduce:relative motion-reduce:mb-24 motion-reduce:h-auto motion-reduce:bg-transparent"
        >
          <div className="w-full">
            <FeaturedProject
              name={project.name}
              image={project.imgUrl}
              desc={project.desc}
              stacks={project.stacks}
              link={project.link}
              github={project.github}
              cover={project.cover}
              flip={index % 2 === 1}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
