/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useEffect, useState } from 'react';
import RcAccordion from '../../Component/Accordion';
import Heading from '../../Component/Heading';
import Pagination from '../../Component/Pagination';
import Footer from '../../Component/Footer';
import { allProducts } from '../../api/auth';
import Toggle from 'react-styled-toggle';
import {applyFilters} from '../../api/auth'
const Product = () => {
  const dietNeedsArray = [
    'Sugar Free',
    'Low Fat',
    'Fat-Free',
    'Vegan',
    'Saturated Fat-Free',
  ];
  const alllergenceArray = [
    'Sugar Free',
    'Low Fat',
    'Fat-Free',
    'Vegan',
    'Saturated Fat-Free',
  ];
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
  const handleClear = () => {
    setFilter({
      searchText: '',
      onSales: true,
      type: '',
      newArrivals: false,
      minPrice: 0,
      maxPrice: 150,
      dietNeeds: [],
      allergenFilters: [],
    });
  };
  const [value, setValue] = useState();
  const handleChange = (newValue: any) => {
    const [minValue,maxValue]=newValue

    setValue(newValue);
  };
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
  const onChangeFilter = (event: any) => {
    const { name, checked } = event.target;
    console.log("checked",checked);
     setFilter((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
    responseFilters()
  };
  const onChangeCheckbox = (event: any) => {
    const { name, checked } = event.target;
    setFilter((prevData: any) => {
      const updatedDietNeeds = checked
        ? [...prevData.dietNeeds, name]
        : prevData.dietNeeds.filter((item: any) => item !== name);
      return {
        ...prevData,
        dietNeeds: updatedDietNeeds,
      };
    });
  };
  const onChangeCheckbox2 = (event: any) => {
    const { name, checked } = event.target;
    setFilter((prevData: any) => {
      const updatedAllergen = checked
        ? [...prevData.allergenFilters, name]
        : prevData.allergenFilters.filter((item: any) => item !== name);
      return {
        ...prevData,
        allergenFilters: updatedAllergen,
      };
    });
  };
  const [featurdData, setFeaturedData] = useState<any[]>([]);
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
  const responseFilters=async()=>{
  const filtersData= await applyFilters(filter)
  console.log("filtersData",filtersData);
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
      <Hero
        heading="Deliver to your Door step!"
        inputPlaceholder="What are you looking for..."
        buttonIcon={<Search />}
        className="ProductHero"
      />
      <Swipe slides={HeroSlider} slidesPerView={6} />
      <Sidebar heading="Filter" buttonlabel="Clear All" onClear={handleClear}>
        <Toggle
          labelLeft="On Sales"
          name="onSales"
          checked={filter.onSales}
          onChange={onChangeFilter}
        />
        <Toggle
          labelLeft="New Arrivals "
           name="newArrivals"
          checked={filter.newArrivals}
          onChange={onChangeFilter}
        />
        <RcAccordion heading="Price Range">
          <PriceRangeSlider
            min={filter.minPrice}
            max={filter.maxPrice}
            onValueChange={handleChange}
            value={value}
          />
        </RcAccordion>
        <RcAccordion heading="Dietary Needs">
          {dietNeedsArray &&
            dietNeedsArray.map((item: any, index) => {
              return (
                <div key={index}>
                  <Input
                    rightLabel={item}
                    name={item}
                    type="checkbox"
                    checked={filter.dietNeeds.includes(item)}
                    onChange={onChangeCheckbox}
                  />
                </div>
              );
            })}
        </RcAccordion>
        <RcAccordion heading="Allergence Free">
          {alllergenceArray &&
            alllergenceArray.map((item: any, index) => {
              return (
                <div key={index}>
                  <Input
                    rightLabel={item}
                    name={item}
                    type="checkbox"
                    checked={filter.allergenFilters.includes(item)}
                    onChange={onChangeCheckbox2}
                  />
                </div>
              );
            })}
        </RcAccordion>
      </Sidebar>
      <Heading headingName="Vegetables" />
      <Pagination productArray={featurdData} />
      <Footer />
    </div>
  );
};

export default Product;
