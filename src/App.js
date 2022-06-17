import { BrowserRouter, Routes, Route, Navigate, NavigationType } from 'react-router-dom';
import './App.css';
import Index from "./Pages/Index";
import Allproduct from "./Pages/Allproduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Productdetails from "./Pages/Productdetails";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route path="/productdetail" element={<Productdetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
