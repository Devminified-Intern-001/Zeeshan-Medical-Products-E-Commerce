import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import Hero from '../../Module/Home/Hero';
import Search from '../../assets/Search';
import Swipe from '../../Component/Slider';
import FruitIcon from '../../assets/fruit.png';
import MeatIcon from '../../assets/beef.png';
import SeaFood from '../../assets/crab.png';
import SnacksIcon from '../../assets/nachos.png';
import BeverageIcon from '../../assets/bread.png';
import FrozenIcon from '../../assets/frozen.png';
import HouseholdIcon from '../../assets/home.png';
import VegetableIcon from '../../assets/fruits-and-vegetables.png';
import Sidebar from '../../Component/Sidebar';
import Input from '../../Component/Input';
import PriceRangeSlider from '../../Component/RangeSlider';
import { useState } from 'react';
import RcAccordion from '../../Component/Accordion';
import Heading from '../../Component/Heading';
import Pagination from '../../Component/Pagination';
import peanutJar from '../../assets/peanutJar.png';
import bread from '../../assets/bread.png';
import popconPack from '../../assets/popconPack.png';
import cucumberJar from '../../assets/cucumberJar.png';
import Footer from '../../Component/Footer';
const Product = () => {
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
  const Vegatables = [
    {
      productName: 'Product Name',
      productImage: peanutJar,
    },
    {
      productName: 'Product Name',
      productImage: bread,
    },
    {
      productName: 'Product Name',
      productImage: popconPack,
    },
    {
      productName: 'Product Name',
      productImage: cucumberJar,
    },
    {
      productName: 'Product Name',
      productImage: peanutJar,
    },
    {
      productName: 'Product Name',
      productImage: bread,
    },
    {
      productName: 'Product Name',
      productImage: popconPack,
    },
    {
      productName: 'Product Name',
      productImage: cucumberJar,
    },
  ];
  const [value, setValue] = useState<number[]>();

  const handleChange = (newValue: number) => {
    setValue([newValue]);
  };

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
        heading="Deliver to your Door step!"
        inputPlaceholder="What are you looking for..."
        buttonIcon={<Search />}
        className="ProductHero"
      />
      <Swipe slides={HeroSlider} slidesPerView={6} />
      <Sidebar heading="Filter" buttonlabel="Clear All">
        <Input label="On Sales" type="checkbox" role="switch" checked={true} />
        <Input
          label="New Arrivals"
          type="checkbox"
          role="switch"
          checked={true}
        />
        <RcAccordion heading="Price Range">
          <PriceRangeSlider
            min={0}
            max={150}
            onValueChange={handleChange}
            value={value}
          />
        </RcAccordion>
        <RcAccordion heading="Dietary Needs">
          <Input rightLabel="Sugar Free" type="checkbox" />
          <Input rightLabel="Low Fat" type="checkbox" />
          <Input rightLabel="Fat-Free" type="checkbox" />
          <Input rightLabel="Vegan" type="checkbox" />
          <Input rightLabel="Saturated Fat-Free " type="checkbox" />
        </RcAccordion>
        <RcAccordion heading="Allergence Free">
          <Input rightLabel="Sugar Free" type="checkbox" />
          <Input rightLabel="Low Fat" type="checkbox" />
          <Input rightLabel="Fat-Free" type="checkbox" />
          <Input rightLabel="Vegan" type="checkbox" />
          <Input rightLabel="Saturated Fat-Free " type="checkbox" />
        </RcAccordion>
        <RcAccordion heading="Allergence Free">
          <Input rightLabel="Sugar Free" type="checkbox" />
          <Input rightLabel="Low Fat" type="checkbox" />
          <Input rightLabel="Fat-Free" type="checkbox" />
        </RcAccordion>
      </Sidebar>
      <Heading headingName="Vegetables" />
      <Pagination productArray={Vegatables} />
      <Footer />
    </div>
  );
};

export default Product;
