interface IServices {
  text?: string;
  heading?: string;
  description?: string;
  className?: string;
  
}
const Services = (props: IServices) => {
  const {text,heading,description,className} = props;
  return <div className={className}>
    <span>{text}</span>
    <h1>{heading}</h1>
    <span>{description}</span>
  </div>;
};

export default Services;
