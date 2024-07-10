import Button from '../../../Component/Button';

interface IShopIteam {
  className?: string;
  heading?: string;
  parentRoutes?: string;
  currentRoute?: string;
  onShopItem?: () => void;
  onCartItem?: () => void;
}

const ShopIteam = (props: IShopIteam) => {
  const {
    className,
    heading,
    parentRoutes,
    currentRoute,
    onCartItem,
    onShopItem,
  } = props;
  return (
    <div className={className}>
      <div>
        <h2>{heading}</h2>
        {parentRoutes}-{currentRoute}
      </div>
      <div>
        <Button onClick={onShopItem}>Shop Item</Button>
        <Button onClick={onCartItem}>Cart Item</Button>
      </div>
    </div>
  );
};

export default ShopIteam;
