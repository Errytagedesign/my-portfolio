'use client';

import { useState } from 'react';

import ProjectCard from './ProjectCard';
import { OtherWork } from './workData';
import Button from '@/components/ui/button';

const INITIAL_COUNT = 6;

function OtherProjects() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? OtherWork : OtherWork.slice(0, INITIAL_COUNT);
  const hasMore = OtherWork.length > INITIAL_COUNT;

  return (
    <section className='space-y-10 flex flex-col items-center'>
      <h3 className='text-center text-2xl font-semibold text-light md:text-3xl'>
        Other Noteworthy Projects
      </h3>

      <ul className='grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3'>
        {visible.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            desc={item.desc}
            stacks={item.stacks}
            link={item.link}
            github={item.github}
            coy={item.coy}
          />
        ))}
      </ul>

      {hasMore && (
        <div className='text-center'>
          <Button
            onClick={() => setExpanded((current) => !current)}
            className='outline-btn'
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </section>
  );
}

export default OtherProjects;
