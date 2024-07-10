import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
interface IPriceRange {
  className?: string;
  min: number;
  max: number;
  onValueChange?: (value: number) => void;
  value?: number[];
}
const PriceRangeSlider = (props: IPriceRange) => {
  const { min, max, onValueChange, value } = props;
  console.log(value);

  return (
    <div>
      <RangeSlider
        min={min}
        max={max}
        defaultValue={[0, 150]}
        onInput={onValueChange}
      />
      <div>
        {value?.map((v) => (
          <div>{v}</div>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
