'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className='logo'>nazar-mykhalkevych</div>
      <nav className='nav'>
        <ul>
          <li>
            <Link className={`${pathname === '/' ? 'active' : ''}`} href='/'>
              _hello
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/about' ? 'active' : ''}`}
              href='/about'
            >
              _about-me
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/projects' ? 'active' : ''}`}
              href='/projects'
            >
              _projects
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/contact' ? 'active' : ''}`}
              href='/contact'
            >
              _contact-me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
