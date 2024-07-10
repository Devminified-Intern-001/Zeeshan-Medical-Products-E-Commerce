interface ISortByProps {
    className?:string;
    label?:string;

}
import DownArrow from "../../assets/DownArrow";
const SortBy = (props:ISortByProps) => {
    const {className,label}=props
  return (
    <div className={className}>
      Sort by: <b>{label}</b><DownArrow/>
    </div>
  )
}

export default SortBy
