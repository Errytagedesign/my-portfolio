/** An image in `public/assets-images`, with its intrinsic size. */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
};

/** A single entry in the Work section. */
export type Project = {
  name: string;
  desc: string;
  imgUrl: ImageAsset;
  stacks: string[];
  /** Promotes the project into the large alternating showcase. */
  featured?: boolean;
  /** Marks a designed brand cover rather than a product screenshot. */
  cover?: boolean;
  /** Public URL, when the project has one. */
  link?: string;
  github?: string;
};
