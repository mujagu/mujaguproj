import React from "react";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";


function App() {
  return (
      <div className="App">
        < Header />
        <Router>
          <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/login' element={< Login />}></Route>
            <Route path='/signup' element={< SignupForm />}></Route>
          </Routes>
        </Router>
        
      </div>
      
      
  );
}

export default App;
