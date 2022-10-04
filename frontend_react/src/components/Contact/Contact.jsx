import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="d-flex flex-column text-center mt-5 contact col-12 col-md-7 mx-auto ">
      <p data-aos="fade-left" className="mt-5">
        {" "}
        What next?{" "}
      </p>
      <h2 data-aos="fade-right" className="mb-3">
        {" "}
        Get In Touch{" "}
      </h2>
      <p data-aos="zoom-in">
        For job opportunty, gigs, contract projects, code challenge help, please
        don't hesitate to reach out. looking forward to working with you.
      </p>

      <div data-aos="fade-left" className="mt-5">
        {" "}
        <a href="mailto: errytage@gmail.com" className="Btn">
          {" "}
          Say Hellow{" "}
        </a>{" "}
      </div>
    </div>
  );
}

export default Contact;
