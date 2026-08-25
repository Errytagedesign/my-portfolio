'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import logo from '/public/images/sodeeq_olaide_awoyemi.png';

gsap.registerPlugin(useGSAP);

/** Width the splash logo is shown at before it flies to the navbar. */
const SPLASH_LOGO_WIDTH = 160;

/** Two up-down beats the logo pulses through before it takes off. */
const PULSE_UP = 2.18;
const PULSE_DOWN = 0.88;
const PULSE_STEP = 0.18;

/**
 * Full screen logo splash. It sits on top of the page rather than replacing
 * it, so the real markup is still server rendered underneath.
 *
 * On exit the logo travels to the navbar's brand mark and scales down to
 * match it, so the splash appears to hand the logo over to the header.
 */
function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const logoEl = logoRef.current;
      const backdrop = backdropRef.current;
      if (!logoEl || !backdrop) return;

      // Measure before any tween touches the element: gsap.from() applies its
      // start values immediately, so measuring later reads a scaled-down box
      // and the flight lands at the wrong size.
      const target = document.querySelector<HTMLElement>('[data-brand-logo]');
      const from = logoEl.getBoundingClientRect();
      const to = target?.getBoundingClientRect();

      const dismiss = () => setVisible(false);
      const tl = gsap.timeline({ onComplete: dismiss });

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (reduced) {
        tl.to(backdrop, { autoAlpha: 0, duration: 0.3, delay: 0.4 });
        return;
      }

      // Entrance.
      tl.from(logoEl, {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'back.out(1.6)',
      });

      // Up, down, up, down — settling back at 1 so the flight's scale maths
      // still resolves against the logo's natural size.
      tl.to(logoEl, {
        scale: PULSE_UP,
        duration: PULSE_STEP,
        ease: 'power1.inOut',
      })
        .to(logoEl, {
          scale: PULSE_DOWN,
          duration: PULSE_STEP,
          ease: 'power1.inOut',
        })
        .to(logoEl, {
          scale: PULSE_UP,
          duration: PULSE_STEP,
          ease: 'power1.inOut',
        })
        .to(logoEl, { scale: 1, duration: PULSE_STEP, ease: 'power1.inOut' });

      // Without a measurable navbar logo there is nothing to fly to, so just
      // fade the splash away rather than animating to a bogus position.
      if (!to || to.width === 0 || to.height === 0) {
        tl.to(
          backdrop,
          { autoAlpha: 0, duration: 0.4, ease: 'power2.out' },
          '+=0.2',
        );
        return;
      }

      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      tl.to(
        logoEl,
        {
          x: dx,
          y: dy,
          scale: to.width / from.width,
          duration: 0.75,
          ease: 'power3.inOut',
        },
        '+=0.1',
      ).to(
        backdrop,
        { autoAlpha: 0, duration: 0.5, ease: 'power2.out' },
        '<0.25',
      );
    },
    { scope: rootRef },
  );

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className='fixed inset-0 z-1000 flex h-screen w-full items-center justify-center'
    >
      <div ref={backdropRef} className='absolute inset-0 bg-main' />

      <div
        ref={logoRef}
        className='pointer-events-none relative'
        style={{ width: SPLASH_LOGO_WIDTH }}
      >
        <Image
          src={logo}
          alt='Sodeeq Awoyemi logo'
          priority
          className='w-full h-auto'
        />
      </div>
    </div>
  );
}

export default SplashScreen;
