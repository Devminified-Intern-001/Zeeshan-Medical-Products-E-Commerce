import { useState } from 'react';
import Button from '../../../Component/Button';
import DeleteIcon from '../../../assets/Delete'
interface IShoppingCartProps {
  className?: string;
  productImage?: string;
  productName?: string;
  category?: string;
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const { className, productImage, productName, category } = props;
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
    <div className={className}>
      <img src={productImage} alt="" />
      <div>
        <b>{productName}</b>
        <p>{category}</p>
      </div>
      <div>
        <Button onClick={decrement}>-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
      </div>
      <p><b>{pric}$</b></p>

      <div>
        <Button leftIcon={<DeleteIcon/>} />
      </div>
    </div>
  );
};

export default ShoppingCart;
