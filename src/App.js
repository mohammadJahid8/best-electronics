import Home from './Pages/HomePage/Home/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auths/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import Register from './Pages/Auths/Register/Register';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import RequireAuth from './Pages/Auths/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import Blogs from './Pages/Blogs/Blogs';
import NothingFound from './Pages/NothingFound/NothingFound';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Header from './Pages/HomePage/Header/Header';
import Footer from './Pages/HomePage/Footer/Footer';
import CreativeTeam from './Pages/CreativeTeam/CreativeTeam';



function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/creative' element={<CreativeTeam />} />

        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        } />

        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />

        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        } />

        <Route path='*' element={<NothingFound />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
