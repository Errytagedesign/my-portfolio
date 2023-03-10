import React from "react";
// import { Link } from "react-router-dom";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

// import { images } from "../exportImg";s

import "./Work.scss";

function Work({ name, link, image, stacks, desc, github }) {
  // console.log(stacks);
  return (
    <div data-aos="zoom-in" className=" work">
      <section>
        <img className="workImg" src={image} alt="projects" />
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-3 text-center workTitle d-flex flex-column justify-content-between p-3"
        >
          <a href={link} target="_blank" rel="noreferrer">
            <h5> {name} </h5>
          </a>
          <p>{desc}</p>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="d-flex flex-wrap flex-row justify-content-around"
          >
            {stacks.map((idx) => (
              <p className="stack"> {idx} </p>
            ))}
          </div>
          <article
            className="d-flex flex-row justify-content-around mx-auto
           col-6 "
          >
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className=""
              >
                <BsGithub size={25} />
              </a>
            )}

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=""
            >
              <BsBoxArrowUpRight size={25} />
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Work;
