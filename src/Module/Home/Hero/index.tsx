import { ReactNode } from 'react'
import Input from '../../../Component/Input';
import Button from '../../../Component/Button';
interface IHero {
  
    heading?: string;
    inputPlaceholder?:string;
    onSearch?: () => void;
    buttonIcon?: ReactNode;
    className?:string;
   
  }
const Hero = (props:IHero) => {
    const {heading,inputPlaceholder,onSearch,buttonIcon,className}=props
  return (
    <div className={className}>
        <h1>{heading}</h1>
        <Input placeholder={inputPlaceholder} />
        <Button onClick={onSearch} >{buttonIcon}</Button>
      
    </div>
  )
}

export default Hero
