import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';
import ProjectListItem from './ProjectListItem';

interface Props {
  projectsList: ProjectItem[];
}

const ProjectsList: FC<Props> = ({ projectsList }) => {
  return (
    <div className='projects-list'>
      {projectsList.map((project) => (
        <ProjectListItem key={project.id} item={project}></ProjectListItem>
      ))}
    </div>
  );
};

export default ProjectsList;
