import { ReactNode } from 'react';
import Button from '../Button';
interface ISidebar {
  className?: string;
  heading?: string;
  buttonlabel?: string;
  onClear?: () => void;
  children?: ReactNode;
}

const Sidebar = (props: ISidebar) => {
  const { heading, buttonlabel, onClear, children } = props;
  return (
    <div>
      {heading}
      <Button onClick={onClear}>{buttonlabel}</Button>
      {children}
    </div>
  );
};

export default Sidebar;
