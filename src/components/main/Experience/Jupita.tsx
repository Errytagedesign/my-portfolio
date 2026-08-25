import ExperienceEntry from './ExperienceEntry';

function Jupita() {
  return (
    <ExperienceEntry
      role='Frontend Developer'
      company='Jupita'
      location='Remote'
      period='Aug 2022 – 2025'
      duties={[
        'Built Textworld end to end — marketing website, user web app and admin dashboard — wiring real-time SMS retrieval over WebSocket that cut verification delays by 80%.',
        'Delivered Kanselo across four surfaces: the marketing website, the mentor web app, the mentee web app and the admin dashboard.',
        'Shipped Geeft’s waitlist, marketing website, vendor web app and admin dashboard on Next.js and Cloudflare Workers.',
        'Built the marketing sites for PAIRR, Moniarch and Cader, spanning privacy-first social, business payments and gift-card trading.',
        'Integrated Stripe and Flutterwave payment flows, and optimised SSR to bring load speed down by 30%.',
        'Designed and launched new website features that increased traffic by 20%, maintaining multiple projects in React.js, Next.js and GSAP.',
      ]}
    />
  );
}

export default Jupita;
