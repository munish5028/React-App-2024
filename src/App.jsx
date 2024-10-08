import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Catagary from "./components/Catagary";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Navigation from "./components/Navigation";
import Main from "./components/Main.jsx";
import View from "./View.jsx";
import Form from "./components/Form.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Loginuser from "./components/Loginuser.jsx";
import Crud from "./components/Crud.jsx";
import Loader from "./components/Loader.jsx";
import Not from "./components/Not.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/catagary" element={<Catagary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/view" element={<View />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loginuser" element={<Loginuser />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
