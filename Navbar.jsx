import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){return (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src="/public/assets/logo.png" alt="logo" className="w-16 h-16 object-contain rounded-full border-2 border-maroon" />
        <div>
          <h1 className="text-maroon font-serif text-xl">Gayatri Bal Vidya Mandir School</h1>
          <p className="text-xs text-gray-600 italic">"First Ladder Towards Education, Development, Success and Building The Nation."</p>
        </div>
      </Link>
      <nav className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={({isActive})=> isActive? 'text-maroon font-semibold':'text-gray-700'}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive? 'text-maroon font-semibold':'text-gray-700'}>About</NavLink>
        <NavLink to="/notices" className={({isActive})=> isActive? 'text-maroon font-semibold':'text-gray-700'}>Notices & Vacancies</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive? 'text-maroon font-semibold':'text-gray-700'}>Contact</NavLink>
      </nav>
    </div>
  </header>
) }