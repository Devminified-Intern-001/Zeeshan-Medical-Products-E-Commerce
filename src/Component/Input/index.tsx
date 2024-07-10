import { InputHTMLAttributes, ReactNode } from 'react';
interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  rightLabel?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

const Input = (props: Iinput) => {
  const { className, label, rightLabel, rightIcon, leftIcon, ...rest } = props;
  return (
    <div>
      <span> {label}</span>
      {leftIcon}
      <input className={className} {...rest} />
      {rightLabel}
      {rightIcon}
    </div>
  );
};

export default Input;
