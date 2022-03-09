import './App.css';
import Header from "./components/Header";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Search from "./components/Search";
import History from "./components/History";


function App() {
  const [history, setHistory] = useState([]);
  return (
          <div>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Search app={{history,setHistory}} />} />
              <Route path="/search" element={<Search app={{history,setHistory}} />} />
              <Route path="/history" element={<History app={{history}}/>} />
            </Routes>
          </div>
  );
}

export default App;
