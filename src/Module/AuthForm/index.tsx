import { ReactNode } from 'react';
import Button from '../../Component/Button';
import GoogleIcon from '../../assets/GoogleIcon';

interface IAuthForm {
  heading: string;
  label: string;
  labelWithAnchor: string;
  children: ReactNode;
  submitButtonLabel: string;
  googleButtonLabel: string;
  className?: string;
  onSubmit: any;
  onGoogleClick: () => void;
  closeModal?: () => void;
  value?: boolean;
}
const AuthForm = (props: IAuthForm) => {
  const {
    heading,
    label,
    labelWithAnchor,
    children,
    submitButtonLabel,
    googleButtonLabel,
    className,
    onSubmit,
    onGoogleClick,
  } = props;
 

  return (
    <>
      <div className={className}>
        <h3>{heading}</h3>
        <span>
          {label} <a href="">{labelWithAnchor}</a>{' '}
        </span>
        {children}
        <Button className="" onClick={onSubmit}>
          {submitButtonLabel}
        </Button>
        <Button className="" onClick={onGoogleClick} leftIcon={<GoogleIcon />}>
          {googleButtonLabel}
        </Button>
      </div>
    </>
  );
};

export default AuthForm;
