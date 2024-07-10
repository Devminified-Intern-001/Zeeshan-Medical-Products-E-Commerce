import Swipe from '../../../Component/Slider';
import Rating from '../../../Component/Rating';

interface IitemDetails {
  className?: string;
  category?: string;
  orders?: string;
  slides?: {
    image?: string;
  }[];
}

const ItemDetails = (props: IitemDetails) => {
  const { className, category, orders, slides } = props;
  return (
    <div className={className}>
      <div>
        {category}
        <Rating />
        {orders}orders
        <Swipe slides={slides} slidesPerView={6} />
      </div>
     
    </div>
  );
};

export default ItemDetails;
