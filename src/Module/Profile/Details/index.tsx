/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../../../Component/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface IDetailProps {
  className?: string;
  userName?: string;
  mobile?: string;
  email?: string;
  dateOfBirth?: Date | null;
  nic?: string;
  gender?: string;
  password?: string;
  handleDateChange?: any;
  handleChange?: any;
}

const Detail = (props: IDetailProps) => {
  const {
    className,
    userName,
    mobile,
    email,
    dateOfBirth,
    nic,
    password,
    handleDateChange,
    handleChange,
    gender,
  } = props;
  return (
    <div className={className}>
      Your Profile
      <div>
        User Name{' '}
        <Input
          type="text"
          value={userName}
          name="userName"
          onChange={handleChange}
          readOnly
        />
      </div>
      Mobile{' '}
      <Input
        type="number"
        name="mobile"
        value={mobile}
        onChange={handleChange}
      />
      Email ID{' '}
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        readOnly
      />
      Date of Birth <br />
      <DatePicker
        selected={dateOfBirth}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />
      <br />
      NIC{' '}
      <Input
        type="text"
        placeholder="xxxx-xxxxxx-xx"
        name="nic"
        value={nic}
        onChange={handleChange}
      />
      Gender
      <Input
        name="gender"
        rightLabel="male"
        type="radio"
        onChange={handleChange}
        checked={gender === 'Male'}
        value="Male"
      />
      <Input
        name="gender"
        rightLabel="female"
        type="radio"
        onChange={handleChange}
        checked={gender === 'Female'}
        value="Female"
      />
      Password
      <Input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </div>
  );
};

export default Detail;
