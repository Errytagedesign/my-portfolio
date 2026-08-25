type TabTitleProps = {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
};

function TabTitle({ id, title, activeTab, setActiveTab }: TabTitleProps) {
  const isActive = activeTab === id;

  return (
    <div
      onClick={() => setActiveTab(id)}
      className={`flex flex-row border-l-[5px] transition-all duration-600 ease-in-out max-[900px]:items-center max-[900px]:justify-center max-[900px]:border-l-0 max-[900px]:border-b-[5px] ${
        isActive ? "border-pry text-pry" : "border-grey-faded text-grey"
      }`}
    >
      <h4 className="ml-2 whitespace-nowrap py-[0.3em] text-2xl font-normal max-[900px]:text-base">
        {title}
      </h4>
    </div>
  );
}

export default TabTitle;
