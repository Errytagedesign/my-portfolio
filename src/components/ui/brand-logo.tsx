import logo from '/public/images/sodeeq_olaide_awoyemi.png';

import Image from 'next/image';
import Link from 'next/link';

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      data-brand-logo
      className={`${className} flex w-16 items-center justify-center gap-2`}
    >
      <Image src={logo} alt='Sodeeq Olaide Awoyemi Logo' />
    </Link>
  );
};

export default BrandLogo;
