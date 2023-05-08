import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Products from "./components/Products";
import UserAdd from "./components/UserAdd";

//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
        <Route path="/users/add" element={<UserAdd />} />
        <Route path="/products/:productId" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
