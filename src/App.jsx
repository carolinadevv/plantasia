import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Welcome to Plantasia!"></ItemListContainer>
    </>
  );
}

export default App;
