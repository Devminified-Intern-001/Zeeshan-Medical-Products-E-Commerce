/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../../Component/Navbar';
import ShopIteam from '../../Module/ShopIteams/ShopIteamNavbar';
import Logo from '../../assets/Logo.png';
import '../../MyCSS.css';
import ShoppingCart from '../../Module/Checkout/ShoppingCart';
import Heading from '../../Component/Heading';
import SortBy from '../../Component/SortBy';
import Button from '../../Component/Button';
import LeftArrow from '../../assets/LeftArrow';
import PaymentDetails from '../../Module/Checkout/PaymentDetails';
import RightArrow from '../../assets/rightArrow';
import Carret from '../../assets/carret.png';
import Cabbage from '../../assets/cabbage.png';
import Tomato from '../../assets/tomato.png';
import Broccoli from '../../assets/broccoli.png';
import FeaturedData from '../../Module/Home/FeaturedData';
import Footer from '../../Component/Footer';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const RecommandedArray = useSelector((state: any) => state.cart.cart);
  // const RecommandedArray = [
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcarrot,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcabbage,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smalltomato,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcabbage,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcarrot,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcabbage,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smalltomato,
  //     category: 'Organic Foods',
  //   },
  //   {
  //     productName: 'Product Name',
  //     productImage: smallcarrot,
  //     category: 'Organic Foods',
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
console.log("RecommandedArray",RecommandedArray);



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
        heading="Cart Item"
        parentRoutes="Home - Products"
        currentRoute=" - Checkout"
        onCartItem={() => {}}
        onShopItem={() => {}}
      />
      <div className='main' >
      <div className='leftside' >
        <div className='HeadingSortBy'>
        <Heading
          headingName="Shopping Cart"
          text="You have 5 items in your cart"
        />
        <SortBy label="Price" />
        </div>  
        <div className='ShoppingCartMain'>

        {RecommandedArray &&
          RecommandedArray.map((item:any ,index:any) => {
            return (
              <div key={index}>
                <ShoppingCart
                  className="ShoppingCart"
                  productImage={item.defaultImage}
                  productName={item.title}
                  category='organic food'
                  quantity={item.quantity}
                  item={item}
                  />
              </div>
            );
          })}
          </div>
        <Button leftIcon={<LeftArrow />}>Continue Shopping</Button>
      </div>
          <div className='rightSide'>
        <PaymentDetails
        name="zeeshan"
        cardNumber={11442336776}
        cvv={23135445}
        fee={10}
        subTotal={33}
        shipping={8}
        total={50}
        />
        </div>
      </div>
      
      <Heading
        headingName="Hygenic Food"
        text="see more"
        icon={<RightArrow />}
      />
      <div className="Hygenic">
        {hygenicFoodArray?.map((iteam,index) => {
          // const {name,price,image,quantity}=iteam
          return (
            <div key={index}>
              <FeaturedData
                className=""
                productName={iteam.name}
                image={iteam.image}
              />
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
