import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';

interface Props {
  item: ProjectItem;
}

const ProjectListItem: FC<Props> = ({ item }) => {
  return (
    <>
      <h1>{item.name}</h1>
    </>
  );
};

export default ProjectListItem;
