import '../../../MyCSS.css'
type Ismartchoice = {
  imageSrc?: string;
  className?: string;
  label?: string;
  description?: string;
};
const SmartChoice = (props: Ismartchoice) => {
  const { imageSrc, className, label, description} = props;
  return (
    <div className={className}>
      <img src={imageSrc} alt={imageSrc} />
      <div className="relpostion">
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SmartChoice;
