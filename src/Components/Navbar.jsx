import React from 'react';
import logo from "../assets/image.png"
import { NavLink } from 'react-router-dom';

function Navbar() { 
  return (
    <nav className="relative w-full bg-[#0A0F1A] shadow-md">
      <div className="flex justify-between items-center px-6 py-4 h-34">
        <img src={logo} className="w-32 h-32 rounded-full" alt="logo" />
        <ul className="flex gap-8 text-lg font-semibold text-shadow-lg cursor-pointer" style={{ color: '#00FFFF', fontFamily: 'Orbitron' }}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-2xl text-white" : "text-2xl hover:text-white"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/coins" className={({ isActive }) => isActive ? "text-2xl text-white" : "text-2xl hover:text-white"}>
              Coins
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => isActive ? "text-2xl text-white" : "text-2xl hover:text-white"}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" className={({ isActive }) => isActive ? "text-2xl text-white" : "text-2xl hover:text-white"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"></div>
    </nav>
  );
}

export default Navbar;
