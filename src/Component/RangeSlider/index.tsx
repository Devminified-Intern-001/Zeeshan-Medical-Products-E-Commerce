import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
interface IPriceRange {
  className?: string;
  onValueChange?: (value: number) => void;
  // value?: number[];
  min?: number;
  max?: number;
}
const PriceRangeSlider = (props: IPriceRange) => {
  const { onValueChange, min,max } = props;
  // console.log(value);

  return (
    <div>
      <RangeSlider
        min={0}
        max={150}
        defaultValue={[0, 150]}
        onInput={onValueChange}
      />
      <div>
      <p>{min}</p>{max}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
