// import FeaturedData from "../../Home/FeaturedData";
// import RecommandedSwiper from "../../../Component/RecommandedSwiper";
import Swipe from "../../../Component/Slider";
interface IRecommandProps {
  className?: string;
  heading?: string;
  productArray: {
    productImage?: string;
    productName?: string;
  }[];
}

const Recommand = (props: IRecommandProps) => {
  const { className, productArray,heading } = props;
  return <div className={className}>
     <h3>{heading}</h3>
    
     <Swipe productArray={productArray} slidesPerView={5} condition={true} />
      {/* <RecommandedSwiper productArray={productArray} slidesPerView={5} /> */}
        
     
    </div>;
};

export default Recommand;
