import { Projects } from '@/app/data/projects';
import ProjectDetail from '../components/ProjectDetail';

export default function Page({ params }: { params: { id: string } }) {
  const project = Projects.find((item) => item.id === params.id);
  return (
    <div className='project-detail'>
      {project ? (
        <ProjectDetail project={project}></ProjectDetail>
      ) : (
        'Not found'
      )}
    </div>
  );
}
