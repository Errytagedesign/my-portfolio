import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import FeaturedShowcase from '@/components/Work/FeaturedShowcase';
import OtherProjects from '@/components/Work/OtherProjects';
import Contact from '@/components/Contact/Contact';
import SectionHeader from '@/components/SectionHeader';
import { FeaturedWork } from '@/components/Work/workData';

export default function Home() {
  return (
    <div className='mx-auto w-[95%] max-w-330 px-3 min-[500px]:w-4/5'>
      <HeroSection />
      <About />
      <Experience />

      <section id='work' className='mt-12'>
        <SectionHeader index={3} title='Some Things I’ve Built' />
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
