import { ProjectItem } from './../interfaces';
export const Projects: ProjectItem[] = [
  {
    id: '1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
    name: 'Project 1',
    images: ['https://picsum.photos/400/300/'],
    link: 'github.com',
    type: '_ui-animation',
    technologies: [
      {
        name: 'Vue',
        color: '#3fb27f',
        iconClass: 'ri-vuejs-line',
      },
      {
        name: 'HTML',
        color: '#dd4b25',
        iconClass: 'ri-html5-line',
      },
      {
        name: 'CSS',
        color: '#1572b7',
        iconClass: 'ri-css3-line',
      },
    ],
  },
  {
    id: '2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 2',
    images: ['https://picsum.photos/400/300'],
    type: '_game',
    technologies: [
      {
        name: 'React',
        color: '#5ed3f3',
        iconClass: 'ri-reactjs-line',
      },
      {
        name: 'Angular',
        color: '#bd002e',
        iconClass: 'ri-angularjs-line',
      },
    ],
  },
];
