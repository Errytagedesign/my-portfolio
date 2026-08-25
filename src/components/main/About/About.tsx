import SectionHeader from '../../ui/SectionHeader';

function About() {
  return (
    <div className='mb-40' id='about'>
      <SectionHeader index={1} title='About Me' />

      <section
        data-aos='fade-right'
        className='mt-12 flex flex-col items-center justify-between lg:flex-row'
      >
        <article className='w-full lg:w-[58.333%]'>
          <p
            data-aos='zoom-in-down'
            data-aos-duration='1500'
            className='text-base text-light'
          >
            I&apos;m Sodeeq Olaide Awoyemi, a web and mobile app developer with
            a passion for creating exceptional user experiences. With expertise
            in JavaScript, TypeScript, React, Next.js and Redux on the web, and
            React Native and Expo on mobile, I specialize in crafting intuitive,
            responsive interfaces that captivate users and drive results — on
            the browser and on the phone alike.
            <br />
            <br />
            My journey has been marked by a commitment to delivering
            high-quality solutions that not only meet but exceed client
            expectations. Whether it&apos;s building a dynamic single-page
            application, shipping a React Native app that feels at home on both
            iOS and Android, or optimizing an existing project for performance
            and scalability, I thrive on the challenge of turning ideas into
            reality. With a keen eye for detail and a drive for continuous
            improvement, I&apos;m constantly exploring new technologies and
            methodologies to stay at the forefront of the ever-evolving web and
            mobile landscape. Above all, I prioritize collaboration and
            communication, working closely with cross-functional teams to bring
            projects to life on time and within budget. <br />
            <br />
            If you&apos;re looking for a proficient and passionate developer who
            enjoys creating exceptional digital experiences across web and
            mobile, I&apos;d love to connect and explore how I can contribute to
            your projects. Let&apos;s work together to turn your vision into
            reality.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;
