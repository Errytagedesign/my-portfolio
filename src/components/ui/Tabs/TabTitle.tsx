type TabTitleProps<T extends string> = {
  slug: T;
  title: string;
  isActive: boolean;
  onSelect: (slug: T) => void;
};

/**
 * A real <button> in a tablist — the previous <div onClick> could not be
 * reached or triggered by keyboard.
 */
function TabTitle<T extends string>({
  slug,
  title,
  isActive,
  onSelect,
}: TabTitleProps<T>) {
  return (
    <button
      type='button'
      role='tab'
      id={`role-tab-${slug}`}
      aria-selected={isActive}
      aria-controls={`role-panel-${slug}`}
      onClick={() => onSelect(slug)}
      className={`flex w-full cursor-pointer flex-row border-l-[5px] transition-all duration-600 ease-in-out max-[900px]:items-center max-[900px]:justify-center max-[900px]:border-l-0 max-[900px]:border-b-[5px] ${
        isActive ? 'border-pry text-pry' : 'border-grey-faded text-grey'
      }`}
    >
      <h4 className='ml-2 whitespace-nowrap py-[0.3em] text-2xl font-normal max-[900px]:text-base'>
        {title}
      </h4>
    </button>
  );
}

export default TabTitle;
