'use client';
import NavbarLink from './navbar-link';
import Hambugger from './hambugger';
import Button from '../ui/button';
import { useGlobalHooks } from '@/hooks/globalHooks';
import { navRoutes } from '../routes';

const ResponsiveNavBar = ({
  styles,
}: {
  isScrolled?: boolean;
  styles: any;
}) => {
  const { handleToggle, toggle } = useGlobalHooks();

  return (
    <nav className='flex flex-1 justify-end pr-4'>
      <section
        className={`${
          toggle['navbar'] ? styles.closeNav : styles.openNav
        } flex-1`}
      >
        <article
          className={`flex h-screen w-full flex-wrap justify-between gap-10 overflow-y-auto bg-main py-5 lg:h-auto lg:overflow-visible lg:bg-transparent lg:py-0 lg:pt-0`}
        >
          <ul
            className={`flex w-full flex-col items-start justify-start gap-10 space-y-5 px-10 lg:px-0 lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:space-y-0`}
          >
            {navRoutes?.map((route, index) => {
              return (
                <NavbarLink
                  key={index}
                  path={route.path}
                  name={route.name}
                  action={() => handleToggle('navbar')}
                />
              );
            })}
          </ul>

          <div className='flex w-full items-center justify-start gap-3 px-5 lg:w-fit lg:justify-end lg:px-0'>
            <Button
              link
              href='https://docs.google.com/document/d/1xsm9StZTrsSOXFAm_NqcTlTdUJYPiTn9qWPBFvDMGUI/edit'
              className='outline-btn w-full lg:w-fit'
            >
              Resume
            </Button>
          </div>
        </article>
      </section>
      <Hambugger
        styles={styles}
        action={() => handleToggle('navbar')}
        toggle={toggle['navbar']}
      />
    </nav>
  );
};

export default ResponsiveNavBar;
