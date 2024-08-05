/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode } from 'react';
interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  rightLabel?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  ref?:any
}

const Input = (props: Iinput) => {
  const { className, label, rightLabel, rightIcon, leftIcon,ref, ...rest } = props;
  return (
    <div>
      <span> {label}</span>
      {leftIcon}
      <input className={className} {...rest} ref={ref} />
      {rightLabel}
      {rightIcon}
    </div>
  );
};

export default Input;
