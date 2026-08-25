"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initialises AOS once on the client so every `data-aos` attribute in the
 * tree keeps working after the move to the App Router.
 */
function AosProvider() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}

export default AosProvider;
