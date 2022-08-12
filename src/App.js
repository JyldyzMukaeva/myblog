import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts"
import Address from "./pages/Address/Address";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Iphone/Iphone";
import MacBook from "./pages/MacBook/MacBook";
import Product from "./pages/Product/Product";
import Watch from "./pages/IwatchCard/Iwatch";
import Goods from "./pages/Goods/Goods";
import Products from "./pages/Admin/Products/Products";
import IphoneAdmin from "./pages/Admin/IphoneAdmin/IphoneAdmin";
import UpdateProduct from "./pages/Admin/UpdateProduct/UpdateProduct";
import Cart from "./pages/Cart/Cart";


function App() {
  return (


        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main pageName="Главная страница"/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts text="Контакты пользователей"/>}/>
                <Route path="/address" element={<Address/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/catalog/macBook" element={<MacBook/>}/>
                <Route path="/catalog/iphone" element={<Iphone/>}/>
                <Route path="/catalog/watch" element={<Watch/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin/add-products" element={<Products/>}/>
                <Route path="/admin/iphone" element={<IphoneAdmin/>}/>
                <Route path="/admin/update-product/:id" element={<UpdateProduct/>}/>
                <Route path="/goods/:id" element={<Goods/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>

  );
}

// localhost:3000/product/5
// localhost:3000/product/iphone

// localhost:3000/product - NotFound
// localhost:3000/product/1 - Product

export default App;
