import Swipe from '../../../Component/Slider';
import Rating from '../../../Component/Rating';
import { useEffect } from 'react';

interface IitemDetails {
  className?: string;
  category?: string;
  orders?: number;
  slides?: string[];
  rating?: number;
}

const ItemDetails = ({
  className,
  category,
  orders,
  slides,
  rating = 0,
}: IitemDetails) => {
  useEffect(() => {
    console.log('updated');
  }, [rating]);

  console.log('rating', rating);
  return (
    <div className={className}>
      <div>
        {category}
        {rating > -1 ? <Rating value={4} /> : null}
        {orders}orders
        <Swipe productArray={slides} slidesPerView={6} />
      </div>
    </div>
  );
};

export default ItemDetails;
