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

function Navigation() {
  return(
    <nav className='inline-block top-6 items-center self-center w-screen'>
          <div className='self-center w-content bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-xl shadow-lg gap-x-8 flex font-black text-black-text'>
            <a>主页</a>
            <a>关于我</a>
            <a>作品</a>
            <a>博客</a>
            <a>联系我</a>
          </div>
      </nav>
  )
}

function Lol() {
  return (
    <h1>Hello</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
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
