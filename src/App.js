
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="articulos disponibles"/>
    </div>
  );
}

export default App;
