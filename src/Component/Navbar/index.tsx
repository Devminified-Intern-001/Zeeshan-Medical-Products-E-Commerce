import Button from '../Button';
import Profile from '../../assets/ProfileIcon';
import Buy from '../../assets/BuyIcon';
import { Link } from 'react-router-dom';
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
            <li>
              <Link to={'/Home'}>Home</Link>
            </li>
            <li>
              <Link to={'/Product'}>Products</Link>
            </li>
            <li><Link to={'/About'} >About us</Link> </li>
            <li><Link to={'/profile'} >Contact us</Link></li>
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
