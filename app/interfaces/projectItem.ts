import { Technology } from './technology';

export interface ProjectItem {
  id: string | number;
  name: string;
  type?: string;
  link?: string;
  images: string[];
  description: string;
  technologies: Technology[];
}
