import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAsyncItemById } from "../data/database";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  return <ItemDetail {...product}></ItemDetail>;
};

export default ItemDetailContainer;
