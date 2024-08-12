import ShopIteam from '../../Module/ShopIteams/ShopIteamNavbar';
import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import ItemDetails from '../../Module/ShopIteams/ItemDetail';
import SmallCarrot from '../../assets/smallcarrot.png';
import FruitIcon from '../../assets/fruit.png';
import VegetableIcon from '../../assets/fruits-and-vegetables.png';
import NutrationsFact from '../../Module/ShopIteams/NutritionFacts';
import Ingredients from '../../Module/ShopIteams/Ingredients';
import Warn from '../../assets/Warn';
import '../../MyCSS.css';
import AddToCart from '../../Module/ShopIteams/AddToCart';
import DeliveryIcon from '../../assets/delivery.png';
import Buy from '../../assets/BuyIcon';
import RcProgress from '../../Module/ShopIteams/Progress';
import RelatedTages from '../../Module/ShopIteams/Related Tags';
import SortBy from '../../Component/SortBy';
import Reviews from '../../Module/ShopIteams/Reviews';
import ReviewImage from '../../assets/reviewImage.png';
import Recommand from '../../Module/ShopIteams/Recomanded';
import peanutJar from '../../assets/peanutJar.png';
import bread from '../../assets/bread.png';
import popconPack from '../../assets/popconPack.png';
import cucumberJar from '../../assets/cucumberJar.png';
import Footer from '../../Component/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { productShopIteam } from '../../api/auth';

const ShopItem = () => {
  const { productName } = useParams();
console.log("productName",productName);

  const HeroSlider = [
    {
      image: VegetableIcon,
    },
    {
      image: FruitIcon,
    },
    {
      image: VegetableIcon,
    },
    {
      image: FruitIcon,
    },
    {
      image: SmallCarrot,
    },
    {
      image: FruitIcon,
    },
    {
      image: VegetableIcon,
    },
    {
      image: FruitIcon,
    },
  ];
  const ReviewsArray = [
    {
      name: 'James Jones',
      date: '09 June 2022',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: ReviewImage,
    },
    {
      name: 'James Jones',
      date: '09 June 2022',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: ReviewImage,
    },
  ];
  const RecommandedArray = [
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
  const fetchdata=async()=>{
    const response=await productShopIteam({ productName: productName as string } )
    console.log("response",response);
    
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Navbar
        logo={Logo}
        className=""
        login={true}
        onProfile_SignIn={() => {}}
        onBuy_SignUp={() => {}}
      />
      <ShopIteam
        className="shopitem"
        heading="Shop Item"
        parentRoutes="Home - Products"
        currentRoute=" - Foods"
        onCartItem={() => {}}
        onShopItem={() => {}}
      />
      <div className="ItemDetailsAddToCart">
        <ItemDetails
          className="ItemDetails"
          category="Organic"
          orders="223"
          slides={HeroSlider}
        />
        <AddToCart
          className="AddToCart"
          productName="Organic Carrots"
          descriptopn="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          deliveryIcon={DeliveryIcon}
          delivery="Deliver within 24 hrs."
          buyIcon={<Buy />}
          text="See best price in cart"
          priceStrick={50.0}
        />
      </div>
      <div className="NutrationsIngredient">
        <NutrationsFact
          className="NutrationsFact"
          heading="Nutrition facts"
          descriptopn="About 3.5 servings per container Serving size 1/2 cup (120g)"
          text="Amount per serving"
        >
          <table>
            <tr>
              <td> Calories </td>
              <td>40</td>
            </tr>
            <tr>
              <td></td>
              <td>% Daily Value*</td>
            </tr>
            <tr>
              <td> Total Fat 10g </td>
              <td>12%</td>
            </tr>
            <tr>
              <td> Sodium 5mg </td>
              <td>37%</td>
            </tr>
            <tr>
              <td> Protein 2g </td>
              <td>55%</td>
            </tr>
            <tr>
              <td> Iron 1.7mg </td>
              <td>23%</td>
            </tr>
          </table>
        </NutrationsFact>
        <Ingredients
          className="Ingredients"
          heading="Ingredients"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          warnHeading="Important"
          text="Lorem Ipsum is simply dummy text of the printing and lorem ipsum typesetting industry."
          warnIcon={<Warn />}
        />
      </div>
      <div className='RcProgressReviews'>
        <div>
          <RcProgress
          heading='Reviews from buyers'
            ratingPoints={4.2}
            totalReview={234}
            completed5={90}
            completed4={35}
            completed3={20}
            completed2={10}
            completed1={5}
          />
          <RelatedTages />
        </div>
        <div>
          <SortBy label="Time" />
          {ReviewsArray?.map((item) => {
            return (
              <>
                <Reviews
                  name={item.name}
                  date={item.date}
                  description={item.description}
                  image={item.image}
                />
              </>
            );
          })}
        </div>
      </div>
      <Recommand heading='Recommanded' productArray={RecommandedArray}  />
          <Footer/>
    </div>
  );
};

export default ShopItem;
