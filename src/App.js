import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Order from './components/Order/Order';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
