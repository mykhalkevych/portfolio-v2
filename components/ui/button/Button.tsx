import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface Props {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

import './button.css';

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  onClick,
}) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
