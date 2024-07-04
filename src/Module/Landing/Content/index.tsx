import { ReactNode } from 'react';
import Button from '../../../Component/Button';
interface IHero {
  text?: string;
  heading?: string;
  description?: string;
  className?: string;
  img?: string;
  onGetStarted?: () => void;
  buttonLabel?: string;
  children?: ReactNode;
  buttonIcon?: ReactNode;
}
const Content = (props: IHero) => {
  const {
    text,
    heading,
    description,
    className,
    img,
    onGetStarted,
    buttonLabel,
    children,
    buttonIcon
  } = props;
  return (
    <div className={className}>
      <div>
        <span>{text}</span>
        <h3>{heading}</h3>
        <div>{description}</div>
        <span>{children}</span>
        <Button onClick={onGetStarted} rightIcon={buttonIcon}>{buttonLabel}</Button>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Content;
