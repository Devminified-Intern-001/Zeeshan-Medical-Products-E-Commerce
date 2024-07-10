import Button from "../../../Component/Button";
import Upload from "../../../assets/Upload";
import Delete from "../../../assets/Delete";
import Input from "../../../Component/Input";
interface IDetailProps {
    className?: string;
    onUpdate?: () => void;
    onDelete?: () => void;
    userName?:string;
    mobile?:number;
    email?:string;
    dateOfBirth?:string;
    nic?:string;
    gender?:boolean;
    password?:string;
  }

const Detail = (props:IDetailProps) => {
const {onDelete,onUpdate,userName,mobile,email,dateOfBirth,nic,password}=props
  return (
    <div>
      Your Profile 
      <Button onClick={onUpdate} leftIcon={<Upload/>} >Update</Button>
      <Button onClick={onDelete} leftIcon={<Delete/>} >Delete</Button>
      <div>User Name <Input type="text" value={userName} /></div>
      Mobile <Input type="number" value={mobile} />
      Email ID <Input type="email" value={email} />
      Date of Birth <Input type="date" value={dateOfBirth} />
      NIC <Input type="text" value={nic} />
      Gender <Input
                name="gender"
                rightLabel="male"
                type="radio"
                
              />
              <Input name="gender" rightLabel="female" type="radio" />
      Password <Input type="password" value={password} />
    </div>
  )
}

export default Detail
 