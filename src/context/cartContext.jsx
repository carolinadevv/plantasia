import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
        name: "carrito de compras",
      }}
    >
      {props.children}
    </cartContext.Provider>
  );

  function addItem(item) {
    const { price, title, text, img, id, count } = item;
    const copyCartItems = [...cartItems];
    copyCartItems.push({ price, title, text, img, id, count });
    setCartItems(copyCartItems);
  }

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState);
  }

  function getTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.count * item.price;
    });

    return totalPrice;
  }
}

export default cartContext;
