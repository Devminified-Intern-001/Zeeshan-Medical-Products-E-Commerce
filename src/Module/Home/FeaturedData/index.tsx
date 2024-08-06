import { useState } from 'react';
import Button from '../../../Component/Button';
import { API_URL } from '../../../config';
interface Iprops {
  className?: string;
  productName?: string;
  image?: string;
  price?: number;
}
const FeaturedData = (props: Iprops) => {
  const { productName, image, price } = props;
  console.log('image', image);

  // const [counter, setCounter] = useState(1);
  // const [pric, setrpic] = useState(50);
  // const increment = () => {
  //   setrpic(price + 50);
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   if (counter > 1) {
  //     setrpic(price - 50);
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <div className="featured">
      <div>
        <img src={`${API_URL}/img/${image}`} alt="img not found" />
        <p>{productName}</p>
        <p>{price}$</p>
        <Button>-</Button>
        {}
        <Button>+</Button>
        <div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedData;
