import { RiArrowDropDownFill } from '@remixicon/react';
import { FC } from 'react';

import './subnavtitle.css';

interface ISubNavTitleProps {
  title: string;
}

const SubNavTitle: FC<ISubNavTitleProps> = ({ title }) => {
  return (
    <div className='sub-nav-title'>
      <RiArrowDropDownFill size={30} />
      {title}
    </div>
  );
};

export default SubNavTitle;
