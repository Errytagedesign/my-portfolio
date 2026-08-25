/**
 * Shared layout for a single job in the experience tabs.
 */
type ExperienceEntryProps = {
  role: string;
  company: string;
  period: string;
  duties: string[];
  location?: string;
};

function ExperienceEntry({
  role,
  company,
  location,
  period,
  duties,
}: ExperienceEntryProps) {
  return (
    <main className="max-[900px]:mt-8">
      <h3 data-aos="fade-left" className="text-med font-normal">
        <mark className="bg-transparent p-0 text-light">{role}</mark> @{company}
      </h3>

      <small data-aos="fade-left" className="bg-transparent p-0 text-light">
        {period}
        {location ? ` \u00b7 ${location}` : ""}
      </small>
      <br />
      <br />

      <div data-aos="fade-left" className="text-base text-light">
        <ul className="m-0 list-none p-0">
          {duties.map((duty) => (
            <li
              key={duty}
              className="relative mb-2 pl-[1em] before:absolute before:left-0 before:font-bold before:text-pry before:content-['▹']"
            >
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ExperienceEntry;
