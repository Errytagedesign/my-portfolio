"use client";

import { useState } from "react";

import SectionHeader from "../SectionHeader";
import { TabsData } from "../Tabs/TabsData";
import TabContents from "../Tabs/TabContents";
import TabTitle from "../Tabs/TabTitle";

function Experience() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <main className="mb-40" id="experience">
      <SectionHeader index={2} title="Where I’ve Worked" />

      <section className="mt-12 flex flex-col justify-between lg:flex-row">
        <article className="flex w-full flex-col lg:w-1/4">
          <section className="flex w-full cursor-pointer flex-row overflow-x-scroll lg:flex-col [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-grey [&::-webkit-scrollbar-thumb]:bg-clip-content [&::-webkit-scrollbar]:h-[10px]">
            {TabsData[0].TabTitle.map((tab) => (
              <section
                key={tab.id}
                className="w-1/2 transition-all duration-600 ease-in-out hover:bg-hover hover:text-pry lg:w-full"
              >
                <TabTitle
                  id={tab.id}
                  title={tab.title}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </section>
            ))}
          </section>
        </article>

        <article className="flex w-full flex-col p-4 lg:w-2/3 lg:p-0">
          {TabsData[0].TabContents.map((tab) => (
            <TabContents
              key={tab.id}
              id={tab.id}
              activeTab={activeTab}
              comps={tab.comp}
            />
          ))}
        </article>
      </section>
    </main>
  );
}

export default Experience;
