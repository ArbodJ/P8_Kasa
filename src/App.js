import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import RentFile from "./pages/RentFile";

const App = ()  => {
  const { rentId } = useParams();
  console.log(rentId);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentfiles/:rentId" element={<RentFile />} />
        {/* le path="*" fonctionne si l'url est fausse ou ne correspond a rien d'existant */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
