import { Technology } from '@/app/interfaces';
import Checkbox from '@/components/ui/Checkbox';
import { FC } from 'react';

interface Props {
  projectsTechnologies: Technology[];
}
const ProjectsFilter: FC<Props> = ({ projectsTechnologies }) => {
  return (
    <div className='projects-filter'>
      <div className='filter-items'>
        {projectsTechnologies.map((technology) => (
          <Checkbox key={technology.name} {...technology}></Checkbox>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
