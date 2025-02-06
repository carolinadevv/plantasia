import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { title, text, price, category, img, stock } = props;
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
      <ItemCount max={stock} />
    </div>
  );
};

export default ItemDetail;
