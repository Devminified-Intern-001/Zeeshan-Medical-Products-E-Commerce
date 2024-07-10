import { ReactNode, useState } from 'react';
import Button from '../../../Component/Button';
interface Iprops{
  className?: string;
  productName?: string;
  descriptopn?:string;
  delivery?:string
  deliveryIcon?:string
  buyIcon?:ReactNode
  text?:string;
  priceStrick?:number
}
const AddToCart = (props: Iprops) => {
  const { productName, descriptopn,delivery, deliveryIcon,buyIcon,text,priceStrick } = props;
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
        <h3>{productName}</h3>
        <p>{pric}$</p>
        <Button onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
        <p>{descriptopn}</p>
        <img src={deliveryIcon} alt="deliveryIcon" />
        {delivery}
        <div><Button leftIcon={buyIcon}>Add to cart</Button></div>
        {text}{priceStrick}
      </div>
    </div>
  );
};

export default AddToCart;
