/* eslint-disable react-hooks/exhaustive-deps */
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
import { applyFilters } from '../../api/auth';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchText,
  clearSearchData,
} from '../../redux-slices/search.slice';
const Product = () => {
  const searchValue = useSelector((state: any) => state.searchBox.searchText);
  const dispatch = useDispatch();
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
    setFlag(true);
  };
  const [falg, setFlag] = useState(false);
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
  const handleChange = (newValue: any) => {
    const [minValue, maxValue] = newValue;
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: minValue,
      maxPrice: maxValue,
    }));
    setFlag(true);
  };
  const onToggle = (event: any) => {
    const { name, checked } = event.target;
    //console.log('checked', checked);
    setFilter((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
    setFlag(true);
    // responseFilters();
  };
  const onChangeDietNeeds = (event: any) => {
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
    setFlag(true);
  };
  const onChangeAllergenFilters = (event: any) => {
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
    setFlag(true);
  };
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
      getAllproducts();
    }
  };
  const [featurdData, setFeaturedData] = useState<allProductResponse>({
    done: false,
    message: [],
  });
  const getAllproducts = async () => {
    if (filter.searchText) {
      const testObj = { ...filter } as Record<string, any>;
      const newobj = {} as Record<string, any>;
      for (const element in testObj as string[]) {
        newobj[element] =
          testObj[element]?.length == 0 ? undefined : testObj[element];
      }
      const responseAllProducts = await allProducts(newobj);
      if (responseAllProducts.done === true) {
        setFeaturedData(responseAllProducts);
        dispatch(clearSearchData());
      }
    } else if (searchValue) {
      const updatedObj = {
        searchText: searchValue,
        onSales: true,
        type: '',
        newArrivals: false,
        minPrice: 0,
        maxPrice: 150,
        dietNeeds: [],
        allergenFilters: [],
      };
      const testObj = { ...updatedObj } as Record<string, any>;
      const newobj = {} as Record<string, any>;
      for (const element in testObj as string[]) {
        newobj[element] =
          testObj[element]?.length == 0 ? undefined : testObj[element];
      }
      const responseAllProducts = await allProducts(newobj);
      if (responseAllProducts.done === true) {
        setFeaturedData(responseAllProducts);
        dispatch(clearSearchData());
      }
    } else {
      const testObj = { ...filter } as Record<string, any>;
      const newobj = {} as Record<string, any>;
      for (const element in testObj as string[]) {
        newobj[element] =
          testObj[element]?.length == 0 ? undefined : testObj[element];
      }
      const responseAllProducts = await allProducts(newobj);
      if (responseAllProducts.done === true) {
        setFeaturedData(responseAllProducts);
      }
    }
  };
  useEffect(() => {
    getAllproducts();
  }, []);
  console.log('featurdData', featurdData);
  console.log('featurdData.message', featurdData.message);

  const responseFilters = async () => {
    const testObj = { ...filter } as Record<string, any>;
    const newobj = {} as Record<string, any>;
    for (const element in testObj as string[]) {

      newobj[element] =
        testObj[element]?.length == 0 ? undefined : testObj[element];
    }
    const filtersData = await applyFilters(newobj);
    if (filtersData.done === true) {
      setFeaturedData(filtersData);
    }
  };
  if (falg === true) {
    responseFilters();
    setFlag(false);
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
        onSearch={searchFc}
        value={filter.searchText}
        onChange={handleSearch}
      />
      <Swipe slides={HeroSlider} slidesPerView={6} condition={true} />
      <Sidebar heading="Filter" buttonlabel="Clear All" onClear={handleClear}>
        <Toggle
          labelLeft="On Sales"
          name="onSales"
          checked={filter.onSales}
          onChange={onToggle}
        />
        <Toggle
          labelLeft="New Arrivals "
          name="newArrivals"
          checked={filter.newArrivals}
          onChange={onToggle}
        />
        <RcAccordion heading="Price Range">
          <PriceRangeSlider
            onValueChange={handleChange}
            min={filter.minPrice}
            max={filter.maxPrice}
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
                    onChange={onChangeDietNeeds}
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
                    onChange={onChangeAllergenFilters}
                  />
                </div>
              );
            })}
        </RcAccordion>
      </Sidebar>
      <Heading headingName={searchValue || 'vegetables'} />
      <Pagination productArray={featurdData.message} />
      <Footer />
    </div>
  );
};

export default Product;
