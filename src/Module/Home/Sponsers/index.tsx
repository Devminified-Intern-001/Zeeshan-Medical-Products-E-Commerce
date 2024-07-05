interface ISponserProps {
  className?: string;
  imageCoke?: string;
  imageChili?: string;
  imageNestle?: string;
  imagePizza?: string;
}

const Sponsers = (props: ISponserProps) => {
  const { className, imageCoke, imageChili, imageNestle, imagePizza } = props;
  return (
    <div className={className}>
      <img src={imageCoke} alt="imageCoke" />
      <img src={imageChili} alt="" />
      <img src={imageNestle} alt="" />
      <img src={imagePizza} alt="" />
    </div>
  );
};

export default Sponsers;
