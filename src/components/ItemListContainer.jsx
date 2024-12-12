const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontSize: "24px",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return <div style={containerStyle}>{greeting}</div>;
};

export default ItemListContainer;
