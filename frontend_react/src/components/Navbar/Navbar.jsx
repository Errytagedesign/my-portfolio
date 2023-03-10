import React, { useState } from "react";
import { images } from "../exportImg";
import "./Navbar.scss";

const navLink = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 3,
    name: "Work",
    link: "#work",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  const [navbar, setNavbar] = useState(true);

  const handleNav = () => {
    setNavbar(!navbar);
    console.log("here");
  };

  return (
    <main>
      <nav className="container-fluid d-flex flex-row justify-content-between align-items-center">
        <div data-aos="zoom-in" className="col-4 logo">
          <img
            className="col-6 col-md-2"
            src={images.logo}
            alt=" Sodeeq Awoyemi Logo"
          />
          {/* <h2> SDQ </h2> */}
        </div>

        <aside
          data-aos=" fade-up"
          className={` col-6 ${navbar ? " displayNav" : "navMove"}`}
        >
          <ul
            data-aos="zoom-in"
            data-aos-delay="300"
            className=" col-12 text-center "
          >
            {navLink.map((item) => (
              <li key={item.id} onClick={handleNav}>
                <a href={item.link}> {item.name} </a>
              </li>
            ))}

            <div>
              {" "}
              <a
                href={images.resume}
                target="_blank"
                rel="noreferrer"
                className="Btn"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                {" "}
                Resume{" "}
              </a>{" "}
            </div>
          </ul>
        </aside>
        {/* Hambuger icon */}
        <div onClick={handleNav} className={navbar ? "ham" : "open"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
