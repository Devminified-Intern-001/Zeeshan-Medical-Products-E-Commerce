import { ReactNode } from 'react';

interface Iingredientsprops {
  className?: string;
  heading?: string;
  ingredients?: string[]
  text?: string;
  warnIcon?: ReactNode;
  warnHeading?: string;
}

const Ingredients = (props: Iingredientsprops) => {
  const { className, heading, ingredients, text, warnIcon, warnHeading } =
    props;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      {ingredients?.map((item,index)=>{return(<p key={index}>{item}</p>)})}
      <div> {warnIcon} <h4>{warnHeading}</h4>
      {text}</div>
     
    </div>
  );
};

export default Ingredients;
