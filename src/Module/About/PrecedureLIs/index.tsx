import { ReactNode } from 'react';

interface IPrecedureLiProps {
  className?: string;
  iconNumber?: ReactNode | number;
  label?: string;
  text?: string;
}

const PrecedureLi = (props: IPrecedureLiProps) => {
  const { className, iconNumber, label, text } = props;
  return (
    <div className={className}>
      {iconNumber}
      <div>
        <div><b>{label}</b></div>
        {text}
      </div>
    </div>
  );
};

export default PrecedureLi;
