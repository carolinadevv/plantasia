import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import cartContext from "../context/cartContext";

const CartWidget = () => {
  const context = useContext(cartContext);

  return (
    <div className="cart-icon">
      <FaShoppingCart size={20} />
      <span className="cart-count">{context.countItemsInCart()}</span>
    </div>
  );
};

export default CartWidget;
