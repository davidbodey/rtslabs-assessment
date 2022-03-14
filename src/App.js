import Header from "./components/Header";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import TextSearch from "./components/TextSearch";
import ImageSearch from "./components/ImageSearch";

function App() {
  return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<ImageSearch />} />
          <Route path="/images" element={<ImageSearch />} />
          <Route path="/news" element={<TextSearch />} />
        </Routes>
      </div>
  );
}

export default App;
