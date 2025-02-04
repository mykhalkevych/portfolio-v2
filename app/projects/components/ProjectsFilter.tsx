'use client';
import { Technology } from '@/app/interfaces';
import Checkbox from '@/components/ui/Checkbox';
import { FC } from 'react';

interface Props {
  projectsTechnologies: Technology[];
  toggleTechnology: (isChecked: boolean, technology: string) => void;
}
const ProjectsFilter: FC<Props> = ({
  projectsTechnologies,
  toggleTechnology,
}) => {
  return (
    <div className='projects-filter'>
      <div className='filter-items'>
        {projectsTechnologies.map((technology) => (
          <Checkbox
            key={technology.name}
            checked
            {...technology}
            onChange={toggleTechnology}
          ></Checkbox>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
