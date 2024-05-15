import { PersonalNavList } from '@/app/data';
import SubNavigation from '../components/subnavigation/SubNavigation';

export default function PersonalInfo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavigation
        navTitle='personal-info'
        navList={PersonalNavList}
      ></SubNavigation>
      {children}
    </>
  );
}
