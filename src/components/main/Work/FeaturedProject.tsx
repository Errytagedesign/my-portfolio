import Image from "next/image";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import type { ImageAsset, Project } from "@/types";

type FeaturedProjectProps = Omit<Project, "imgUrl" | "featured"> & {
  image: ImageAsset;
  /** Mirrors the layout so alternating rows face opposite directions. */
  flip: boolean;
};

/**
 * Large showcase row. Odd rows put the image on the right with the content
 * card overlapping from the left; even rows (`flip`) mirror that.
 * Below `md` the two stack into the same cell — content on top of a dimmed
 * image.
 *
 * `data-heading` / `data-body` are the hooks FeaturedShowcase splits and
 * types out on scroll.
 */
function FeaturedProject({
  name,
  link,
  image,
  stacks,
  desc,
  github,
  flip,
  cover,
  coy,
}: FeaturedProjectProps) {
  // Some projects are client work with no public URL yet — render them as
  // plain, non-interactive cards rather than dead links.
  const ImageWrap = link ? "a" : "div";
  const imageWrapProps = link
    ? ({
        href: link,
        target: "_blank",
        rel: "noreferrer",
        tabIndex: -1,
        "aria-hidden": true,
      } as const)
    : {};

  return (
    <div className="relative grid grid-cols-12 md:items-center">
      {/* Screenshot */}
      <ImageWrap
        {...imageWrapProps}
        className={`group relative col-start-1 col-end-13 row-start-2 mt-6 overflow-hidden rounded md:row-start-1 md:mt-0 ${
          flip ? "md:col-start-1 md:col-end-8" : "md:col-start-6 md:col-end-13"
        }`}
      >
        {!cover && (
          <span className="absolute inset-0 z-10 bg-pry/25 mix-blend-multiply transition-colors duration-300 group-hover:bg-transparent" />
        )}
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={`${name} screenshot`}
          sizes="(min-width: 768px) 60vw, 100vw"
          className={`h-auto w-full object-cover object-top transition-all duration-300 max-md:max-h-[30vh] ${
            cover ? "" : "grayscale group-hover:grayscale-0"
          }`}
        />
      </ImageWrap>

      {/* Overlapping content card */}
      <div
        className={`relative z-20 col-start-1 col-end-13 row-start-1 ${
          flip
            ? "md:col-start-7 md:col-end-13 md:text-right"
            : "md:col-start-1 md:col-end-7"
        }`}
      >
        <p className="mb-2 text-sm text-pry">
          Featured Project
          {coy && (
            <>
              <span className="text-light/40"> · </span>
              <span className="text-light/70">for </span>
              <span className="font-medium text-accent">@{coy}</span>
            </>
          )}
        </p>

        <h3
          data-heading
          className="mb-5 text-2xl font-semibold text-light md:text-3xl"
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-pry"
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h3>

        <div className="mb-6 rounded bg-sec p-4 text-light shadow-card md:p-6">
          <p data-body className="text-sm text-light md:text-base">
            {desc}
          </p>
        </div>

        <ul
          className={`mb-6 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-xs text-light/70 ${
            flip ? "md:justify-end" : ""
          }`}
        >
          {stacks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {(github || link) && (
          <div
            className={`flex flex-row items-center gap-5 ${
              flip ? "md:justify-end" : ""
            }`}
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} source on GitHub`}
                className="text-light transition-colors hover:text-pry"
              >
                <BsGithub size={22} />
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
                <BsBoxArrowUpRight size={22} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedProject;
