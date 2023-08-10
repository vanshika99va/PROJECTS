import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/home/Home.jsx";
import Navigation from "../routes/navigation/Navigation.jsx";
import SignIn from "../routes/sign-in/SignIn.jsx";

const Shop = () => {
  return <div>shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
