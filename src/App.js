import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Project from "./Components/Pages/Project";
import NavBar from "./Components/Routing/NavBar";
import Blogs from "./Components/Pages/Blogs";
import Company from "./Components/Pages/Company";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/:page" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
