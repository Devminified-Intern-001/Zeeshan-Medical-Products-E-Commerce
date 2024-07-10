import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import ProfileNav from '../../Module/Profile/ProfileNav';
import SideBar from '../../Module/Profile/SideBar';
import '../../MyCSS.css';
import ProfilePhoto from '../../Module/Profile/ProfilePhoto';
import ProfileImage from '../../assets/reviewImage.png';
import Detail from '../../Module/Profile/Details';
import Footer from '../../Component/Footer';
const Profile = () => {
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
      className='ProfileNav'
        heading="Profile"
        parentRoutes="Home"
        currentRoute="- Profile"
        onCancel={() => {}}
        onSave={() => {}}
      />
      <div className="ProfileSideBarAndProfilePhotoAndDetail ">
        <SideBar className="ProfileSideBar" name="jhon" />
        <div className="ProfilePhotoAndDetail">
          <ProfilePhoto
            image={ProfileImage}
            name="Profile"
            description="Update your photo and personal details"
          />
          <Detail onDelete={() => {}} onUpdate={() => {}} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
