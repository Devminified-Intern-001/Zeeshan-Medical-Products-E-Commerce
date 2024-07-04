import Input from "../../../Component/Input";
import Button from "../../../Component/Button";
interface INewsLetter {
  heading?: string;
  className?: string;
  buttonLabel?: string;
  inputPlaceholder?:string
}
const NewLetter = (props: INewsLetter) => {
  const { heading, className, buttonLabel,inputPlaceholder } = props;
  return <div className={className}>
    <h1>{heading}</h1>
    <Input placeholder={inputPlaceholder}/>
    <Button>{buttonLabel}</Button>
  </div>;
};

export default NewLetter;
