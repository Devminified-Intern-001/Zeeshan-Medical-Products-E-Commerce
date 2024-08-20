/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgressBar from '@ramonak/react-progress-bar';
interface IProgressProps {
  className?: string;
  completed5: number;
  completed4: number;
  completed3: number;
  completed2: number;
  completed1: number;
}
const Progress = (props: IProgressProps) => {
  const {
    className,
    completed1,
    completed2,
    completed3,
    completed4,
    completed5,
  } = props;
  return (
    <div className={className}>
      <div>
        5
        <ProgressBar
          completed={completed5}
          bgColor={'#FBD54E'}
          isLabelVisible={false}
        />
        {completed5}%
      </div>
      <div>
        4
        <ProgressBar
          completed={completed4}
          bgColor={'#FBD54E'}
          isLabelVisible={false}
        />
        {completed4}%
      </div>
      <div>
        3
        <ProgressBar
          completed={completed3}
          bgColor={'#FBD54E'}
          isLabelVisible={false}
        />
        {completed3}%
      </div>
      <div>
        2
        <ProgressBar
          completed={completed2}
          bgColor={'#FBD54E'}
          isLabelVisible={false}
        />
        {completed2}%
      </div>
      <div>
        1
        <ProgressBar
          completed={completed1}
          bgColor={'#FBD54E'}
          isLabelVisible={false}
        />
        {completed1}%
      </div>
    </div>
  );
};

export default Progress;
