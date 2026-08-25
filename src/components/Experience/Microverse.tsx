import ExperienceEntry from "./ExperienceEntry";

function Microverse() {
  return (
    <ExperienceEntry
      role="Mentor"
      company="Microverse"
      location="Volunteer, Remote"
      period="Nov 2023 – Apr 2024"
      duties={[
        "Guided 7+ junior developers monthly through code reviews and mentorship.",
        "Increased mentee project completion rates by 10% through technical and motivational support.",
      ]}
    />
  );
}

export default Microverse;
