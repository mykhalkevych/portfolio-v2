'use client';

import { Projects } from '../data/projects';
import ProjectsList from './components/ProjectsList';
import ProjectsFilter from './components/ProjectsFilter';
import { ProjectItem, Technology } from '../interfaces';
import { Technologies } from '../data/technologies';
import { useState } from 'react';

interface SelectedTechnology extends Technology {
  isChecked: boolean;
}

export default function Page() {
  const [projects, setProjects] = useState<ProjectItem[]>(Projects);
  const [selectedTechnologies, setTechnologies] = useState<
    SelectedTechnology[]
  >(Technologies.map((tech) => ({ ...tech, isChecked: true })));
  const toggleTechnology = (isChecked: boolean, technology: string) => {
    const updatedTechnologies = selectedTechnologies.map((tech) =>
      tech.name === technology ? { ...tech, isChecked } : tech
    );
    setTechnologies(updatedTechnologies);
    const updatedProjects = filterProjects(updatedTechnologies);
    setProjects(updatedProjects);
  };

  const filterProjects = (updatedTechnologies: SelectedTechnology[]) => {
    const selectedTechs = updatedTechnologies
      .filter((tech) => tech.isChecked)
      .map((tech) => tech.name);
    return Projects.filter((project) =>
      project.technologies.some((tech) => selectedTechs.includes(tech.name))
    );
  };

  return (
    <>
      <ProjectsFilter
        toggleTechnology={toggleTechnology}
        projectsTechnologies={Technologies}
      ></ProjectsFilter>
      <ProjectsList projectsList={projects}></ProjectsList>
    </>
  );
}
