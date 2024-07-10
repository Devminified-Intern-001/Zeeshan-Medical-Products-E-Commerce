import ReactStars from 'react-rating-stars-component';

const Rating = () => {
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Rating;
