import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reduxToolKIt/store/store";
import Product from "./pages/products/Product";
import Counter from "./pages/counter/Counter";
import Postes from "./pages/posts/Postes";
import Search from "./pages/posts/Search";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
function App() {
  return (
    //for redux tool kit practice 
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Postes />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>

    </Provider>


  );
}

export default App;
