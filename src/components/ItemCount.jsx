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

  console.log(props);
  return (
    <div>
      <div>
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;
