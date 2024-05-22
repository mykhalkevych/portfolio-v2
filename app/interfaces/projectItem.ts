import { Technology } from './technology';

export interface ProjectItem {
  id: string | number;
  name: string;
  type?: string;
  image: string;
  description: string;
  technologies: Technology[];
}
