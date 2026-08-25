import ExperienceEntry from './ExperienceEntry';

function Pillarsalt() {
  return (
    <ExperienceEntry
      role='Lead Frontend Engineer'
      company='Pillarsalt'
      period='Aug 2025 – Present'
      duties={[
        'Lead frontend architecture and delivery across the product suite, setting the React and Next.js conventions the team builds against.',
        'Own the shared component library and design-system decisions so marketing sites, web apps and dashboards stay visually and behaviourally consistent.',
        'Review pull requests and mentor engineers on state management, rendering strategy, performance and accessibility.',
        'Partner with design and backend to break product requirements into well-scoped, shippable frontend work with clear delivery milestones.',
        'Drive Core Web Vitals improvements through server-side rendering, code-splitting and asset optimisation.',
        'Set up linting, type-safety and CI checks so quality is enforced automatically rather than caught in review.',
      ]}
    />
  );
}

export default Pillarsalt;
