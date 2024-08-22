import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IHeading {
  className?: string;
  headingName?: string;
  text?: string;
  icon?: ReactNode;
  number?: number;
}

const Heading = (props: IHeading) => {
  const { className, headingName, text, icon, number } = props;
  return (
    <div className={className}>
      <h2>{headingName}</h2>
      <Link to={'/Product'}>
        {text && text}
        {number && `You have ${number} items in your cart`}
        {icon}
      </Link>
    </div>
  );
};

export default Heading;
