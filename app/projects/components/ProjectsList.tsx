import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';
import ProjectListItem from './ProjectListItem';

interface Props {
  projectsList: ProjectItem[];
}

const ProjectsList: FC<Props> = ({ projectsList }) => {
  return (
    <>
      {projectsList.map((project) => (
        <ProjectListItem key={project.id} item={project}></ProjectListItem>
      ))}
    </>
  );
};

export default ProjectsList;
