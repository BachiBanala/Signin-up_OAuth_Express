// import { useState } from 'react'
import axios from "axios"
import Login from "./login/Login.jsx"
import SignUp from './signup/Signup.jsx'
import Home from "./Home/Home.jsx"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { useEffect } from "react"

// import './App.css'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
         <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
