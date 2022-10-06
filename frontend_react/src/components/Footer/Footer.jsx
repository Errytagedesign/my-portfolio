import React from "react";

import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer d-flex flex-row">
      {/* Big screen social icosn */}
      <section className=" social">
        {" "}
        <aside className="text-center d-flex flex-column align-items-center justify-content-between Icons ">
          <a href="https://github.com/Errytagedesign" target="-blank">
            {" "}
            <BsGithub />{" "}
          </a>{" "}
          <a href="https://twitter.com/errytage" target="-blank">
            {" "}
            <FiTwitter />{" "}
          </a>{" "}
          <a href="https://wa.me/+2348095342136" target="-blank">
            {" "}
            <BsWhatsapp />
          </a>
          <span></span>
        </aside>
        <aside className="text-center d-flex flex-column align-items-center justify-content-between  Icons">
          <a className="mail" href="mailto: errytage@gmail.com" target="-blank">
            errytage@gmail.com
          </a>

          <span></span>
        </aside>
      </section>

      {/* mobile social icons */}
      <section className="iconss text-center d-flex d-md-none flex-row justify-content-around">
        {" "}
        <a href="https://github.com/Errytagedesign" target="-blank">
          {" "}
          <BsGithub />{" "}
        </a>{" "}
        <a href="https://twitter.com/errytage" target="-blank">
          {" "}
          <FiTwitter />{" "}
        </a>{" "}
        <a href="https://wa.me/+2348095342136" target="-blank">
          {" "}
          <BsWhatsapp />
        </a>
      </section>
    </div>
  );
}

export default Footer;
