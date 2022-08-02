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

function App() {
  return (
      <>

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main pageName="Главная страница"/>}/>
                <Route path="/about" element={<About text="Здесь должна быть информация о нас"/>}/>
                <Route path="/contacts" element={<Contacts text="Контакты пользователей"/>}/>
                <Route path="/address" element={<Address/>}/>
                <Route path="/catalog" element={<Catalog/>}>
                    <Route path="iphone" element={<Iphone/>}/>
                    <Route path="macBook" element={<MacBook/>}/>
                </Route>
                <Route path="/product/:name" element={<Product/>}/>
                {/*<Route path="/menu" element={<Menu/>}/>*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </>
  );
}

// localhost:3000/product/5
// localhost:3000/product/iphone
export default App;
