import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import FeaturedProject from "@/components/Work/FeaturedProject";
import OtherProjects from "@/components/Work/OtherProjects";
import Contact from "@/components/Contact/Contact";
import SectionHeader from "@/components/SectionHeader";
import { FeaturedWork } from "@/components/Work/workData";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] max-w-[1320px] px-3 min-[500px]:w-4/5">
      <HeroSection />
      <About />
      <Experience />

      <section id="work" className="mt-12">
        <SectionHeader index={3} title="Some Things I’ve Built" />

        <ul className="mt-16 list-none p-0">
          {FeaturedWork.map((item, index) => (
            <FeaturedProject
              key={item.id}
              name={item.name}
              image={item.imgUrl}
              desc={item.desc}
              stacks={item.stacks}
              link={item.link}
              github={item.github}
              cover={item.cover}
              flip={index % 2 === 1}
            />
          ))}
        </ul>

        <OtherProjects />
      </section>

      <Contact />
    </div>
  );
}
