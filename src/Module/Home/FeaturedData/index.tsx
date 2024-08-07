import { useState } from 'react';
import Button from '../../../Component/Button';
import { API_URL } from '../../../config';
import { Link } from 'react-router-dom';
interface Iprops {
  className?: string;
  productName?: string;
  image?: string;
  price?: number;
  quantity?: number;
}
const FeaturedData = (props: Iprops) => {
  const { productName, image, price, quantity } = props;
  // console.log('image', image);

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

  return (
    <div className="featured">
      <div>
      <Link to={'/ShopItem'}><img src={`${API_URL}/img/${image}`} alt="img not found" /></Link>

        
        <p>{productName}</p>
        <p>{price}$</p>
        <Button onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
        <div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedData;
