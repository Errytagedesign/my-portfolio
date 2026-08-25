import Button from '@/components/ui/button';

function Contact() {
  return (
    <div
      id='contact'
      className='mx-auto my-12 flex w-full flex-col text-center md:w-[58.333%]'
    >
      <p data-aos='fade-left' className='mt-12 text-base text-light'>
        What&apos;s next?
      </p>

      <h2 data-aos='fade-right' className='mb-4 text-big font-bold text-pry'>
        Get In Touch
      </h2>

      <p data-aos='zoom-in' className='text-base text-light'>
        For job opportunty, gigs, contract projects, code challenge help, please
        don&apos;t hesitate to reach out. looking forward to working with you.
      </p>

      <div className='mt-12 flex justify-center'>
        <Button
          link
          href='mailto:errytage@gmail.com'
          className='outline-btn w-full md:w-fit'
        >
          Say Hello
        </Button>
      </div>
    </div>
  );
}

export default Contact;
