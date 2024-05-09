export interface NavListItem {
  title: string;
  icon: string;
  color: string;
  path: string;
  type: 'folder' | 'page';
}
export const AboutNavList: NavListItem[] = [
  {
    title: 'Bio',
    color: '',
    icon: '',
    path: 'bio',
    type: 'folder',
  },
];
