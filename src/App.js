import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/Layout/NavBar";
import Index from "./Components/Pages";
import Countries from "./Components/Pages/Countries";
import About_us from "./Components/Pages/About_us";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/about_us" element={<About_us />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
