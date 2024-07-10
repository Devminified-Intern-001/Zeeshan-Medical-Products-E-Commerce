interface IReviewsProps {
  className?: string;
  image?: string;
  name?: string;
  description?: string;
  date?: string;
  ratingChanged?: () => void;
}
import Rating from '../../../Component/Rating';
const Reviews = (props: IReviewsProps) => {
  const { className, image, name, description, date,  } = props;
  return (
    <div className={className}>
      <img src={image} alt={image} />
      <h3>{name}</h3>
      <Rating />
      {date}
      <p>{description}</p>
    </div>
  );
};

export default Reviews;
