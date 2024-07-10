import Button from '../../../Component/Button';

interface IProfileNavProps {
  className?: string;
  heading?: string;
  parentRoutes?: string;
  currentRoute?: string;
  onCancel?: () => void;
  onSave?: () => void;
}

const ProfileNav = (props: IProfileNavProps) => {
  const {
    className,
    heading,
    parentRoutes,
    currentRoute,
    onCancel,
    onSave,
  } = props;
  return (
    <div className={className}>
      <div>
        <h2>{heading}</h2>
        {parentRoutes}-{currentRoute}
      </div>
      <div>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
};

export default ProfileNav;
