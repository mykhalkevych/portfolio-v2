'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  RiTerminalBoxFill,
  RiProfileFill,
  RiGamepadFill,
} from '@remixicon/react';

import './LeftMenu.css';

export default function LeftMenu() {
  const pathname = usePathname();
  return (
    <nav className='left-nav'>
      <ul>
        <li>
          <Link
            className={`${
              pathname.includes('/professional-info') ? 'active' : ''
            }`}
            href='/about/professional-info'
          >
            <RiProfileFill />
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname.includes('/personal-info') ? 'active' : ''}`}
            href='/about/personal-info'
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
