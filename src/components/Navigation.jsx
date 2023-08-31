import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className='fixed top-6 items-center self-center'>
          <div className='self-center w-content bg-white bg-opacity-70 backdrop-blur-lg p-3 rounded-xl shadow-lg gap-x-2 flex font-black text-black-text'>
          <NavLink to="/" className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active bg-gray-500 bg-opacity-20 hover:bg-opacity-10 shadow-lg" : ""} py-3 px-4 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 duration-300 whitespace-nowrap`}>主页</NavLink>
          <NavLink to="/about" className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active bg-gray-500 bg-opacity-20 hover:bg-opacity-10 shadow-lg" : ""} py-3 px-4 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 duration-300 whitespace-nowrap`}>关于我</NavLink>
          <NavLink to="/portfolio" className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active bg-gray-500 bg-opacity-20 hover:bg-opacity-10 shadow-lg" : ""} py-3 px-4 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 duration-300 whitespace-nowrap`}>作品</NavLink>
          <NavLink to="/blog" className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active bg-gray-500 bg-opacity-20 hover:bg-opacity-10 shadow-lg" : ""} py-3 px-4 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 duration-300 whitespace-nowrap`}>博客</NavLink>
          <NavLink to="/contact" className={({ isActive, isPending }) => `${isPending ? "pending" : isActive ? "active bg-gray-500 bg-opacity-20 hover:bg-opacity-10 shadow-lg" : ""} py-3 px-4 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 duration-300 whitespace-nowrap`}>联系我</NavLink>
          </div>
        </nav>
    )
}