import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import getAsyncData, { getAsyncItemsByCategory } from "../data/getAsyncData";

const ItemListContainer = ({ greeting }) => {
  const { catid } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (catid === undefined) {
      const productsPromise = getAsyncData();
      productsPromise
        .then((products) => {
          console.log("products", products), setProducts(products);
        })
        .catch((error) => alert(error));
    } else {
      const productsPromise = getAsyncItemsByCategory(catid);
      productsPromise
        .then((products) => {
          console.log("products", products), setProducts(products);
        })
        .catch((error) => alert(error));
    }
  }, [catid]);
  return (
    <div>
      <ItemList greeting={greeting} products={products} />
    </div>
  );
};

export default ItemListContainer;
