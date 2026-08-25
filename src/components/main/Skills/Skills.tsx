import SectionHeader from '@/components/ui/SectionHeader';
import { SkillsData } from './skillsData';

function Skills() {
  return (
    <div className='mb-40' id='skills'>
      <SectionHeader index={2} title='Skills' />

      <ul
        data-aos='fade-up'
        className='mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3'
      >
        {SkillsData.map(({ title, Icon, skills }) => (
          <li
            key={title}
            className='flex h-full flex-col rounded-lg border border-sec  p-6 shadow-card'
          >
            <div className='mb-6 flex flex-row items-center gap-3'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pry/10 text-pry'>
                <Icon size={18} />
              </span>
              <h3 className='text-lg font-medium text-pry'>{title}</h3>
            </div>

            <ul className='flex list-none flex-wrap gap-2 p-0'>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className='rounded-full bg-sec px-3 py-1.5 text-xs text-pry'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
