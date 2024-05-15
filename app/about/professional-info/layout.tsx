import { ProfessionalNavList } from '@/app/data';
import SubNavigation from '../components/subnavigation/SubNavigation';

export default function ProfessionalInfo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavigation
        navTitle='professional-info'
        navList={ProfessionalNavList}
      ></SubNavigation>
      {children}
    </>
  );
}
