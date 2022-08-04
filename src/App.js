import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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
                <Route path="/goods/:id" element={<Goods/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

  );
}

// localhost:3000/product/5
// localhost:3000/product/iphone

// localhost:3000/product - NotFound
// localhost:3000/product/1 - Product

export default App;
