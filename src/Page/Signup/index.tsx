/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthForm from '../../Module/AuthForm';
import Input from '../../Component/Input';
import Image from '../../assets/signup.png';
import '../../MyCSS.css';
import { useState } from 'react';
import Button from '../../Component/Button';
import RcModal from '../../Component/Modal';
import { useNavigate } from 'react-router-dom';
import {signup } from '../../api/auth/index'
import axios from 'axios';

const Signup = () => {
const BaseUrl= 'https://medical-e-commerce-backend.vercel.app'
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    userName: '',
    email: '',
    password: '',
    terms: false,
  });
  const [modalData, setmodalData] = useState({
    email: '',
    age: '',
    referrer: '',
    gender: '',
    showGender: '',
    location: '',
    diagnosis: '',
    indicators: '',
    subType: '',
    startTime: '',
  });
  const handlechange = (event: any) => {
    const { name, value } = event.target;
    setSignupInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleChangeModal = (event: any) => {
    const { name, value } = event.target;
    setmodalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (event: any) => {
   
      if (!signupInfo.userName || !signupInfo.email || !signupInfo.password) {
        alert('Please fill the credentials');
        return null;
      } else if (!signupInfo.terms) {
        alert('Please checked our term and policy');
        return null;
      }
      event.preventDefault();

      // const response = await axios.post(`${BaseUrl}/signUp`, signupInfo);
      const response = await  signup(signupInfo);
      if(response.done===true) {
        console.log(1);
        openModal()
      }    
   
  };
  const handleNext = async () => {
    document.body.style.overflowY = 'scroll';
    navigate('/Login');
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [condition, setCondition] = useState(false);
  const handleclick = async (event: any) => {
    event.preventDefault();
    const response = await axios.post(`${BaseUrl}/form/submitForm`, modalData);
    console.log(response);
    setCondition((prev) => !prev);
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
          onSubmit={handleSubmit}
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
          description={
            condition
              ? ''
              : 'Your answers to  the following questions are treated as personal information according to our Privacy Policy. To protect your privacy the information used to generate these insights is de-identified, aggregated, and analysed on a no-name-basic.'
          }
          title={
            condition
              ? 'Thanks! Your answers also became a report that can help others like you'
              : 'Chronic Kindey Disease'
          }
        >
          {condition ? (
            <>
              {signupInfo.userName}
              {modalData.age} year old {modalData.gender}
              Diagnosed with:
              {modalData.diagnosis ? 'Chronic kidney disease.' : ''}
              First started 2 years ago (at age 43)
              <b>More about my condition</b>
              <p>
                My Symptoms (all, including before an effective treatment):James
              </p>
              <p>Treatments I’ve tried to date:6-15-2022</p>
              <p>
                More about me:Lorem Ipsum is simply dummy text of the printing.
              </p>
              <Button className="" onClick={handleNext}>
                Next
              </Button>
            </>
          ) : (
            <>
              <Input
                label="1.Your email"
                type="email"
                name="email"
                value={modalData.email}
                onChange={handleChangeModal}
              />
              <Input
                label="2. What brings you here?"
                placeholder="I have / had this condition"
                type="text"
                name="referrer"
                value={modalData.referrer}
                onChange={handleChangeModal}
              />
              {/* <DropDown
                option={optionArray}
                defaultValue="I have / had this condition"
                label="2. What brings you here?"
                value={modalData.referrer}
                onChange={(value) => handleSelectChange(value, 'referrer')}
              /> */}
              <Input
                name="age"
                label="3.How old are you?"
                type="number"
                value={modalData.age}
                onChange={handleChangeModal}
              />

              <Input
                label="4.What's your sex at birth?"
                rightLabel="male"
                type="radio"
                name="gender"
                checked={modalData.gender === 'Male'}
                onChange={handleChangeModal}
                value="Male"
              />
              <Input
                name="gender"
                rightLabel="female"
                type="radio"
                checked={modalData.gender === 'Female'}
                onChange={handleChangeModal}
                value="Female"
              />
              <Input
                name="gender"
                rightLabel="others"
                type="radio"
                checked={modalData.gender === 'Other'}
                onChange={handleChangeModal}
                value="Other"
              />
              <Input
                label="5.would you like to add gender identity?"
                name="showGender"
                rightLabel="yes"
                type="radio"
                checked={modalData.showGender === 'true'}
                onChange={handleChangeModal}
                value="true"
              />
              <Input
                name="identity"
                rightLabel="no"
                type="radio"
                checked={modalData.showGender === 'false'}
                onChange={handleChangeModal}
                value="false"
              />
              <Input
                name="location"
                label="6.where do you live?"
                type="text"
                value={modalData.location}
                onChange={handleChangeModal}
              />
              <Input
                name="diagnosis"
                rightLabel="yes"
                type="radio"
                label="7.would you like to diagnosed by doctor?"
                checked={modalData.diagnosis === 'true'}
                onChange={handleChangeModal}
                value="true"
              />
              <Input
                name="diagnosis"
                rightLabel="no"
                type="radio"
                checked={modalData.diagnosis === 'false'}
                onChange={handleChangeModal}
                value="false"
              />
              <Input
                label="8. If any, what tests / indicators are you following on an ongoing basic?"
                placeholder="Yeah I have some..."
                name="indicators"
                value={modalData.indicators}
                onChange={handleChangeModal}
              />
              <Input
                label="9. If you have been diagnosed with a specific subtype or category of chronic kidney 
    disease, Please specify which one?"
                placeholder="Yeah I have some..."
                name="subType"
                value={modalData.subType}
                onChange={handleChangeModal}
              />
              <Input
                label="10. How much time has passed since your chronic kidney disease symptoms 
      started?"
                name="startTime"
                value={modalData.startTime}
                onChange={handleChangeModal}
              />
              <Button className="" 
              onClick={handleclick}
              >
                Submit
              </Button>
            </>
          )}
        </RcModal>

        <a href="">Terms and Conditions</a>
        <a href="">Contact us</a>
      </div>
    </div>
  );
};

export default Signup;
