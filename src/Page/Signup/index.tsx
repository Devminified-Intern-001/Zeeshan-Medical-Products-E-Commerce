import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/signup.png';
import '../../MyCSS.css';
import { useState } from 'react';
import Button from '../../Component/Button';
import RcModal from '../../Component/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const BaseUrl = 'https://medical-e-commerce-backend.vercel.app';
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    userName: '',
    email:'',
    password: '',
    terms:false
  });
   const [modalData,setmodalData]=useState({
    email:'',
    
   })
  const handlechange = (event: any) => {
    const { name, value } = event.target;
    setSignupInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleSubmit = async (event: any) => {
    try {
      if (!signupInfo.userName || !signupInfo.email || !signupInfo.password) {
        alert('Please fill the credentials');
        return null;
      }
      if(!signupInfo.terms){
        alert("Please checked our term and policy")
        return null
      }
      event.preventDefault();
      const response = await axios.post(`${BaseUrl}/signUp`, signupInfo);
      console.log('respose : ', response);

      
    } catch (error) {
      console.log(error);
      alert(error.response.data.reason);
    }
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [condition, setCondition] = useState(false);
  const handleclick = () => {
    setCondition(prev=>!prev);
  };
  function openModal() {
    setIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowY = 'scroll';
  }
  return (
    <div className="Signup">
      <img
        src={Image}
        style={{ width: '583px', height: '989px' }}
        alt="./Signup.png"
      />
      <div>
        <AuthForm
          heading="SignUp to get started."
          label="Already a user? "
          labelWithAnchor="lets Sign-in"
          submitButtonLabel="Sign up"
          googleButtonLabel="Sign up with google"
          onSubmit={openModal}
          onGoogleClick={() => {}}
          closeModal={closeModal}
          value={modalIsOpen}
        >
          <Input
            label="Username"
            className="input"
            placeholder="Enter Username"
            type="text"
            name="userName"
            value={signupInfo.userName}
            onChange={handlechange}
          />
          <Input
            label="Email"
            className="input"
            placeholder="Enter a vaild Email"
            type="email"
            name="email"
            value={signupInfo.email}
            onChange={handlechange}
          />
          <Input
            label="Password"
            className=""
            placeholder="Enter Password"
            type="password"
            name="password"
            value={signupInfo.password}
            onChange={handlechange}
          />
          <Input
            rightIcon="Creating an account meana you're okay with our term and services,pravicy policy and our default notification settings"
            type="checkbox"
            className=""
            name="terms"
            checked={signupInfo.terms} 
            onChange={handlechange}
          />
        </AuthForm>
        
         <RcModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              description={condition ? "" :"Your answers to  the following questions are treated as personal information according to our Privacy Policy. To protect your privacy the information used to generate these insights is de-identified, aggregated, and analysed on a no-name-basic."}
              title={condition ? "Thanks! Your answers also became a report that can help others like you" : "Chronic Kindey Disease" }
            >
              {
                condition ? (
                <>
                James Jones
                45 year old man
                <Button className="" onClick={handleclick}>
                Next
              </Button>
                </>) :(
                  <>
                  <Input name="email" label="1.Your email" type="email" />
              <Input name="age" label="3.How old are you?" type="number" />
              <Input
                name="gender"
                rightLabel="male"
                type="radio"
                label="4.whats you sex at birth?"
              />
              <Input name="gender" rightLabel="female" type="radio" />
              <Input name="gender" rightLabel="others" type="radio" />
              <Input
                name="identity"
                rightLabel="yes"
                type="radio"
                label="5.would you like to add gender identity?"
              />
              <Input name="identity" rightLabel="no" type="radio" />
              <Input name="country" label="6.where do you live?" type="text" />
              <Input
                name="diagnosed"
                rightLabel="yes"
                type="radio"
                label="7.would you like to diagnosed by doctor?"
              />
              <Input name="diagnosed" rightLabel="no" type="radio" />
              <Input
                label="8. If any, what tests / indicators are you following on an ongoing basic?"
                placeholder="Yeah I have some..."
              />
              <Input
                label="9. If you have been diagnosed with a specific subtype or category of chronic kidney 
    disease, Please specify which one?"
                placeholder="Yeah I have some..."
              />
              <Input
                label="10. How much time has passed since your chronic kidney disease symptoms 
      started?"
              />
              <Button className="" onClick={handleclick}>
                Submit
              </Button>
                </>)
              }
             
            </RcModal>

        <a href="">Terms and Conditions</a>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};

export default Signup;
