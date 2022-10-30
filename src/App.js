import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <ItemListContainer greetings="Bienvenidos!"/>
      </body>
    </div>
  );
}

export default App;
