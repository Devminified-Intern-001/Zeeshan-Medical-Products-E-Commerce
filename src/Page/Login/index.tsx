/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/Login.png';
import '../../MyCSS.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {login } from '../../api/auth/index'

const Login = () => {

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    userName: '',
    password: '',
  });

  const handlechange = (event: any) => {
    const { name, value } = event.target;
    setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
   
      if (!loginInfo.userName || !loginInfo.password) {
        alert('Please fill the credentials');
        return null;
      }
      event.preventDefault();
      // const response = await axios.post(`${BaseUrl}/logIn`, loginInfo);
      const response = await  login (loginInfo);
      console.log('respose : ', response); 
      console.log(' response.access : ', response.access); 
      // navigate('/Home');
      if (response.done === true) {
        console.log(1);
          navigate('/Home');
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
          onSubmit={(event: any) => handleSubmit(event)}
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
