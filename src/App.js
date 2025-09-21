import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navebar/Navbar';
import Shopes from './Pages/Shopes';
import ShopeCatagory from './Pages/ShopeCatagory';
import Product from './Pages/Product';
import Cart from './Pages/CSS/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import CartItems from './Components/CartItems/CartItems';




function App() {
  return (
  <div>
    <BrowserRouter>
     <Navbar />
     {/* <CartItems /> */}
     <Routes>
      <Route path='/' element = {<Shopes />} />
      <Route path='/mens' element = {<ShopeCatagory banner = {men_banner} category = "men"/>} />
      <Route path='/womens' element = {<ShopeCatagory banner = {women_banner} category = "women" />} />
      <Route path='/kids' element = {<ShopeCatagory banner = {kid_banner} category = "kid" />} />
      <Route path='/product' element = {<Product/>}>
      <Route path=':productId' element = {<Product />} />
      </Route>
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/login' element = {<LoginSignup />} />
     </Routes>
     <Footer />
     </BrowserRouter>
     
    </div>
  );
}

export default App;
