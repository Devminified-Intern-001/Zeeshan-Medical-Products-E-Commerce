import React, { ReactNode } from 'react';
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
const Button = (props: IButton) => {
  const { children, className, leftIcon, rightIcon, ...rest } = props;

  return (
    <button className={className} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
