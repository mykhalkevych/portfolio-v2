/* eslint-disable @next/next/no-img-element */
import { ProjectItem } from '@/app/interfaces';
import { FC } from 'react';

interface Props {
  item: ProjectItem;
}

const ProjectListItem: FC<Props> = ({ item }) => {
  return (
    <div className='project-card'>
      <h1 className='project-title'>{item.name}</h1>
      <div className='img'>
        <img src={item.image} alt={item.name} />
      </div>
      <div className='desc'>
        <div className='technologies'>
          {item.technologies.map((t) => (
            <span key={t.name}>{t.name}</span>
          ))}
        </div>
        <p>{item.description}</p>
        <button>view-project</button>
      </div>
    </div>
  );
};

export default ProjectListItem;
