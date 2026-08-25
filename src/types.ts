/** An image in `public/images`, with its intrinsic size. */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

/** A single entry in the Work section. */
export type Project = {
  name: string;
  desc: string;
  /** Screenshot — only the featured showcase renders one. */
  imgUrl?: ImageAsset;
  stacks: string[];
  /** Promotes the project into the large alternating showcase. */
  featured?: boolean;
  /** Marks a designed brand cover rather than a product screenshot. */
  cover?: boolean;
  /** Company the product was built for or with, credited on the card. */
  coy?: string;
  /** Public URL, when the project has one. */
  link?: string;
  github?: string;
};

/** A featured project is guaranteed to carry a screenshot. */
export type FeaturedProjectData = Project & { imgUrl: ImageAsset };
