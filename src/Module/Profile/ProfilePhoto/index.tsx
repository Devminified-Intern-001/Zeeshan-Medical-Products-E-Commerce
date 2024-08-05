/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '../../../Component/Button';
import Upload from '../../../assets/Upload';
import Delete from '../../../assets/Delete';
// import Input from '../../../Component/Input';
interface IProfilePhotoProps {
  className?: string;
  image?: string| null;
  name?: string;
  description?: string;
  onUpdate?: () => void;
  onDelete?: () => void;
  handleimage?: any;
  imageref?: any;
}

const ProfilePhoto = (props: IProfilePhotoProps) => {
  const {
    className,
    image,
    name,
    description,
    onUpdate,
    onDelete,
    handleimage,
    imageref,
  } = props;
  return (
    <div className={className}>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <h3>{name}</h3>
      <p>{description}</p>
      Your Profile
      <div onClick={onUpdate}>
      <Button leftIcon={<Upload/>}>
        Update
      </Button>
        <input
          ref={imageref}
          type="file"
          accept="image/*"
          onChange={handleimage}
          style={{ display: 'none' }}
        />
      </div>
      <Button onClick={onDelete} leftIcon={<Delete />}>
        Delete
      </Button>
    </div>
  );
};

export default ProfilePhoto;
