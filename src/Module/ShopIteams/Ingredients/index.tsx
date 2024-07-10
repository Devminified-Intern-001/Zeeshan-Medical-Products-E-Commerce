import { ReactNode } from 'react';

interface Iingredientsprops {
  className?: string;
  heading?: string;
  description?: string;
  text?: string;
  warnIcon?: ReactNode;
  warnHeading?: string;
}

const Ingredients = (props: Iingredientsprops) => {
  const { className, heading, description, text, warnIcon, warnHeading } =
    props;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <p>{description}</p>
      <div> {warnIcon} <h4>{warnHeading}</h4>
      {text}</div>
     
    </div>
  );
};

export default Ingredients;
