import React from "react";

import {
  About,
  HeroSection,
  Contact,
  Work,
} from "../../components/exportAllcomp";

import { WorkData } from "../../components/Work/workData";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className=" container home">
      <HeroSection />
      <About />

      <section id="work" className="mt-5">
        <article data-aos="fade-right" className="mt-5  mb-5">
          {" "}
          <h4 className="sectionHeader "> Some Things I’ve Built </h4>
        </article>

        <section className="d-flex flex-row flex-wrap ">
          {WorkData.map((item) => (
            <article className="col-12 col-md-6 col-lg-4 p-2">
              <Work
                key={item.id}
                name={item.name}
                image={item.imgUrl}
                desc={item.desc}
                stacks={item.stacks}
                link={item.link}
              />
            </article>
          ))}
        </section>
      </section>
      <Contact />
    </div>
  );
}

export default HomePage;
