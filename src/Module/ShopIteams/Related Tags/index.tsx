interface IRealtedProps{
    className?:string;
    heading?:string;
    onVegetables?:()=>void
    onLowFat?:()=>void
    onOrganic?:()=>void
    onLoream?:()=>void
    onLoremIpsum?:()=>void
}
import Button from "../../../Component/Button";
const RelatedTages = (props:IRealtedProps) => {
    const {className,heading,onVegetables,onLowFat, onOrganic,onLoream,onLoremIpsum}=props
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <Button onDoubleClick={onVegetables} >Vegetables</Button>
      <Button onDoubleClick={onLowFat} >LowFat</Button>
      <Button onDoubleClick={onOrganic} >Organic</Button>
      <Button onDoubleClick={onLoream} >Loream</Button>
      <Button onDoubleClick={onLoremIpsum} >Lorem Ipsum is a dummy</Button>
      
    </div>
  )
}

export default RelatedTages
