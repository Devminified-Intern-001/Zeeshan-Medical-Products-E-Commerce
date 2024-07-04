import { InputHTMLAttributes, ReactNode } from 'react';
interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  rightLabel?: string;
  rightIcon?: ReactNode;
}
const Input = (props: Iinput) => {
  const { className, label, rightLabel, rightIcon, ...rest } = props;
  return (
    <div>
      <span> {label}</span>
      <input  className={className} {...rest} />
      {rightLabel}
      {rightIcon}
    </div>
  );
};

export default Input;
