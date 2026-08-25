import type { ImageAsset } from "@/types";

/**
 * Everything under `public/assets-images`. Files in `public/` are served
 * verbatim rather than imported, so Next cannot infer their dimensions —
 * each entry carries its intrinsic size so `next/image` can still reserve
 * layout space and avoid shifting.
 */
const dir = "/assets-images";

const images = {
  logo: { src: `${dir}/logo.png`, width: 499, height: 502 },

  // Featured work
  textworld: { src: `${dir}/textworld.png`, width: 1440, height: 900 },
  panelsuite: { src: `${dir}/panelsuite.png`, width: 1440, height: 900 },
  geeft: { src: `${dir}/geeft.png`, width: 1440, height: 660 },
  neolyf: { src: `${dir}/neolyf.png`, width: 1440, height: 900 },

  // Earlier work
  movies: { src: `${dir}/movies.png`, width: 2560, height: 1375 },
  countries: { src: `${dir}/countries.png`, width: 2560, height: 1381 },
  realestate: { src: `${dir}/realestate.png`, width: 2555, height: 1267 },
  goodnews: { src: `${dir}/goodnews.png`, width: 2560, height: 1385 },
  emagazine: { src: `${dir}/emagazine.png`, width: 2560, height: 1374 },
  travels: { src: `${dir}/travels.png`, width: 2560, height: 1375 },
  omove: { src: `${dir}/omove.png`, width: 2558, height: 1271 },
} satisfies Record<string, ImageAsset>;

export default images;
