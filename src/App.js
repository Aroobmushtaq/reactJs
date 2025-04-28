import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Facebook from "./componenets/assignments/facebook-posts-app-assigment/Facebook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facebook />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
