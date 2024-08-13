/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import ProfileNav from '../../Module/Profile/ProfileNav';
import SideBar from '../../Module/Profile/SideBar';
import '../../MyCSS.css';
import ProfilePhoto from '../../Module/Profile/ProfilePhoto';
// import ProfileImage from '../../assets/reviewImage.png';
import Detail from '../../Module/Profile/Details';
import Footer from '../../Component/Footer';
import { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import { Cookies } from 'react-cookie';
import { userProfileGetDetails,userProfilePostDetails,userProfilemage } from '../../api/auth/index';
import moment from 'moment';
const Profile = () => {
  const [profileData, setProfileData] = useState({
    // userName: '',
    // email: '',
    gender: '',
    dateOfBirth: null,
    nic: '',
    mobile: '',
   
    // password: '',
  });
  const [profileDataGetter, setProfileDataGetter] = useState({
    userName: '',
    email: '',
    gender: '',
    dateOfBirth: moment().toDate(),
    nic: '',
    mobile: '',
   
    // password: '',
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDateChange = (date: Date) => {
    setProfileData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
    }));
  };
  const [updateImage, setUpadteImage] = useState('');
  const imageref = useRef(null);
  const handleimage = (e: any) => {
    setUpadteImage(e.target.files[0]);
  };
  const handleimageclick = () => {
    imageref.current.click();
  };
  const getProfile = async () => {
    try {
      const response = await userProfileGetDetails();
      // const response = await axios.get(`${BaseUrl}/User`, {
      //   headers: {
      //     Authorization: `Bearer ${cookies.get('accessToken')}`,
      //   },
      // });
      // console.log(response);
      if(response.done===true){
        
        const {userName,email,gender,mobile,nic,dateOfBirth}=response.message
        setProfileDataGetter({
          userName: userName,
          email: email,
          gender: gender,
          dateOfBirth: dateOfBirth,
          nic: nic,
          mobile: mobile,
          // password: '',
        })
      }
    } catch (error) {
      console.log('catch error:', error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  const handleSave=async()=>{
    const testObj = {...profileData}as Record<string, any>
    const newobj={} as Record<string, any>
  for (const element of Object.keys(testObj) as string[]) {
    newobj[element] = testObj[element] || undefined
  }
    const responseImage=userProfilemage(updateImage)
    const response =await userProfilePostDetails(newobj)
    console.log("responseImage::",responseImage)
    console.log("response",response);
    if(response.done===true){
    getProfile();
    }
    
  }
  return (
    <div>
      <Navbar
        logo={Logo}
        className=""
        login={true}
        onProfile_SignIn={() => {}}
        onBuy_SignUp={() => {}}
      />
      <ProfileNav
        className="ProfileNav"
        heading="Profile"
        parentRoutes="Home"
        currentRoute="- Profile"
        onCancel={() => {}}
        onSave={handleSave}
      />
      <div className="ProfileSideBarAndProfilePhotoAndDetail ">
        <SideBar className="ProfileSideBar" name="jhon" />
        <div className="ProfilePhotoAndDetail">
          <ProfilePhoto
            image={updateImage}
            name="Profile"
            description="Update your photo and personal details"
            onDelete={() => {}}
            onUpdate={handleimageclick}
            handleimage={handleimage}
            imageref={imageref}
          />
          <Detail
            userName={profileDataGetter.userName}
            mobile={profileData.mobile || profileDataGetter.mobile}
            email={profileDataGetter.email}
            dateOfBirth={profileData.dateOfBirth || profileDataGetter.dateOfBirth}
            handleDateChange={handleDateChange}
            nic={profileData.nic || profileDataGetter.nic}
            gender={profileData.gender || profileDataGetter.gender }
            handleChange={handleChange}
            // password={profileData.password}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
