import Button from '../../../Component/Button';
import Arrow from '../../../assets/Arrow';
interface IAboutUs {
  heading?: string;
  description?: string;
  className?: string;
  onContactUs?: () => void;
}

const AboutUs = (props: IAboutUs) => {
  const { heading, description, className, onContactUs } = props;
  return (
    <div className={className}>
      <h1>{heading}</h1>
      <span>{description}</span>
      <Button rightIcon={<Arrow/>} onClick={onContactUs}>Contact us</Button>
    </div>
  );
};

export default AboutUs;
