'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiTerminalBoxFill,
  RiProfileFill,
  RiGamepadFill,
} from '@remixicon/react';

import './SideMenu.css';

export default function SideMenu() {
  const pathname = usePathname();
  return (
    <nav className='side-nav'>
      <ul>
        <li>
          <Link
            className={`${pathname.includes('/personal-info') ? 'active' : ''}`}
            href='/about/personal-info'
          >
            <RiProfileFill />
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname.includes('/professional-info') ? 'active' : ''
            }`}
            href='/about/professional-info'
          >
            <RiTerminalBoxFill />
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname.includes('/hobbies') ? 'active' : ''}`}
            href='/about/hobbies'
          >
            <RiGamepadFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
