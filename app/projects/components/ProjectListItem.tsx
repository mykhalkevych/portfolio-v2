/* eslint-disable @next/next/no-img-element */
import { ProjectItem } from '@/app/interfaces';
import Button from '@/components/ui/button/Button';
import { FC } from 'react';
import Link from 'next/link';

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
        <Button>
          <Link href={`/projects/${item.id}`}> view-project</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectListItem;
