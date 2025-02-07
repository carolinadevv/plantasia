import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import cartContext from "../context/cartContext";

const ItemDetail = (props) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id, title, text, price, category, img, stock } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    addItem({ id, title, price, category, img, stock, count });
    setIsAddedToCart(true);
  }

  return (
    <div className="">
      <h2 className="">{category}</h2>
      <img src={img} width="200" height="200" alt="product img" />
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{text}</p>
        <div>
          <p className="">$ {price}</p>
        </div>
      </div>
      {isAddedToCart ? (
        <button>Go to cart</button>
      ) : (
        <ItemCount onSubmitCount={onSubmitCount} max={stock} />
      )}
    </div>
  );
};

export default ItemDetail;
