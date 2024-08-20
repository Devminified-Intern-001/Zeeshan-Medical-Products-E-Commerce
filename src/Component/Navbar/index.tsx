/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '../Button';
import Profile from '../../assets/ProfileIcon';
import Buy from '../../assets/BuyIcon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartTotal } from '../../redux-slices/card.slice' 
interface INavbar {
  className?: string;
  logo: string;
  onProfile_SignIn: () => void;
  onBuy_SignUp: () => void;
  login: boolean;
}
const Navbar = (props: INavbar) => {
  const { className, logo, login, onProfile_SignIn, onBuy_SignUp } = props;
  const dispatch = useDispatch();
  const { totalQuantity, getQuantity } = useSelector(
    (state: any) => state.cart
  );
  console.log('totalQuantity', totalQuantity);
  console.log('getQuantity', getQuantity);
  useEffect(() => {dispatch(getCartTotal())}, [getQuantity]);
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
            <li>
              <Link to={'/checkout'}>checkout</Link>{' '}
            </li>
            <li>
              <Link to={'/profile'}>Profile</Link>
            </li>
          </ul>
          {<Profile />}
          {<Buy />}
          {totalQuantity}
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
