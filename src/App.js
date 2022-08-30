
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import Navtop from './Components/NavTop/Navtop.js'
import Cart from './Components/Cartitems/Cart.js'

function App() {
  return (
    <div className="container mx-auto">


      <Navtop />
      <Navbar />
      <Routes>
       
        <Route path='/' exact element={<Products />}></Route>
        <Route path='/:category_id' element={<Products />}></Route>
        <Route path='/product/:product_id' element={<ProductDetail />}></Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart/product/:product_id" element={<ProductDetail/>} />
      </Routes>



    </div>
  );
}

export default App;
