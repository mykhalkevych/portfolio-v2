import { ProjectItem } from './../interfaces';
export const Projects: ProjectItem[] = [
  {
    id: '1',
    description: `This portfolio website is a personal showcase of my professional journey, skills, and projects,
       designed to provide an interactive and engaging experience for visitors.
       Built using Next.js, a React-based framework, the website is optimized for speed, SEO, and scalability.`,
    name: 'Portfolio',
    images: [
      '/images/portfolio1.jpg',
      '/images/portfolio2.jpg',
      '/images/portfolio3.jpg',
    ],
    link: 'github.com',
    type: '_portfolio',
    technologies: [
      {
        name: 'Next.js',
        color: '#3fb27f',
        iconClass: 'ri-nextjs-line',
      },
    ],
    duration: '2 months',
    activities: ['Design', 'Development', 'Testing'],
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
    ],
  },
  {
    id: '3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 3',
    images: ['https://picsum.photos/400/300'],
    type: '_ui-animation',
    technologies: [
      {
        name: 'Angular',
        color: '#bd002e',
        iconClass: 'ri-angularjs-line',
      },
    ],
  },
  {
    id: '4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 4',
    images: ['https://picsum.photos/400/300'],
    type: '_ui-animation',
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
  {
    id: '5',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 5',
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
  {
    id: '6',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    name: 'Project 6',
    images: ['https://picsum.photos/400/300'],
    type: '_ui-animation',
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
