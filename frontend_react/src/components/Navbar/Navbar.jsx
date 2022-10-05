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
    <nav className="container d-flex flex-row justify-content-between align-items-center mx-auto">
      <div className="col-4">
        {/* <img src={images.logo} alt=" Sodeeq's Logo" /> */}
        <h2> SDQ </h2>
      </div>

      <aside className={` col-6 ${navbar ? " displayNav" : "navMove"}`}>
        <ul className="d-flex flex-column flex-md-row justify-content-between col-12 text-center align-items-center">
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
  );
}

export default Navbar;
