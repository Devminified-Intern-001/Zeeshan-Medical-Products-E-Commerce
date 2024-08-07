import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IHeading {
  className?: string;
  headingName?: string;
  text?: string;
  icon?: ReactNode;
}

const Heading = (props: IHeading) => {
  const { className, headingName, text, icon } = props;
  return (
    <div className={className}>
      <h2>{headingName}</h2>
      <Link to={'/Product'}>{text} {icon}</Link>
    </div>
  );
};

export default Heading;
