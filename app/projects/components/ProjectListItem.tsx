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
    <div className='project-item'>
      <h1 className='project-title'>
        {item.name}
        {item.type && <span> {`// ${item.type}`}</span>}
      </h1>
      <div className='project-card'>
        <div className='img'>
          <img src={item.images[0]} alt={item.name} />
        </div>
        <div className='desc'>
          <div className='technologies'>
            {item.technologies.map((t) => (
              <span
                className='tag'
                style={{ background: t.color }}
                key={t.name}
              >
                <span className='icon'>
                  <i className={t.iconClass}></i>
                </span>
              </span>
            ))}
          </div>
          <p>{item.description}</p>
          <Button>
            <Link href={`/projects/${item.id}`}> view-project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
