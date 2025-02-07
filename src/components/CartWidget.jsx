import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const context = useContext(cartContext);

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <FaShoppingCart size={20} color="black" />
      </Link>
      <span className="cart-count">{context.countItemsInCart()}</span>
    </div>
  );
};

export default CartWidget;
