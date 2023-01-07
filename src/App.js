import React from "react";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
      <Routes>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
