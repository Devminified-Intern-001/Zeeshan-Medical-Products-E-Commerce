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
import RightArrow from '../../assets/rightArrow';
import FeaturedData from '../../Module/Home/FeaturedData';
import Footer from '../../Component/Footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { allProducts } from '../../api/auth';
import StripePayment from '../../Module/Stripe';
import { Link } from 'react-router-dom';
const Checkout = () => {
  const RecommandedArray = useSelector((state: any) => state.cart.cart);

  const [hygenicFoodArray, sethygenicFoodArray] = useState<allProductResponse>({
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
      sethygenicFoodArray(responseAllProducts);
    }
  };
  useEffect(() => {
    getAllproducts();
  }, []);
  console.log('RecommandedArray', RecommandedArray);

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
      <div className="main">
        <div className="leftside">
          <div className="HeadingSortBy">
            <Heading
              headingName="Shopping Cart"
              number={RecommandedArray.length}
            />
            <SortBy label="Price" />
          </div>
          <div className="ShoppingCartMain">
            {RecommandedArray &&
              RecommandedArray.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <ShoppingCart
                      className="ShoppingCart"
                      productImage={item.defaultImage}
                      productName={item.title}
                      category="organic food"
                      quantity={item.quantity}
                      item={item}
                    />
                  </div>
                );
              })}
          </div>
          <Link to={'/Product'}> <Button leftIcon={<LeftArrow />}>Continue Shopping</Button></Link>
         
        </div>
        <div className="rightSide">
        <StripePayment/>
        </div>
      </div>

      <Heading
        headingName="Hygenic Food"
        text="see more"
        icon={<RightArrow />}
      />
      <div className="Hygenic">
        {hygenicFoodArray.message?.map((iteam: any, index: any) => {
          // const {name,price,image,quantity}=iteam
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
                quantity={iteam.quantity}
                item={iteam}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
