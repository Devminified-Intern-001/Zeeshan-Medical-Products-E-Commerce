import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import AboutUs from '../../Module/About/Aboutus';
import AboutUsImage from '../../assets/Aboutus.png';
import Tiles from '../../Module/Landing/Tiles';
import Services from '../../Module/Landing/Services';
import Content from '../../Module/Landing/Content';
import AboutContent from '../../assets/aboutContent.png';
import AboutAnotherContent from '../../assets/anotherAboutContent.png';
import AboutPrecedure from '../../assets/aboutPrecedure.png';
import PrecedureLi from '../../Module/About/PrecedureLIs';
import Tick from '../../assets/Tick';
import Footer from '../../Component/Footer';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const TilesArrayNumber = [
    {
      number_text: '850',
      heading: 'Professionals Team',
      description: 'Highly Verified',
    },
    {
      number_text: '1500+',
      heading: 'Happy Customers',
      description: 'Got their treatments',
    },
    {
      number_text: '95.8%',
      heading: 'Positive Feedback',
      description: 'From our customers',
    },
  ];
  return (
    <div>
      <Navbar
        logo={Logo}
        className=""
        login={true}
        onProfile_SignIn={() => navigate('/Login')}
        onBuy_SignUp={() => {}}
      />
      <AboutUs
        heading="About us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        onContactUs={() => {}}
      />
      <img src={AboutUsImage} alt="AboutUsImage" />
      <div className="TilesArrayNumberMainDiv">
        {TilesArrayNumber?.map((iteam,index) => {
          return (
            <div key={index}>
              <Tiles
                number_text={iteam.number_text}
                heading={iteam.heading}
                description={iteam.description}
                className="TilesArrayNumber"
              />
            </div>
          );
        })}
      </div>
      <Services
        text="Goals"
        heading="Customer trust is our goal"
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
      />
      <Content
        heading="Our Vision"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={AboutContent}
        className="landing_Other_reverse"
      />
      <Content
        heading="Our Mission"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={AboutAnotherContent}
        className="landing_Other"
      />
      <Content
        heading="Our procedure"
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
        img={AboutPrecedure}
        className="landing_Other"
      >
        <PrecedureLi
          label="Account Setting"
          text="Setup Your Account Details"
          iconNumber={<Tick />}
        />
        <PrecedureLi
          label="Browse Products"
          text="Choose Your Favourite Items"
          iconNumber={<Tick />}
        />
        <PrecedureLi
          label="Add Products to cart"
          text="Add Your Items to Cart"
          iconNumber={3}
        />
        <PrecedureLi
          label="Make Payment"
          text="Use Debit or Credit Card"
          iconNumber={4}
        />
        <PrecedureLi
          label="Get Delivered"
          text="Deliver within 24hrs"
          iconNumber={5}
        />
      </Content>
      <Footer />
    </div>
  );
};

export default About;
