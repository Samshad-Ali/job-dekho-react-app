import React from "react";
import {Route,Routes} from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Toaster} from 'react-hot-toast';
import RequiredUser from "./components/RequiredUser";
import JobDetail from "./components/JobDetail";
import Apply from "./components/Apply";
const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
        <Route/>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<RequiredUser/>}>
        <Route path="/home" element={<Home/>} /> 
        <Route path="/jobdetails/:id"  element={<JobDetail/>} />
        <Route path="/apply" element={<Apply/>} /> 
        </Route>
        <Route/>
    </Routes>
    </>
  )
}

export default App