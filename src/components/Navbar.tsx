import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-emerald-200 shadow-md fixed w-full top-0">
            <div className="mx-auto px-15 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800 md:text-2xl hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                    Chris Sirimat
                </Link>
                <div className="flex items-center space-x-8">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}