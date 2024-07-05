import { ReactNode } from 'react';

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
      <div>
        {text} {icon}
      </div>
    </div>
  );
};

export default Heading;
