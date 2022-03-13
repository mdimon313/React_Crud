import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Edit from "./components/pages/user/Edit";
import View from "./components/pages/user/UserView";
import Registration from "./components/pages/register/Registration";
import Nav from "./components/utility/Nav";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register/registration" element={<Registration />} />
        <Route path="/user/edit/:id" element={<Edit />} />
        <Route path="/user/:id" element={<View />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
