import ExperienceEntry from "./ExperienceEntry";

function Scillinx() {
  return (
    <ExperienceEntry
      role="Frontend Developer"
      company="Scillinx"
      location="Lagos, Nigeria"
      period="Jun 2021 – Mar 2021"
      duties={[
        "Collaborated with teams to implement new website features, resulting in 20% traffic growth.",
        "Delivered scalable solutions using React.js, Next.js, and modern UI frameworks.",
      ]}
    />
  );
}

export default Scillinx;
