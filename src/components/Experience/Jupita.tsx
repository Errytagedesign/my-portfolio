import ExperienceEntry from "./ExperienceEntry";

function Jupita() {
  return (
    <ExperienceEntry
      role="Frontend Developer"
      company="Jupita"
      location="Remote"
      period="Aug 2022 – Present"
      duties={[
        "Designed and launched new website features, increasing traffic by 20%.",
        "Maintained and enhanced multiple projects using React.js, Next.js, and GSAP.",
      ]}
    />
  );
}

export default Jupita;
