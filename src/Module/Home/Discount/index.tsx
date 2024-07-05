import { ReactNode } from 'react';
import Button from '../../../Component/Button';
interface IDiscountProps {
  className?: string;
  heading?: string;
  highlight?: string;
  buttonlabel?: string;
  buttonIcon?: ReactNode;
}
const Discount = (props: IDiscountProps) => {
  const { className, heading, highlight, buttonIcon, buttonlabel } = props;

  return (
    <div className={className}>
      <h2>{heading}</h2>
      <h2>{highlight}</h2>
      <Button rightIcon={buttonIcon}>{buttonlabel}</Button>
    </div>
  );
};

export default Discount;
