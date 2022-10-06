import React from "react";
import "./Spinner.scss";
import images from "../images";

function Spinner() {
  return (
    <div className="spinCon">
      <main className="spinit">
        <img src={images.logo} alt="logo" />
      </main>
    </div>
  );
}

export default Spinner;
