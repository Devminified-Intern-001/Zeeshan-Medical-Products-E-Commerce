import { useState } from 'react';
import Button from '../../../Component/Button';
interface Iprops{
  className?: string;
  productName?: string;
  image?: string;
}
const FeaturedData = (props: Iprops) => {
  const { productName, image } = props;
  const [counter, setCounter] = useState(1);
  const [pric, setrpic] = useState(50);
  const increment = () => {
    setrpic(pric + 50);
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setrpic(pric - 50);
      setCounter(counter - 1);
    }
  };

  return (
    <div className="featured">
      <div>
        <img src={image} alt="img not found" />
        <p>{productName}</p>
        <p>{pric}$</p>
        <Button onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
        <div><Button>Add to cart</Button></div>
      </div>
    </div>
  );
};

export default FeaturedData;
