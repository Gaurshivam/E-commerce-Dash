import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Comps/Navbar/Nav';
import Signup from './Comps/LoginComps/Signup';
import Private from './Comps/LoginComps/Private';
import Login from './Comps/LoginComps/Login';
import AddProducts from './Comps/AddProducts';
import Products from './Comps/Products';
import UpdateProduct from './Comps/UpdateProduct';
import Profile from './Comps/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes >
        <Route element={<Private />} >
        <Route path='/' element={<Profile />} />
        <Route path='/product' element={<Products />} />
         <Route path='/add' element={<AddProducts />} />
        <Route path='/update/:id' element={<UpdateProduct />} />
        <Route path='/logout' element={<h2>Logout Component</h2>} />
        </Route>

        <Route path='/signup' element={<Signup /> } />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;