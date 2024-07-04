import Button from '../Button';
import Profile from '../../assets/ProfileIcon';
import Buy from '../../assets/BuyIcon';
interface INavbar {
  className?: string;
  logo: string;
  onProfile_SignIn: () => void;
  onBuy_SignUp: () => void;
  login: boolean;
}
const Navbar = (props: INavbar) => {
  const { className, logo, login, onProfile_SignIn, onBuy_SignUp } = props;
  return (
    <div className={className}>
      <img src={logo} alt="logo" />
      {login ? (
        <>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          {<Profile />}
          {<Buy />}
        </>
      ) : (
        <>
          <Button onClick={onProfile_SignIn}>Sign in</Button>
          <Button onClick={onBuy_SignUp}>Sign up</Button>
        </>
      )}
    </div>
  );
};

export default Navbar;
