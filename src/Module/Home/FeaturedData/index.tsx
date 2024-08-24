/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Button from '../../../Component/Button';
import { API_URL } from '../../../config';
import { Link } from 'react-router-dom';
import Swipe from '../../../Component/Slider';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux-slices/card.slice';
import { AddToCartApi } from '../../../api/auth';
interface Iprops {
  className?: string;
  productName: string;
  image: string;
  price: number;
  quantity: number;
  conditon?: boolean;
  item: {
    title: string;
    price: number;
    images: string[];
    defaultImage: string;
    quantity: number;
    description: string;
    unit: string;
    shortTitle: string;
  };
  // addToCart?:any
}

const FeaturedData = (props: Iprops) => {
  const [id,setId]=useState<addToCartApiResponseMessage>({
    cartID: undefined  ,
    overflow:false,
  })
  const { productName, image, price, quantity, conditon, item } = props;

  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  // const [pric, setrpic] = useState(price);
  const increment = () => {
    if (quantity > counter) {
      console.log('quantity >= counter', quantity >= counter);
      // setrpic(pric + price);
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 1) {
      // setrpic(pric - price);
      setCounter(counter - 1);
    }
  };
  const addToCardApiFc = async () => {
    const response = await AddToCartApi({ item: item.title, count: counter, cartID:id.cartID });
    console.log("response",response);
    setId(response.message)
    dispatch(addToCart({ cart: item, getQuantity: counter}));
  };
  return (
    <div className="featured">
      {conditon ? (
        <Swipe />
      ) : (
        <div>
          <Link to={`/ShopItem/${productName}`}>
            <img
              src={`${API_URL}/img/${image}`}
              alt="img not found"
              style={{ height: 91, width: 110 }}
            />
          </Link>

          <p>{productName}</p>
          <p>{price}$</p>
          <Button onClick={decrement}>-</Button>
          {counter}
          <Button onClick={increment}>+</Button>
          <div>
            <Button onClick={() => addToCardApiFc()}>Add to cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedData;
