import { ProjectItem } from './../interfaces';

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? '/portfolio-v2' : '';
export const Projects: ProjectItem[] = [
  {
    id: '1',
    description: `This portfolio website is a personal showcase of my professional journey, skills, and projects,
       designed to provide an interactive and engaging experience for visitors.
       Built using Next.js, a React-based framework, the website is optimized for speed, SEO, and scalability.`,
    name: 'Portfolio',
    images: [
      baseUrl + '/images/portfolio1.jpg',
      baseUrl + '/images/portfolio2.jpg',
      baseUrl + '/images/portfolio3.jpg',
    ],
    link: 'github.com',
    type: '_portfolio',
    technologies: [
      {
        name: 'React',
        color: '#5ed3f3',
        iconClass: 'ri-reactjs-line',
      },
      {
        name: 'Next',
        color: '#3fb27f',
        iconClass: 'ri-nextjs-line',
      },
    ],
    duration: '2 months',
    activities: ['Design', 'Development', 'Testing'],
  },
  {
    id: '2',
    description: `Hospital Information System for private clinics: online doctor's appointment, electronic patient medical records, telemedicine, website creation.`,
    name: 'Ademrius',
    images: [
      baseUrl + '/images/ademrius1.jpg',
      baseUrl + '/images/ademrius2.jpg',
      baseUrl + '/images/ademrius3.jpg',
    ],
    link: 'https://ademrius.com/uk/',
    type: '_medical_software',
    technologies: [
      {
        name: 'Vue',
        color: '#3fb27f',
        iconClass: 'ri-vuejs-line',
      },
    ],
    duration: '8 months',
    activities: [
      'Development',
      'Make architecture',
      'Code review and refactoring',
    ],
  },
  {
    id: '3',
    description: `sPReader LTD is a smart digital PR company in Israel, which has developed innovative technology 
      for advertising and marketing small and medium-sized businesses,
      in the easiest and most professional digital process.

    Sprearder's vision is to strengthen the power of local brands,
    promote small and medium-sized businesses and advertise them on leading news sites, blogs, and digital media.`,
    name: 'sPReader',
    images: [
      baseUrl + '/images/spreader1.jpg',
      baseUrl + '/images/spreader2.jpg',
      baseUrl + '/images/spreader3.jpg',
    ],
    link: 'https://spreader.io/',
    type: '_digital_media',
    technologies: [
      {
        name: 'Angular',
        color: '#bd002e',
        iconClass: 'ri-angularjs-line',
      },
      {
        name: 'Node.js',
        color: '#8cc84b',
        iconClass: 'ri-nodejs-line',
      },
    ],
    duration: '7 months',
    activities: [
      'Development',
      'Make architecture',
      'Code review and refactoring',
    ],
  },
  {
    id: '4',
    description: `Business Intelligence software that determines and maintains the analysis of sales instruments
      (website, social networks, call-center, sales brokers, corporate sales in bulk) across all regions.
      Activation Products is the huge eCommerce project from Canada. The company is a manufacturer with the full process –
      from raw materials to final product. They sell premium health products and supplements worldwide (about 1000 pcs / day).
      The solution automated the control of the sales process.`,
    name: 'Activation Products',
    images: [
      baseUrl + '/images/activationProduct1.jpg',
      baseUrl + '/images/activationProduct2.jpg',
    ],
    link: 'https://activation-products.com',
    type: '_ecommerce',
    technologies: [
      {
        name: 'HTML',
        color: '#e96228',
        iconClass: 'ri-html5-line',
      },
      {
        name: 'CSS',
        color: '#1572b7',
        iconClass: 'ri-css3-line',
      },
    ],
    duration: '6 months',
    activities: [
      'Development',
      'Make architecture',
      'Code review and refactoring',
    ],
  },
  {
    id: '5',
    description:
      'Digital health programs give you access to behavioral coaching via web or mobile, night or day - like having the world’s leading experts on call but tailored to you and your lifestyle.',
    name: 'DNA-Lifestyle',
    images: [baseUrl + '/images/dna1.jpg', baseUrl + '/images/dna2.jpg'],
    type: '_healthcare',
    technologies: [
      {
        name: 'HTML',
        color: '#e96228',
        iconClass: 'ri-html5-line',
      },
      {
        name: 'CSS',
        color: '#1572b7',
        iconClass: 'ri-css3-line',
      },
    ],
    duration: '5 months',
    activities: ['Development', 'Code review and refactoring'],
  },
  {
    id: '6',
    description: `An Inclusive Intelligent Total Talent Acquisition Platform | ProvenBase. A cutting-edge talent acquisition platform that is nimble, discovers top talent, develops talent strategy,
     streamlines your tech stack, empowers HR, and monitors hiring goals with advanced analytics.`,
    name: 'Provenbase',
    link: 'https://provenbase.com/',
    images: [
      baseUrl + '/images/provenBase1.jpg',
      baseUrl + '/images/provenBase2.jpg',
      baseUrl + '/images/provenBase3.jpg',
    ],
    type: '_hr_software',
    technologies: [
      {
        name: 'Angular',
        color: '#bd002e',
        iconClass: 'ri-angularjs-line',
      },
    ],
    duration: '11 months',
    activities: ['Development', 'Code review and refactoring', 'Testing'],
  },
];
