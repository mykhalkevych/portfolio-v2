import { ProjectItem } from './../interfaces';
export const Projects: ProjectItem[] = [
  {
    id: '1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
    name: 'Project 1',
    image: 'https://picsum.photos/seed/picsum/200/300',
    type: '_ui-animation',
    technologies: [{ color: '', name: 'React' }],
  },
  {
    id: '2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 2',
    image: 'https://picsum.photos/seed/picsum/200/300',
    type: '_game',
    technologies: [{ color: '', name: 'Vue' }],
  },
];
