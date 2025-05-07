import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reduxToolKIt/store/store";
import Product from "./pages/products/Product";
import Counter from "./pages/counter/Counter";
function App() {
  return (
    //for redux tool kit practice 
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>

    </Provider>


  );
}

export default App;
