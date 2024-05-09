import LeftMenu from './components/LeftMenu';

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div className='page'>
      <LeftMenu></LeftMenu>
      {children}
    </div>
  );
}
