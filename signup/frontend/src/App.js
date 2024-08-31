import React from "react";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
      <div className="App">
          <Login />
          <SignupForm />
      </div>
      
      
  );
}

export default App;
