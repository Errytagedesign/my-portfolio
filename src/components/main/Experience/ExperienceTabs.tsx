'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import TabTitle from '../../ui/Tabs/TabTitle';
import { ROLE_PARAM, renderRole, roles, toRoleSlug } from './roles';
import type { RoleSlug } from './roles';

/**
 * The active role lives in the URL (`?role=jupita`) rather than component
 * state, so a tab is linkable, survives a refresh, and moves with browser
 * back/forward.
 */
function ExperienceTabs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeRole = toRoleSlug(searchParams.get(ROLE_PARAM));

  const selectRole = (slug: RoleSlug) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(ROLE_PARAM, slug);
    // `scroll: false` keeps the section where it is instead of jumping to top.
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className='mt-12 flex flex-col justify-between lg:flex-row'>
      <article className='flex w-full flex-col lg:w-1/4'>
        <div
          role='tablist'
          aria-label='Companies I have worked with'
          className='flex w-full flex-row overflow-x-scroll lg:flex-col [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-grey [&::-webkit-scrollbar-thumb]:bg-clip-content [&::-webkit-scrollbar]:h-[10px]'
        >
          {roles.map(({ slug, label }) => (
            <div
              key={slug}
              className='w-1/2 transition-all duration-600 ease-in-out hover:bg-hover hover:text-pry lg:w-full'
            >
              <TabTitle
                slug={slug}
                title={label}
                isActive={slug === activeRole}
                onSelect={selectRole}
              />
            </div>
          ))}
        </div>
      </article>

      <article
        id={`role-panel-${activeRole}`}
        role='tabpanel'
        aria-labelledby={`role-tab-${activeRole}`}
        className='flex w-full flex-col p-4 lg:w-2/3 lg:p-0'
      >
        {renderRole(activeRole)}
      </article>
    </section>
  );
}

export default ExperienceTabs;
