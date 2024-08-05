import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import Hero from '../../Module/Landing/Hero';
import '../../MyCSS.css';
import ContentImage from '../../assets/Content.png';
import Content from '../../Module/Landing/Content';
import ContentOther from '../../assets/ContentOther.png';
import Services from '../../Module/Landing/Services';
import Tiles from '../../Module/Landing/Tiles';
import FormTiles from '../../assets/FormTiles';
import ProductTitle from '../../assets/ProductTitle';
import Buy from '../../assets/BuyIcon';
import Location from '../../assets/Location';
import Arrow from '../../assets/Arrow';
import NewLetter from '../../Module/Landing/News Letter';
import Footer from '../../Component/Footer';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  const TilesArray = [
    {
      icon: <FormTiles />,
      heading: 'Fill the form at the begining.',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      icon: <ProductTitle />,
      heading: 'Select the products you want.',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      icon: <Buy />,
      heading: 'Add products to the cart.',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      icon: <Location />,
      heading: 'Get delivered to your door step.',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ];
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
        login={false}
        onProfile_SignIn={() => navigate('/Login')}
        onBuy_SignUp={() => navigate('/Signup')}
      />
      <Hero
        heading="We Always Provide Best Products"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        buttonLabel="Get Started"
        className="hero"
        onGetStarted={() => {}}
      />
      <Services
        text="Services"
        heading="Easy steps to get your product"
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
      />
      <div className="TilesMainDiv">
        {TilesArray?.map((iteam) => {
          return (
            <div>
              <Tiles
                icon={iteam.icon}
                heading={iteam.heading}
                description={iteam.description}
                className="Tiles"
              />
            </div>
          );
        })}
      </div>

      <Content
        text="Products"
        heading="We are offering specialist certified products."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        buttonLabel="See Products"
        img={ContentImage}
        className="landing_Other"
        onGetStarted={() => {}}
        buttonIcon={<Arrow />}
      >
        <ul>
          <li>You can find the product easily.</li>
          <li>Latest and healthy products.</li>
        </ul>
      </Content>
      <Content
        text="Feedbacks"
        heading="Read the best reviews from our users"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        buttonLabel="See more"
        img={ContentOther}
        className="landing_Other_reverse"
        onGetStarted={() => {}}
        buttonIcon={<Arrow />}
      ></Content>

      <Services
        text="Services"
        heading="Our long journey"
        description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
      />
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
      <NewLetter
        className="NewLetter"
        heading="Sign Up For Our News Letter"
        inputPlaceholder="✉ Put Your email address here..."
        buttonLabel="Send"
      />
      <Footer />
    </div>
  );
};

export default Landing;
