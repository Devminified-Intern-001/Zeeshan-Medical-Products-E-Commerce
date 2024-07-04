import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/Login.png';
import '../../MyCSS.css';
const Login = () => {
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
          onSubmit={()=>{}}
          onGoogleClick={()=>{}}
        >
          <Input
            name="username"
            label="Username"
            //    value={formdata.username} onChange={(e)=>{handlechange(e)}}
            placeholder="Enter Username"
            type="text"
            className="input"
          />
          <Input
            name="password"
            label="Password"
            //   value={formdata.password} onChange={(e)=>{handlechange(e)}}
            placeholder="Enter Password"
            type="password"
            className="input"
          />
        </AuthForm>
        <a href="">Terms and Conditions</a>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};

export default Login;
