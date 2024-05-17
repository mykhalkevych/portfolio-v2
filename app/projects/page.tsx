import { Projects } from '../data/projects';
import ProjectsList from './components/ProjectsList';

export default function Page() {
  return (
    <>
      <ProjectsList projectsList={Projects}></ProjectsList>
    </>
  );
}
