import Cardtype1 from '../../../assets/CardType1';
import CardType2 from '../../../assets/CardType2';
import Paypal from '../../../assets/Paypal';
import AmericanExpress from '../../../assets/americanexpress.png';
import Input from '../../../Component/Input';
import Button from '../../../Component/Button';
import RightArrow from '../../../assets/rightArrow';
interface IPaymentDetailsProps {
  className?: string;
  name?: string;
  cardNumber?: number;
  expiryDate?: string;
  cvv?: number;
  fee?: number;
  subTotal?: number;
  shipping?: number;
  total?: number;
}
const PaymentDetails = (props: IPaymentDetailsProps) => {
  const {
    className,
    name,
    cardNumber,
    expiryDate,
    cvv,
    fee,
    subTotal,
    shipping,
    total,
  } = props;
  return (
    <div className={className}>
      <h2>Payment Details</h2>
      <p>Card type</p>
      <Cardtype1 />
      <CardType2 />
      <img src={AmericanExpress} alt="AmericanExpress" />
      <Paypal />
      <Input label="Name on Card" type="text" value={name} />
      <Input label="Card number" type="number" value={cardNumber} />
      <Input label="Expiration date" type="date" value={expiryDate} />
      <Input label="CVV" type="number" value={cvv} />
      <table>
        <tbody>
          <tr>
            <td>Convenience fee</td>
            <td>${fee}.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>${shipping}.00</td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>${total}.00</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Add promo code?</p>
      <Button rightIcon={<RightArrow />}>Checkout</Button>
    </div>
  );
};

export default PaymentDetails;
