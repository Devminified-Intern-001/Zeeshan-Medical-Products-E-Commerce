import Progress from '../../../Component/Progress';
import Rating from '../../../Component/Rating';
interface IReview {
  className?: string;
  ratingPoints?: number;
  totalReview?: number;
  heading?: string;
  completed5?: number | string;
  completed4?: number | string;
  completed3?: number | string;
  completed2?: number | string;
  completed1?: number | string;
}
const RcProgress = (props: IReview) => {
  const { className, heading, ratingPoints, totalReview,completed5,completed4,completed3,completed2,completed1 } = props;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <Rating />
      {ratingPoints}/5
      {`(${totalReview}reviews)`}
      <Progress
        className="Progress"
        completed1={completed1}
        completed2={completed2}
        completed3={completed3}
        completed4={completed4}
        completed5={completed5}
      />
    </div>
  );
};

export default RcProgress;
