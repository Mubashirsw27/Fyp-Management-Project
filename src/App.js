import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import "../src/Components/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Test from "./Components/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Test/>} exact />
          <Route path="/signup" element={<Signup />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
