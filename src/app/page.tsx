import HeroSection from '@/components/main/HeroSection/HeroSection';
import About from '@/components/main/About/About';
import Skills from '@/components/main/Skills/Skills';
import Experience from '@/components/main/Experience/Experience';
import FeaturedShowcase from '@/components/main/Work/FeaturedShowcase';
import OtherProjects from '@/components/main/Work/OtherProjects';
import Contact from '@/components/main/Contact/Contact';
import SectionHeader from '@/components/ui/SectionHeader';
import { FeaturedWork } from '@/components/main/Work/workData';

export default function Home() {
  return (
    <div className='mx-auto w-[95%] max-w-330 px-3 min-[500px]:w-4/5 pt-28'>
      <HeroSection />
      <About />
      <Skills />
      <Experience />

      <section id='work' className='mt-12'>
        <SectionHeader index={4} title='Some Things I’ve Built' />
      </section>

      {/* Full-bleed pinned showcase, so it breaks out of the page gutter */}
      <FeaturedShowcase projects={FeaturedWork} />

      <section className='mt-12'>
        <OtherProjects />
      </section>

      <Contact />
    </div>
  );
}
