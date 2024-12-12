import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 3;
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaShoppingCart size={20} />
      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "10px",
          fontWeight: "bold",
        }}
      >
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;
