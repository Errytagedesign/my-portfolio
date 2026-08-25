import { Suspense } from 'react';

import SectionHeader from '../../ui/SectionHeader';
import ExperienceTabs from './ExperienceTabs';
import { defaultRole, renderRole, roles } from './roles';

/**
 * The tabs read the active role from the URL, which needs a Suspense boundary
 * so the rest of the page can still be statically prerendered. The fallback
 * renders the same shape with the default role, so nothing shifts.
 */
function ExperienceFallback() {
  return (
    <section className='mt-12 flex flex-col justify-between lg:flex-row'>
      <article className='flex w-full flex-col lg:w-1/4'>
        <ul className='flex w-full flex-row overflow-x-scroll lg:flex-col'>
          {roles.map(({ slug, label }, index) => (
            <li key={slug} className='w-1/2 lg:w-full'>
              <div
                className={`flex w-full flex-row border-l-[5px] max-[900px]:items-center max-[900px]:justify-center max-[900px]:border-l-0 max-[900px]:border-b-[5px] ${
                  index === 0
                    ? 'border-pry text-pry'
                    : 'border-grey-faded text-grey'
                }`}
              >
                <h4 className='ml-2 whitespace-nowrap py-[0.3em] text-2xl font-normal max-[900px]:text-base'>
                  {label}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className='flex w-full flex-col p-4 lg:w-2/3 lg:p-0'>
        {renderRole(defaultRole)}
      </article>
    </section>
  );
}

function Experience() {
  return (
    <main className='mb-40' id='experience'>
      <SectionHeader index={3} title='Where I’ve Worked' />

      <Suspense fallback={<ExperienceFallback />}>
        <ExperienceTabs />
      </Suspense>
    </main>
  );
}

export default Experience;
