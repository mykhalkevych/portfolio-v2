export interface NavListItem {
  title: string;
  color: string;
  path: string;
  type: 'folder' | 'anchor';
  anchors: string[];
}

export const PersonalNavList: NavListItem[] = [
  {
    title: 'bio',
    color: 'primary',
    path: 'bio',
    type: 'folder',
    anchors: ['summary'],
  },
  {
    title: 'education',
    color: 'secondary',
    path: 'education',
    type: 'folder',
    anchors: ['school', 'university'],
  },
  {
    title: 'interests',
    color: 'third',
    path: 'interests',
    type: 'folder',
    anchors: ['technologies', 'sports'],
  },
];

export const ProfessionalNavList: NavListItem[] = [
  {
    title: 'experience',
    color: 'primary',
    path: 'experience',
    type: 'folder',
    anchors: ['experience'],
  },
  {
    title: 'skills',
    color: 'secondary',
    path: 'skills',
    type: 'folder',
    anchors: ['primary', 'secondary', 'other'],
  },
  {
    title: 'certificates',
    color: 'third',
    path: 'certificates',
    type: 'folder',
    anchors: ['certificates'],
  },
];

export const HobbiesNavList: NavListItem[] = [
  {
    title: 'books',
    color: 'primary',
    path: 'books',
    type: 'folder',
    anchors: ['books'],
  },
  {
    title: 'games',
    color: 'secondary',
    path: 'games',
    type: 'folder',
    anchors: ['games'],
  },
];
