import ProgressBar from '@ramonak/react-progress-bar';
interface IProgressProps {
  className?: string;
  completed5?:number | string;
  completed4?:number | string ;
  completed3?:number | string;
  completed2?:number | string;
  completed1?:number | string;

}
const Progress = (props:IProgressProps) => {
const {className,completed1,completed2,completed3,completed4,completed5}=props
  return (
    <div className={className}>
      <div>5<ProgressBar completed={completed5} bgColor={'#FBD54E'}/>{completed5}%</div>
      <div>4<ProgressBar completed={completed4} bgColor={'#FBD54E'}/>{completed4}%</div>
      <div>3<ProgressBar completed={completed3}bgColor={'#FBD54E'} />{completed3}%</div>
      <div>2<ProgressBar completed={completed2} bgColor={'#FBD54E'}/>{completed2}%</div>
      <div>1<ProgressBar completed={completed1} bgColor={'#FBD54E'}/>{completed1}%</div>
    </div>
  );
};

export default Progress;
