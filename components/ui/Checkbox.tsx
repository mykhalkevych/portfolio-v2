import { FC, useState } from 'react';

interface ICheckbox {
  disabled: boolean;
  checked: boolean;
  value: boolean;
  label: string | React.ReactNode;
  className: string;
  error: boolean;
  name: string;
}

export interface ICheckboxProps extends Partial<ICheckbox> {
  children?: React.ReactNode;
  ariaLabel: string;
}

import './checkbox.css';

const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    disabled,
    checked,
    children,
    value,
    label,
    className,
    ariaLabel,
    error,
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
        <span>{label}</span>
      </label>
    </div>
  );
};
