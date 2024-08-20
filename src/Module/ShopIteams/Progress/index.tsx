import Progress from '../../../Component/Progress';
import Rating from '../../../Component/Rating';
interface IReview {
  className?: string;
  ratingPoints?: number;
  totalReview: number;
  heading?: string;
  completed5: number;
  completed4: number;
  completed3: number;
  completed2: number;
  completed1: number;
  rating?: number;
}
const RcProgress = ({
  className,
  heading,
  totalReview,
  completed5,
  completed4,
  completed3,
  completed2,
  completed1,
  rating,
}: IReview) => {
  if (totalReview === 0) {
    totalReview = 1;
  }
  const com5 = (completed5 / totalReview) * 100;
  const com4 = (completed4 / totalReview) * 100;
  const com3 = (completed3 / totalReview) * 100;
  const com2 = (completed2 / totalReview) * 100;
  const com1 = (completed1 / totalReview) * 100;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <Rating value={rating} />
      {rating}/5
      {`(${totalReview}reviews)`}
      <Progress
        className="Progress"
        completed1={Math.floor(com1)}
        completed2={Math.floor(com2)}
        completed3={Math.floor(com3)}
        completed4={Math.floor(com4)}
        completed5={Math.floor(com5)}
      />
    </div>
  );
};

export default RcProgress;
