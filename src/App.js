import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./componenets/reduxToolKIt/store/store";

import Counter from "./pages/counter/Counter";
function App() {
  return (
    //for redux tool kit practice 
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </BrowserRouter>

    </Provider>


  );
}

export default App;
