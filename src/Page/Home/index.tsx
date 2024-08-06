/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import Hero from '../../Module/Home/Hero';
import Search from '../../assets/Search';
import '../../MyCSS.css';
import VegetableIcon from '../../assets/fruits-and-vegetables.png';
import FruitIcon from '../../assets/fruit.png';
import MeatIcon from '../../assets/beef.png';
import SeaFood from '../../assets/crab.png';
import SnacksIcon from '../../assets/nachos.png';
import BeverageIcon from '../../assets/bread.png';
import FrozenIcon from '../../assets/frozen.png';
import HouseholdIcon from '../../assets/home.png';
import Pizza from '../../assets/Pizza.png';
import Egg from '../../assets/Egg.png';
import Chicken from '../../assets/chicken.png';
// import SmartChoice from '../../Module/Home/SmartChoice';
// import peanutJar from '../../assets/peanutJar.png';
// import bread from '../../assets/bread.png';
// import popconPack from '../../assets/popconPack.png';
// import cucumberJar from '../../assets/cucumberJar.png';
import FeaturedData from '../../Module/Home/FeaturedData';
import RightArrow from '../../assets/rightArrow';
import Discount from '../../Module/Home/Discount';
import Swipe from '../../Component/Slider';
import Sponsers from '../../Module/Home/Sponsers';
import Cococola from '../../assets/Cocacola.png';
import PizzaHurt from '../../assets/PizzaHurt.png';
import Chili from '../../assets/chiliBeans.png';
import Nestle from '../../assets/nestle.png';
import Carret from '../../assets/carret.png';
import Cabbage from '../../assets/cabbage.png';
import Tomato from '../../assets/tomato.png';
import Broccoli from '../../assets/broccoli.png';
import Footer from '../../Component/Footer';
import Heading from '../../Component/Heading';
import { allProducts } from '../../api/auth/index';
import { useEffect, useState } from 'react';
const Home = () => {
  // const [products, setProducts] = useState({
  //   searchText: '',
  //   onSales: false,
  //   type: '',
  //   newArrivals: false,
  //   minPrice: null,
  //   maxPrice: null,
  //   dietNeeds: [],
  //   allergenFilters: [],
  // });
  const [featurdData, setFeaturedData] = useState([]);
  const getAllproducts = async () => {
    const passObject = {
      searchText: '',
      onSales: true,
      type: '',
      newArrivals: false,
      minPrice: 0,
      maxPrice: 150,
      dietNeeds: [],
      allergenFilters: [],
    };
    const testObj = { ...passObject } as Record<string, any>;
    const newobj = {} as Record<string, any>;
    for (const element in testObj as string[]) {
      console.log(testObj[element], newobj[element]);

      newobj[element] =
        testObj[element]?.length == 0 ? undefined : testObj[element];
    }
    console.log('newobj', newobj);
    const responseAllProducts = await allProducts(newobj);
    console.log('responseAllProducts', responseAllProducts);
    console.log('responseAllProducts', responseAllProducts.message);
    if (responseAllProducts.done === true) {
      setFeaturedData(responseAllProducts.message);
    }
  };
  useEffect(() => {
    getAllproducts();
  }, []);
  // console.log('featurdData', featurdData);

  const HeroSlider = [
    {
      image: FruitIcon,
      label: 'Fruits',
    },
    {
      image: VegetableIcon,
      label: 'Vegetables',
    },
    {
      image: MeatIcon,
      label: 'Meat',
    },
    {
      image: SeaFood,
      label: 'Seafood',
    },
    {
      image: SnacksIcon,
      label: 'Snacks',
    },
    {
      image: BeverageIcon,
      label: 'Beverages',
    },
    {
      image: FrozenIcon,
      label: 'Bread & Tortilla',
    },
    {
      image: HouseholdIcon,
      label: 'Household',
    },
  ];
  const smartChoices = [
    {
      image: Pizza,
      label: 'Italian pizza',
      description: 'product description is here',
    },
    {
      image: Egg,
      label: 'Perfect Egg Dish',
      description: 'product description is here',
    },
    {
      image: Chicken,
      label: 'Masala Chicken Curry',
      description: 'product description is here',
    },
    {
      image: Pizza,
      label: 'Italian pizza',
      description: 'product description is here',
    },
    {
      image: Egg,
      label: 'Perfect Egg Dish',
      description: 'product description is here',
    },
    {
      image: Chicken,
      label: 'Masala Chicken Curry',
      description: 'product description is here',
    },
  ];
  // const featurdData = [
  //   {
  //     name: 'Product Name',
  //     image: peanutJar,
  //     price: 50,
  //     quantity: 1,
  //   },
  //   {
  //     name: 'Product Name',
  //     image: bread,
  //     price: 50,
  //     quantity: 1,
  //   },
  //   {
  //     name: 'Product Name',
  //     image: popconPack,
  //     price: 50,
  //     quantity: 1,
  //   },
  //   {
  //     name: 'Product Name',
  //     image: cucumberJar,
  //     price: 50,
  //     quantity: 1,
  //   },
  // ];
  const hygenicFoodArray = [
    {
      name: 'Product Name',
      image: Carret,
      price: 50,
      quantity: 1,
    },
    {
      name: 'Product Name',
      image: Cabbage,
      price: 50,
      quantity: 1,
    },
    {
      name: 'Product Name',
      image: Tomato,
      price: 50,
      quantity: 1,
    },
    {
      name: 'Product Name',
      image: Broccoli,
      price: 50,
      quantity: 1,
    },
  ];

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
        inputPlaceholder="What are you looking for..."
        buttonIcon={<Search />}
        className="HomeHero"
      />
      <Swipe slides={HeroSlider} slidesPerView={6} />
      <Heading headingName="Smart Choices" />
      {/* <div className="smartChoice">
        {smartChoices?.map((iteam) => {
          return (
            <SmartChoice
              className="SmartChoiceIteam"
              imageSrc={iteam.image}
              label={iteam.label}
              description={iteam.description}
            />
          );
        })}
      </div> */}
      <div className="smartChoice">
        <Swipe
          slides={smartChoices}
          slidesPerView={3}
          className="SmartChoiceIteam"
        />
      </div>
      <Heading headingName="Featured" text="see more" icon={<RightArrow />} />
      <div className="Featured">
        {featurdData?.map((iteam: any, index) => {
          // const {name,price,image,quantity}=iteam
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
              />
            </div>
          );
        })}
      </div>
      <Heading
        headingName="Hygenic Food"
        text="see more"
        icon={<RightArrow />}
      />
      <div className="Hygenic">
        {hygenicFoodArray?.map((iteam) => {
          // const {name,price,image,quantity}=iteam
          return (
            <div>
              <FeaturedData
                className="FeaturedData"
                productName={iteam.name}
                image={iteam.image}
              />
            </div>
          );
        })}
      </div>
      <Discount
        className="dicount"
        heading="For the selected products Get Discount up to"
        highlight="50% Off"
        buttonlabel="See more"
        buttonIcon={<RightArrow />}
      />
      <Heading
        headingName="Hygenic Food"
        text="see more"
        icon={<RightArrow />}
      />
      <div className="Featured">
        {hygenicFoodArray?.map((iteam) => {
          // const {name,price,image,quantity}=iteam
          return (
            <div>
              <FeaturedData
                className="FeaturedData"
                productName={iteam.name}
                image={iteam.image}
              />
            </div>
          );
        })}
      </div>

      <Sponsers
        imageCoke={Cococola}
        imageChili={Chili}
        imageNestle={Nestle}
        imagePizza={PizzaHurt}
        className="sponser"
      />
      <Footer />
    </div>
  );
};

export default Home;
