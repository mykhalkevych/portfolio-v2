import SideMenu from './components/sidemenu/SideMenu';

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div className='page'>
      <SideMenu></SideMenu>
      {children}
    </div>
  );
}
