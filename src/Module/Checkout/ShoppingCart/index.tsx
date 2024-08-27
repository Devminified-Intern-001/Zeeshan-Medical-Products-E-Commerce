import { useState } from 'react';
import Button from '../../../Component/Button';
import DeleteIcon from '../../../assets/Delete'
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux-slices/card.slice';
import { AddToCartApi } from '../../../api/auth';
interface IShoppingCartProps {
  className?: string;
  productImage?: string;
  productName?: string;
  category?: string;
  quantity:number;
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
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const { className, productImage, productName, category,quantity,item } = props;
  const [counter, setCounter] = useState(quantity);
  const dispatch = useDispatch();
  const [pric, setrpic] = useState(counter*item.price);
  const increment = async() => {
    setrpic(pric + item.price);
    setCounter(counter + 1);
    console.log(`Item: ${item}`);
    dispatch(addToCart({ cart: item, getQuantity: counter + 1 }))
    
    const response = await AddToCartApi({ item: item.title, count: counter });
    console.log('response', response);
  };
  const decrement = async() => {
    if (counter > 1) {
      setrpic(pric - item.price);
      setCounter(counter - 1);
      const response = await AddToCartApi({ item: item.title, count: counter });
      console.log('response', response);
      dispatch(addToCart({ cart: item, getQuantity: counter-1, cartId: response.message.cartID}))
    }
  };
  console.log("item.price",item.price);
  console.log("counter",counter);
  console.log("counter*item.price",counter*item.price);

  return (
    <div className={className}>
      <img
              src={`${API_URL}/img/${productImage}`}
              alt="img not found"
              style={{ height: 91, width: 110 }}
            />
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
