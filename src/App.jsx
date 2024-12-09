import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Welcome to Plantasia!"></ItemListContainer>
    </>
  );
}

export default App;
