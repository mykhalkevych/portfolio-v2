'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      nazar-mykhalkevych
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
        </ul>
      </nav>
    </header>
  );
}
