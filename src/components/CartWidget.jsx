import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 3;
  return (
    <>
      <FaShoppingCart />
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "4px 8px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {itemCount}
      </span>
    </>
  );
};

export default CartWidget;
