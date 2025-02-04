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
  onChange: (e: any, value: any) => void;
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
    onChange,
  } = props;
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(() => e.target.checked);
    onChange && onChange(e.target.checked, name);
  };
  return (
    <div className='checkbox-wrapper'>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          className={isChecked ? 'checked' : ''}
          onChange={(e) => handleCheckboxChange(e)}
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
