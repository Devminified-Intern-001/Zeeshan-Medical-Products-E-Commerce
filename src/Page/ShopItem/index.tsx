/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import ShopIteam from '../../Module/ShopIteams/ShopIteamNavbar';
import Navbar from '../../Component/Navbar';
import Logo from '../../assets/Logo.png';
import ItemDetails from '../../Module/ShopIteams/ItemDetail';
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
import Recommand from '../../Module/ShopIteams/Recomanded';
import Footer from '../../Component/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { allProducts, productShopIteam } from '../../api/auth';
import FeaturedData from '../../Module/Home/FeaturedData';
const ShopItem = () => {
  const { productName } = useParams();

  const [product, setProduct] = useState<productShopItemMessage>({
    title: '',
    price: 0,
    productType: '',
    quantity: 0,
    images: [],
    defaultImage: 0,
    ingredients: [],
    servingsPerContainer: null,
    servingSize: '',
    tags: [],
    amountsPerServing: [],
    alertMsg: '',
    unit: '',
    description: '',
    orderCount: 0,
    reviews: [],
    reviewCount: 0,
    ratingStats: [],
    avgRating: 0,
  });

  const [featurdData, setFeaturedData] = useState<allProductResponse>({
    done: false,
    message: [],
  });
  const fetchdata = async () => {
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
    const response = await productShopIteam({
      productName: productName as string,
    });
    setProduct(response.message);
    const responseAllProducts = await allProducts(newobj);
    if (responseAllProducts.done === true) {
      setFeaturedData(responseAllProducts);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [productName]);

  useEffect(() => {
    fetchdata();
  }, []);
  console.log('product.avgRating', product?.avgRating);

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
        currentRoute={product.productType}
        onCartItem={() => {}}
        onShopItem={() => {}}
      />
      <div className="ItemDetailsAddToCart">
        <ItemDetails
          className="ItemDetails"
          category="Organic"
          orders={product.orderCount}
          slides={product.images}
          rating={product.avgRating}
        />
        <AddToCart
          className="AddToCart"
          productName={product.title}
          descriptopn={product.description}
          deliveryIcon={DeliveryIcon}
          delivery="Deliver within 24 hrs."
          buyIcon={<Buy />}
          text="See best price in cart"
          priceStrick={50.0}
          price={product.price}
          quantity={product.quantity}
        />
      </div>
      <div className="NutrationsIngredient">
        <NutrationsFact
          className="NutrationsFact"
          heading="Nutrition facts"
          servingsPerContainer={product.servingsPerContainer}
          servingSize={product.servingSize}
          text="Amount per serving"
        >
          <table>
            <tbody>
              {product.amountsPerServing?.map((obj, index) => {
                return (
                  <tr key={index}>
                    <td> {obj.item} </td>
                    <td>{obj.value}</td>
                    <td>
                      {obj.valuePercent ? (
                        `${obj.valuePercent}%`
                      ) : (
                        <>
                          <br />% Daily Value*
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </NutrationsFact>
        <Ingredients
          className="Ingredients"
          heading="Ingredients"
          ingredients={product.ingredients}
          warnHeading="Important"
          text={product.alertMsg}
          warnIcon={<Warn />}
        />
      </div>
      <div className="RcProgressReviews">
        <div>
          <RcProgress
            heading="Reviews from buyers"
            rating={product.avgRating}
            ratingPoints={product.reviewCount}
            totalReview={product.reviewCount}
            completed5={product.ratingStats[5]}
            completed4={product.ratingStats[4]}
            completed3={product.ratingStats[3]}
            completed2={product.ratingStats[2]}
            completed1={product.ratingStats[1]}
          />
          <RelatedTages tags={product.tags} />
        </div>
        <div>
          <SortBy label="Time" />
          {product.reviews?.map((item, index) => {
            return (
              <div key={index}>
                <Reviews
                  name={item.userName}
                  date={item.reviewDate}
                  description={item.reviewText}
                  rating={item.rating}
                  image={item.userImage}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Recommand heading="Recommanded">
        {featurdData.message?.map((iteam, index) => {
          return (
            <div key={index}>
              <FeaturedData
                productName={iteam.title}
                image={iteam.defaultImage}
                price={iteam.price}
                quantity={iteam.quantity}
                item={{...iteam, images: [""]}}           />
            </div>
          );
        })}
      </Recommand>
      <Footer />
    </div>
  );
};

export default ShopItem;
