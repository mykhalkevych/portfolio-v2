import { HobbiesNavList } from '@/app/data';
import SubNavigation from '../components/subnavigation/SubNavigation';

export default function Hobbies({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubNavigation
        navTitle='hobbies'
        navList={HobbiesNavList}
      ></SubNavigation>
      {children}
    </>
  );
}
