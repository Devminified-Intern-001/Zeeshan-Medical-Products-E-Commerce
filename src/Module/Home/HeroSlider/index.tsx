import { ReactNode } from "react";

type IHeroSlider={
    icon?:ReactNode
    className?:string;
    label?:string;
}

const HeroSlider = (props:IHeroSlider) => {
    const {className,label,icon}=props

    return (
      <div className={className}>
          {icon}
          {label}
      </div>
    )
}

export default HeroSlider
