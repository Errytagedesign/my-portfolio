import React from "react";
import "./About.scss";
// import { SiTypescript, SiHtml5, SiJavascript } from "react-icons/si";
// import { DiCss3, DiReact } from "react-icons/di";
// import { BsWordpress } from "react-icons/bs";
import { images } from "../exportImg";

function About() {
  return (
    <div className="about" id="about" data-sr-id="2">
      <section data-aos="fade-right" className="sectionHeader">
        {" "}
        <h4 className=" "> About Me</h4>
      </section>
      <section
        data-aos="fade-right"
        className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5"
      >
        <article className="col-12 col-lg-7  ">
          <p>
            {" "}
            Hello! My name is Sodeeq, and I enjoy creating things that live on
            the internet. My interest in web development started back in 2015
            when a friend showed me what he did on the web using HTML & CSS!, i
            was so impressed and i wish i could do the samething. <br /> <br />
            Fast-forward to today, and I’ve had the privilege of working on
            numerous projects as a frontend developer using HTML, CSS &
            JAVASCRIPT as well as REACTJS.
            <br /> <br />
            My main focus these days is building accessible, inclusive products
            and digital experiences for a variety of clients.
          </p>
          <section data-aos="fade-right">
            {" "}
            <p className="mb-0 mt-5">
              {" "}
              Here are a few technologies I’ve been working with recently:{" "}
            </p>{" "}
            <div data-aos="fade-down" className="icons d-flex flex-wrap ">
              <img src={images.html} alt="logos" />
              <img src={images.css} alt="logos" />
              <img src={images.javascript} alt="logos" />
              <img src={images.react} alt="logos" />

              <img src={images.sass} alt="logos" />
              <img src={images.redux} alt="logos" />
              {/* <SiHtml5 /> <DiCss3 /> <SiJavascript /> <DiReact /> <SiTypescript />{" "}
          <BsWordpress /> */}
            </div>
          </section>
        </article>

        {/* <div data-aos="zoom-in" className="profile col-10 col-lg-4">
          <img src={images.sdqProfile} alt="Sodeeq awoyemi" />
        </div> */}
      </section>
    </div>
  );
}

export default About;
