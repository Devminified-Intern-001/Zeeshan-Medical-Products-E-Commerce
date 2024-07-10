import Notifications from "../../../assets/Notifications";
import Profile from "../../../assets/ProfileIcon";
import Button from "../../../Component/Button";
import Bag from "../../../assets/Bag";
import Location from "../../../assets/Location";
import Wallet from "../../../assets/Wallet";
import Heart from "../../../assets/Heart";
import Logout from "../../../assets/Logout";
interface ISideBarProps {
    className?:string;
    name?:string;
    onMyDetails?:()=>void
    onNotifications?:()=>void
    onOrderHistory?:()=>void
    onBillingAddress?:()=>void
    onMyLoyality?:()=>void
    onMyWishlists?:()=>void
    onLogout?:()=>void
}

const SideBar = (props:ISideBarProps) => {
    const {className,name,onBillingAddress,onLogout,onMyDetails,onMyLoyality,onMyWishlists,onNotifications,onOrderHistory}=props
  return (
    <div className={className}>
        Hello!
        <h2>{name}</h2>
        <Button leftIcon={<Profile/>} onClick={onMyDetails} >My Details</Button>
        <Button leftIcon={<Notifications/>} onClick={onNotifications} >Notifications</Button>
        <Button leftIcon={<Bag/>} onClick={onOrderHistory} >Order History</Button>
        <Button leftIcon={<Location/>} onClick={onBillingAddress} >Billing Address</Button>
        <Button leftIcon={<Wallet/>} onClick={onMyLoyality} >My Loyality</Button>
        <Button leftIcon={<Heart/>} onClick={onMyWishlists} >My Wishlists</Button>
        <Button leftIcon={<Logout/>} onClick={onLogout} >Logout</Button>
    </div>
  )
}

export default SideBar
