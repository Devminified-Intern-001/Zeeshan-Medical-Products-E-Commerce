/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import Input from '../../../Component/Input';
import Button from '../../../Component/Button';
interface IHero {
  heading?: string;
  inputPlaceholder?: string;
  onSearch?: any;
  buttonIcon?: ReactNode;
  className?: string;
  value?: string;
  onChange?: any;
}
const Hero = (props: IHero) => {
  const {
    heading,
    inputPlaceholder,
    onSearch,
    buttonIcon,
    className,
    value,
    onChange,
  } = props;
  
  return (
    <div className={className}>
      <div className="herochild">
        <h1>{heading}</h1>
        <Input
          type='text'
          name='search'
          placeholder={inputPlaceholder}
          value={value}
          onChange={onChange}
        />
        <Button onClick={onSearch}>{buttonIcon}</Button>
      </div>
    </div>
  );
};

export default Hero;
