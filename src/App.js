import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Product from "./Components/Pages/Product";
import Project from "./Components/Pages/Project";
import NavBar from "./Components/Routing/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
