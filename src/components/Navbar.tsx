import { useState } from "react";
import {NavLink } from "react-router-dom";



export default function Navbar() {
    return (
        <nav className="bg-emerald-200 shadow-md fixed w-full top-0">
            <div className="mx-auto px-15 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                    Chris Sirimat
                </NavLink>
                <div className="flex items-center space-x-8">
                        <NavLink to="/" className={({isActive}) => 
                            `nav-link ${isActive ? " underline underline-offset-8" : ""}`
                        }>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => 
                      `nav-link ${isActive ? "underline underline-offset-8" : ""}`
                        }>
                            About
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => 
                      `nav-link ${isActive ? "underline underline-offset-8" : ""}`
                        }>
                            Projects
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => 
                      `nav-link ${isActive ? "underline underline-offset-8" : ""}`
                        }>
                            Contact
                        </NavLink>
                </div>
            </div>
        </nav>
    )
}