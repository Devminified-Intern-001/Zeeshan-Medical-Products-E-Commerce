import Swipe from '../../../Component/Slider';
import Rating from '../../../Component/Rating';

interface IitemDetails {
  className?: string;
  category?: string;
  orders?: number;
  slides?: string[];
  rating?: number;
}

const ItemDetails = (props: IitemDetails) => {
  const { className, category, orders, slides, rating } = props;
  console.log('rating', rating);

  return (
    <div className={className}>
      <div>
        {category}
        <Rating value={rating} />
        {orders}orders
        <Swipe productArray={slides} slidesPerView={6} />
      </div>
    </div>
  );
};

export default ItemDetails;
