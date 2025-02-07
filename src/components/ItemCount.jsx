import { useState } from "react";

function ItemCount(props) {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count === props.max) return;
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  function handleClick() {
    props.onSubmitCount(count);
  }

  return (
    <div>
      <div>
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemCount;
