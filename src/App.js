import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <ItemListContainer />
        <ItemDetailContainer />
      </body>
    </div>
  );
}

export default App;
