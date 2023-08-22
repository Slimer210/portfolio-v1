// Core import
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes Import
import Landing from './routes/Landing'
import About from './routes/About'
import Portfolio from './routes/Portfolio'
import Blog from './routes/Blog'
import Contact from './routes/Contact'


function Lol() {
  return (
    <h1>Hello</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<Lol />}/>
        <Route path="/portfolio" element={<Lol />}/>
        <Route path="/blog" element={<Lol />}/>
        <Route path="/contact" element={<Lol />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
