'use client';
import { FC, useState } from 'react';

interface ICheckbox {
  disabled: boolean;
  checked: boolean;
  value: boolean;
  label: string | React.ReactNode;
  className: string;
  error: boolean;
  name: string;
  iconClass?: string;
  color?: string;
}

export interface ICheckboxProps extends Partial<ICheckbox> {
  children?: React.ReactNode;
}

import './checkbox.css';

const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    disabled,
    checked,
    children,
    value,
    label,
    name,
    iconClass,
    className,
    error,
    color,
  } = props;
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className='checkbox-wrapper'>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          className={isChecked ? 'checked' : ''}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span className='icon'>
          <i
            className={iconClass}
            style={{ color: isChecked ? color : undefined }}
          ></i>
        </span>
        <span>{name}</span>
      </label>
    </div>
  );
};

export default Checkbox;
