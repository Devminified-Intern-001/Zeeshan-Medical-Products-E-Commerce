/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/Login.png';
import '../../MyCSS.css';
import { useState } from 'react';
// import { useGlobalState } from '../../hooks/useGlobalState';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth/index';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux-slices/global.slice';

const Login = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  // const { userdetails, accessToken, refreshToken } = useGlobalState();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event?.preventDefault();

    if (!loginInfo.userName || !loginInfo.password) {
      alert('Please fill the credentials');
      return;
    }

    try {
      const response = await login(loginInfo);
      console.log('response', response.userData);
      if (response.done) {
        const newData = {
          userData: response.userData,
          accessToken: response.access,
          refreshToken: response.refresh,
        };

        dispatch(setCredentials(newData));

        cookies.set('accessToken', response.access);
        cookies.set('refreshToken', response.refresh);

        navigate('/Home');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="Login">
      <img
        src={Image}
        style={{ width: '583px', height: '989px' }}
        alt="./Login.png"
      />
      <div>
        <AuthForm
          heading="Welcome to Start."
          label="New Here?"
          labelWithAnchor="Create an Account"
          submitButtonLabel="Sign in"
          googleButtonLabel="Sign in with google"
          onSubmit={handleSubmit}
          onGoogleClick={() => {}}
        >
          <Input
            label="Username"
            className="input"
            placeholder="Enter Username"
            type="text"
            name="userName"
            value={loginInfo.userName}
            onChange={handleChange}
          />
          <Input
            label="Password"
            className="input"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
        </AuthForm>
        <a href="">Terms and Conditions</a>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};

export default Login;
