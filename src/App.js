import Home from './Pages/HomePage/Home/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auths/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import Header from './Pages/HomePage/Header/Header';
import Register from './Pages/Auths/Register/Register';
import ItemDetail from './Pages/ItemDetail/ItemDetail';



function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:inventoryId" element={<ItemDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>


    </div>
  );
}

export default App;
