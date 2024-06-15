import { Technologies } from '../data/technologies';
import ProjectsFilter from './components/ProjectsFilter';
import './projects.css';

export default function Projects({ children }: { children: React.ReactNode }) {
  return (
    <div className='projects-page'>
      <ProjectsFilter projectsTechnologies={Technologies}></ProjectsFilter>
      {children}
    </div>
  );
}
