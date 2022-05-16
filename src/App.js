import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppNav from "./AppNav";

import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Appbar from "./Appbar";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<AppNav />} />
          <Route path="product" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
