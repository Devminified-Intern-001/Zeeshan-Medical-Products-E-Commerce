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
import FeaturedData from '../../Module/Home/FeaturedData';
import RightArrow from '../../assets/rightArrow';
import Discount from '../../Module/Home/Discount';
import Swipe from '../../Component/Slider';
import Sponsers from '../../Module/Home/Sponsers';
import Cococola from '../../assets/Cocacola.png';
import PizzaHurt from '../../assets/PizzaHurt.png';
import Chili from '../../assets/chiliBeans.png';
import Nestle from '../../assets/nestle.png';
import Footer from '../../Component/Footer';
import Heading from '../../Component/Heading';
import { allProducts } from '../../api/auth/index';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../redux-slices/search.slice';
// import { useSelector } from 'react-redux';
import {addToCart} from '../../redux-slices/card.slice'
const Home = () => {
  const navigate = useNavigate();
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
//   const searchValue = useSelector((state: any) => state.cart.cart);
// console.log("searchValue carrt",searchValue);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    searchText: '',
    onSales: true,
    type: '',
    newArrivals: false,
    minPrice: 0,
    maxPrice: 150,
    dietNeeds: [],
    allergenFilters: [],
  });
  const handleSearch = (event: any) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      searchText: event.target.value,
    }));
  };
  const searchFc = () => {
    dispatch(setSearchText(filter));
    const testObj = { ...filter } as Record<string, any>;
    const newobj = {} as Record<string, any>;
    for (const element in testObj as string[]) {
      newobj[element] =
        testObj[element]?.length == 0 ? undefined : testObj[element];
    }
    if (newobj.searchText) {
      navigate('/Product');
    }
  };
  const [featurdData, setFeaturedData] = useState<allProductResponse>({
    done: false,
    message: [],
  });
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
      newobj[element] =
        testObj[element]?.length == 0 ? undefined : testObj[element];
    }
    const responseAllProducts = await allProducts(newobj);
    if (responseAllProducts.done === true) {
      setFeaturedData(responseAllProducts);
    }
  };
  useEffect(() => {
    getAllproducts();
  }, []);
  console.log('featurdData', featurdData);

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
        onSearch={searchFc}
        value={filter.searchText}
        onChange={handleSearch}
      />
      <Swipe slides={HeroSlider} slidesPerView={6} condition={true} />
      <Heading headingName="Smart Choices" />
      <div className="smartChoice">
        <Swipe
          slides={smartChoices}
          slidesPerView={3}
          className="SmartChoiceIteam"
          condition={true}
          classNameSlides="relpostion"
        />
      </div>
      <Heading headingName="Featured" text="see more" icon={<RightArrow />} />
      <div className="Featured">
        {featurdData.message?.map((iteam: any, index) => {
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
                quantity={iteam.quantity}
                item={iteam}
                // addToCart={()=>dispatch(addToCart(iteam))}
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
        {featurdData.message?.map((iteam: any, index) => {
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
                quantity={iteam.quantity}
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
        {featurdData.message?.map((iteam: any, index) => {
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
                quantity={iteam.quantity}
                // addToCart={}
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
