/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
interface IReactStar {
  value: any;
}
const Rating = ({ value }: IReactStar) => {
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  
  console.log('value rating', value);

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        activeColor="#ffd700"
        value={value}
      />
    </div>
  );
};

export default Rating;
