import { ReactNode } from "react";

interface INutrationsFactprops {
  className?: string;
  heading?: string;
  descriptopn?: string;
  text?: string;
  children?: ReactNode;
}

const NutrationsFact = (props:INutrationsFactprops) => {
    const{className,heading,descriptopn,text,children}=props
    return <div className={className}>
        <h3>{heading}</h3>
        {descriptopn}
        {text}
        {children}

    </div>;
  
};

export default NutrationsFact;
