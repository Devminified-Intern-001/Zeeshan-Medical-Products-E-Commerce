interface IProfilePhotoProps {
  className?: string;
  image?: string;
  name?: string;
  description?: string;
}

const ProfilePhoto = (props: IProfilePhotoProps) => {
  const { className, image, name, description } = props;
  return (
    <div className={className}>
      <img src={image} alt={image} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProfilePhoto;
