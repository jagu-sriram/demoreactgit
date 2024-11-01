import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Registration from './Registration'
import Login from './Login'
import './navbar.css'
import APIDemo1 from '../apidemo/APIDemo1'
import APIDemo2 from './../apidemo/APIDemo2';

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
        <Link to="/apidemo">API Demo</Link>
        <Link to="/jsondemo">JSON Demo</Link>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="registration" element={<Registration/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="apidemo" element={<APIDemo1/>}/>
            <Route path="jsondemo" element={<APIDemo2/>}/>
        </Routes>
    </div>
  )
}
