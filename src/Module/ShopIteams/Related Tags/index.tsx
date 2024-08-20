/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRealtedProps {
  className?: string;
  tags?: string[];
  heading?: string;
  handleTag?: any;
}
import Button from '../../../Component/Button';
const RelatedTages = (props: IRealtedProps) => {
  const { className, heading, tags } = props;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      {tags?.map((tag, index) => {
        return (
          <div key={index}>
            <Button >{tag}</Button>
          </div>
        );
      })}
    </div>
  );
};

export default RelatedTages;
