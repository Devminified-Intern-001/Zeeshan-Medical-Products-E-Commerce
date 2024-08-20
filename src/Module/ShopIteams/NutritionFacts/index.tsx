import { ReactNode } from "react";

interface INutrationsFactprops {
  className?: string;
  heading?: string;
  text?: string;
  children?: ReactNode;
  servingsPerContainer?: number| null
  servingSize?: string| null
}

const NutrationsFact = (props:INutrationsFactprops) => {
    const{className,heading,text,children,servingsPerContainer,servingSize}=props    
    return <div className={className}>
        <h3>{heading}</h3>
        About {servingsPerContainer} servings per container Serving size {servingSize}
        {text}
        {children}

    </div>;
  
};

export default NutrationsFact;
