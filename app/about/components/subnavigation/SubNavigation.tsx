'use client';

import { NavListItem } from '@/app/data';
import { FC } from 'react';
import {
  RiArrowDropDownFill,
  RiFolder3Fill,
  RiFileTextFill,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from '@remixicon/react';
import './SubNavigation.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SubNavTitle from '@/components/ui/subnavtitle/SubNavTitle';
interface Props {
  navTitle: string;
  navList: NavListItem[];
}
const SubNavigation: FC<Props> = ({ navList, navTitle }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className='sub-nav'>
      <SubNavTitle title={navTitle}></SubNavTitle>
      <ul>
        {navList.map((item) => {
          const isActive = pathname.includes(`${item.path}`);
          return (
            <li key={item.path}>
              <Link
                className={`folder${isActive ? ' active' : ''}`}
                href={`${item.path}`}
                replace
              >
                {isActive ? (
                  <RiArrowDownSLine size={20} />
                ) : (
                  <RiArrowRightSLine size={20} />
                )}
                <RiFolder3Fill
                  className={`folder-icon ${item.color}-text`}
                  size={20}
                />
                {item.title}
                {item.anchors?.map((a) => (
                  <span className='file' key={a}>
                    <RiFileTextFill size={20} />
                    {a}
                  </span>
                ))}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubNavigation;
