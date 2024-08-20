interface IReviewsProps {
  className?: string;
  image?: string;
  name?: string;
  description?: string;
  date?: string;
  ratingChanged?: () => void;
  rating?: number;
}
import Rating from '../../../Component/Rating';
import { API_URL } from '../../../config';
const Reviews = (props: IReviewsProps) => {
  const { className, image, name, description, date, rating } = props;

  return (
    <div className={className}>
      <img
        src={`${API_URL}/img/${image}`}
        alt={image}
        style={{ width: 71, height: 71, borderRadius: 50 }}
      />
      <h3>{name}</h3>
      <Rating value={rating} />
      {date}
      <p>{description}</p>
    </div>
  );
};

export default Reviews;
