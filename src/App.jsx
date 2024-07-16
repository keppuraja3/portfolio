import React from 'react'
import { motion } from "framer-motion"
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App