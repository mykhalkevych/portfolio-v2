import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'link'
  | 'outline';

interface Props {
  variant?: ButtonVariant;
  disabled?: boolean;
  animate?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

import './button.css';

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  disabled = false,
  animate = false,
  style = {},
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      style={style}
      className={`btn ${variant} ${animate ? 'animate' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
