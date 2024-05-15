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
    anchors: ['football', 'volleyball'],
  },
];

export const ProfessionalNavList: NavListItem[] = [
  {
    title: 'Bio',
    color: '',
    path: 'bio',
    type: 'folder',
    anchors: ['skills'],
  },
];
