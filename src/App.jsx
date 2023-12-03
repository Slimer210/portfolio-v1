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
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
