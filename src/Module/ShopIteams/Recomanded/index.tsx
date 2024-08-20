// import FeaturedData from "../../Home/FeaturedData";
// import RecommandedSwiper from "../../../Component/RecommandedSwiper";
// import Swipe from '../../../Component/Slider';
import { ReactNode } from 'react'
interface IRecommandProps {
  className?: string;
  heading?: string;
  children?: ReactNode;
}

const Recommand = (props: IRecommandProps) => {
  const { className, children, heading } = props;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      {children}
    </div>
  );
};

export default Recommand;
