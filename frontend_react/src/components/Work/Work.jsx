import React from "react";
// import { Link } from "react-router-dom";

// import { images } from "../exportImg";s

import "./Work.scss";

function Work({ name, link, image, stacks, desc }) {
  // console.log(stacks);
  return (
    <div data-aos="zoom-in" className=" work">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="workImg" src={image} alt="projects" />
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-3 text-center workTitle d-flex flex-column justify-content-between p-3"
        >
          <h5> {name} </h5>
          <p>{desc}</p>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="d-flex flex-wrap flex-row justify-content-between"
          >
            {stacks.map((idx) => (
              <p className="stack"> {idx} </p>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Work;
