import type { ReactNode } from "react";

type TabContentsProps = {
  id: string;
  activeTab: string;
  comps: ReactNode;
};

function TabContents({ id, activeTab, comps }: TabContentsProps) {
  return activeTab === id ? <div>{comps}</div> : null;
}

export default TabContents;
