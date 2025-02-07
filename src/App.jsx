import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Welcome to Plantasia!" />}
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="Compras por categoría" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>

        <footer>
          <small>Created by Carolina Devia</small>
        </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
