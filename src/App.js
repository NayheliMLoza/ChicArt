import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './pages/ItemListContainer//ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter >
    <NavBar/> 
    <Routes>
      <Route path ='/'element={<ItemListContainer />} />
      <Route path="/category/:categoryid" element={<ItemListContainer />} />
      <Route path ="/item/:id" element={<ItemDetailContainer />} />
      <Route path= '*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

