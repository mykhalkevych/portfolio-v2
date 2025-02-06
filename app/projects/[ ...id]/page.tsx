import { Projects } from '@/app/data/projects';
import ProjectDetail from '../components/ProjectDetail';

export async function generateStaticParams() {
  const ids = await fetchIds();
  return ids.map((id) => ({ params: { id } }));
}

async function fetchIds() {
  return await Projects.map((project) => project.id);
}

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
