import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/Login.png';
import '../../MyCSS.css';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux-slices/global.slice';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const BaseUrl = 'https://medical-e-commerce-backend.vercel.app';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    userName: '',
    password: '',
  });
  const [responseData, setResponseData] = useState({
    userData: '',
    accessToken: '',
    refreshToken: '',
  });
  const handlechange = (event: any) => {
    const { name, value } = event.target;
    setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    try {
      if (!loginInfo.userName || !loginInfo.password) {
        alert('Please fill the credentials');
        return null;
      }
      event.preventDefault();
      const response = await axios.post(`${BaseUrl}/logIn`, loginInfo);
      console.log('respose : ', response);

      if (response.status === 200) {
        setResponseData({
          userData: response.data.userData,
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
        });
        dispatch(setCredentials(responseData));
        localStorage.setItem(
          'auth',
          JSON.stringify({
            access: responseData.accessToken,
            refresh: responseData.refreshToken,
          })
        );
        navigate('/Home');
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.reason);
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
          heading="Welocme to Start."
          label="New Here?"
          labelWithAnchor="Create an Account"
          submitButtonLabel="Sign in"
          googleButtonLabel="Sign in with google"
          onSubmit={(e) => handleSubmit(e)}
          onGoogleClick={() => {}}
        >
          <Input
            label="Username"
            className="input"
            placeholder="Enter Username"
            type="text"
            name="userName"
            value={loginInfo.userName}
            onChange={handlechange}
          />
          <Input
            label="password"
            className="input"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handlechange}
          />
        </AuthForm>
        <a href="">Terms and Conditions</a>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};

export default Login;
