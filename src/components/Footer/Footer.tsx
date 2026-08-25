import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Errytagedesign",
    Icon: BsGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/errytage",
    Icon: FiTwitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+2348095342136",
    Icon: BsWhatsapp,
  },
];

const iconLink = "text-grey transition-all duration-1000 ease-in-out hover:text-pry";

function Footer() {
  return (
    <div className="relative mt-36 flex flex-row">
      {/* Big screen social icons — fixed rails, hidden on mobile */}
      <section className="hidden md:fixed md:top-[80%] md:right-0 md:bottom-0 md:left-0 md:z-0 md:flex md:w-full md:flex-row md:items-center md:justify-between md:px-4 md:transition-all md:duration-500 md:ease-in-out">
        <aside className="flex flex-col items-center justify-between text-center text-2xl">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className={iconLink}
            >
              <Icon />
            </a>
          ))}
          <span className="mt-2 h-[30vh] w-0.5 bg-grey" />
        </aside>

        <aside className="flex flex-col items-center justify-between text-center text-2xl">
          <a
            className="text-[0.7em] text-grey [writing-mode:vertical-rl] hover:text-pry"
            href="mailto:errytage@gmail.com"
          >
            errytage@gmail.com
          </a>
          <span className="mt-2 h-[30vh] w-0.5 bg-grey" />
        </aside>
      </section>

      {/* Mobile social icons */}
      <section className="mx-auto my-4 flex w-1/2 flex-row justify-around text-center text-2xl transition-all duration-500 ease-in-out md:hidden">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className={iconLink}
          >
            <Icon />
          </a>
        ))}
      </section>
    </div>
  );
}

export default Footer;
