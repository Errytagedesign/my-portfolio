import React, { useState } from "react";
import "./Experience.scss";
// import { SiTypescript, SiHtml5, SiJavascript } from "react-icons/si";
// import { DiCss3, DiReact } from "react-icons/di";
// import { BsWordpress } from "react-icons/bs";
import { TabsData } from "../../components/Tabs/TabsData";
import TabContents from "../../components/Tabs/TabContents";

import TabTitle from "../../components/Tabs/TabTitle";

function Experience() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <main className="Experience" id="Experience">
      <header data-aos="fade-right" className="mt-5">
        {" "}
        <h4 className="sectionHeader "> Where I’ve Worked</h4>
      </header>
      <section className="d-flex flex-column flex-lg-row justify-content-between mt-5">
        <article className="d-flex flex-column col-12 col-lg-3 ">
          <section className="tabsContainer d-flex flex-row flex-lg-column col-12 ">
            {TabsData[0].TabTitle.map((tab) => (
              <section key={tab.id} className="tabTitle col-6 col-lg-12 ">
                <TabTitle
                  id={tab.id}
                  title={tab.title}
                  icon={tab.icon}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </section>
            ))}
          </section>
        </article>
        <article className="tabContents d-flex flex-column col-12 p-3 p-lg-0 col-lg-8">
          {TabsData[0].TabContents.map((tab) => (
            <section key={tab.id} className="tabContents">
              <TabContents id={tab.id} activeTab={activeTab} comps={tab.comp} />
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}

export default Experience;
