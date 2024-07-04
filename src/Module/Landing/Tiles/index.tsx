import { ReactNode } from "react";

interface ITitles {
  number_text?:string
    icon?: ReactNode;
    heading: string;
    description: string;
    className?: string;
  }

const Tiles = (props:ITitles) => {
    const {number_text,icon,heading,description,className}=props
  return (
    <div className={className}>
      {icon}{number_text}
      <h3>{heading}</h3>
      {description}
    </div>
  )
}

export default Tiles
