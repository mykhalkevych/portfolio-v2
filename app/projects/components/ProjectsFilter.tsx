import { Technology } from '@/app/interfaces';
import Checkbox from '@/components/ui/Checkbox';
import { FC } from 'react';

interface Props {
  projectsTechnologies: Technology[];
}
const ProjectsFilter: FC<Props> = ({ projectsTechnologies }) => {
  return (
    <div className='projects-filter'>
      {projectsTechnologies.map((technology) => (
        <Checkbox key={technology.name} {...technology}></Checkbox>
      ))}
    </div>
  );
};

export default ProjectsFilter;
