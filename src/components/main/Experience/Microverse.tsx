import ExperienceEntry from './ExperienceEntry';

function Microverse() {
  return (
    <ExperienceEntry
      role='Mentor'
      company='Microverse'
      location='Volunteer, Remote'
      period='Nov 2023 – Apr 2024'
      duties={[
        'Guided 7+ junior developers each month through structured code reviews and one-to-one mentorship.',
        'Increased mentee project completion rates by 10% through a mix of technical and motivational support.',
        'Reviewed pull requests against industry-standard gitflow, holding a consistent bar for readable, well-tested code.',
        'Coached mentees through remote pair-programming sessions on GitHub across multiple time zones.',
        'Ran daily standups that kept international remote teams unblocked and accountable to their milestones.',
        'Helped mentees debug JavaScript, React and Redux problems, teaching the reasoning rather than handing over fixes.',
      ]}
    />
  );
}

export default Microverse;
