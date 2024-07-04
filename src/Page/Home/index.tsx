import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import Hero from '../../Module/Home/Hero';
import Search from '../../assets/Search';
import '../../MyCSS.css'
const Home = () => {
  return (
    <div>
      <Navbar
        logo={Logo}
        className=""
        login={true}
        onProfile_SignIn={() => {}}
        onBuy_SignUp={() => {}}
      />
      <Hero
        heading="We Always Provide Healthy Products"
        inputPlaceholder='What are you looking for...'
        buttonIcon={<Search/>}
        className='HomeHero'
      />
    </div>
  );
};

export default Home;
