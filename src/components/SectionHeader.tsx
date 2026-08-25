/**
 * The numbered "01. About Me" heading used across the page. Replaces the old
 * CSS counter based `.sectionHeader` rule with an explicit index.
 */
type SectionHeaderProps = {
  index: number;
  title: string;
};

function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <header
      data-aos="fade-right"
      className="relative flex w-full flex-row items-center after:ml-4 after:h-px after:w-full after:bg-grey after:content-['']"
    >
      <span className="mr-4 text-light">{`0${index}.`}</span>
      <h4 className="whitespace-nowrap text-[clamp(24px,5vw,1.8rem)] font-medium">
        {title}
      </h4>
    </header>
  );
}

export default SectionHeader;
