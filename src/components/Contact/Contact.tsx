function Contact() {
  return (
    <div
      id="contact"
      className="mx-auto mt-12 flex w-full flex-col text-center md:w-[58.333%]"
    >
      <p data-aos="fade-left" className="mt-12 text-base text-light">
        {" "}
        What&apos;s next?{" "}
      </p>

      <h2 data-aos="fade-right" className="mb-4 text-big font-bold text-pry">
        {" "}
        Get In Touch{" "}
      </h2>

      <p data-aos="zoom-in" className="text-base text-light">
        For job opportunty, gigs, contract projects, code challenge help, please
        don&apos;t hesitate to reach out. looking forward to working with you.
      </p>

      <div data-aos="fade-left" className="mt-12">
        <a
          href="mailto:errytage@gmail.com"
          className="inline-block rounded-[5px] border-2 border-pry bg-transparent px-4 py-2 text-pry transition-all duration-1000 ease-in-out hover:scale-110 hover:border-transparent hover:bg-pry hover:text-black hover:shadow-glow"
        >
          {" "}
          Say Hello{" "}
        </a>
      </div>
    </div>
  );
}

export default Contact;
