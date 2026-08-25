"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { images } from "./exportImg";

/**
 * Full screen logo splash shown for the first 3 seconds. It sits on top of the
 * page instead of replacing it, so the real markup is still server rendered.
 */
function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => setVisible(false), 3000);

    return () => clearTimeout(timeId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-main">
      <main className="my-8 animate-pulse-scale">
        <Image
          src={images.logo.src}
          width={images.logo.width}
          height={images.logo.height}
          alt="Sodeeq Awoyemi logo"
          priority
        />
      </main>
    </div>
  );
}

export default SplashScreen;
