import Button from '../../../Component/Button';
interface IHero {
  text?: string;
  heading?: string;
  description?: string;
  className?: string;
  onGetStarted?: () => void;
  buttonLabel?: string;
 
}
const Hero = (props: IHero) => {
  const {
    text,
    heading,
    description,
    className,
    onGetStarted,
    buttonLabel,
 
  } = props;
  return (
    <div className={className}>
      <span>{text}</span>
      <h3>{heading}</h3>
      <div>{description}</div>
      <Button onClick={onGetStarted}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Hero;
