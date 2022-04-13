import logo from "./logo.svg";
import "./App.css";
import Management from "./components/Management";
import Tables from "./components/Tables";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
