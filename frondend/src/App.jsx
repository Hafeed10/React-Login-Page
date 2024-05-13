import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './componse/Login';
import Signup from './componse/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="home">
      <h1 style={{display:'flex',  justifyContent:'center', alignItems: 'center'}}>Welcome to the Home Page!</h1>; 
    </div>
  )
}

export default App;
