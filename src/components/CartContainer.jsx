import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/database";

function CartContainer() {
  const [userData, setUserData] = useState({
    username: "",
    surname: "",
    age: "",
  });

  function onInputChange(e) {
    const inputName = e.target.name;
    const newUserData = { ...userData };
    newUserData[inputName] = e.target.value;
    setUserData(newUserData);
  }

  const { cartItems, removeItem, getTotalPrice } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      buyer: {
        username: userData.username,
        surname: userData.surname,
        age: userData.age,
      },
      items: cartItems,
      total: getTotalPrice(),
      date: new Date(),
    };

    const newOrderID = await createBuyOrder(orderData);
    console.log("Success", newOrderID);
  }

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </div>
          <hr />
        </div>
      ))}
      <form>
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Name</label>
          <input name="username" type="text" onChange={onInputChange} />
        </div>

        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Surname</label>
          <input name="surname" type="text" onChange={onInputChange} />
        </div>

        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Age</label>
          <input name="age" type="text" onChange={onInputChange} />
        </div>

        <button
          disabled={
            !(
              userData.username !== "" &&
              userData.surname !== "" &&
              userData.age !== ""
            )
          }
          onClick={handleCheckout}
        >
          Buy
        </button>
      </form>
    </div>
  );
}

export default CartContainer;
