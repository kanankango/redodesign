import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
  return (
    <header className="navbar bg-purple-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="logo text-2xl font-bold text-gray-800">
          <Link to="/" className="text-gray-800 no-underline hover:text-gray-900">ANUJ GUPTA</Link> {/* Use Link for logo */}
        </h1>
        <nav>
          <ul className="nav-links hidden md:flex space-x-6">
            <li><Link to="/pages/book" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Book</Link></li> {/* Use Link for nav links */}
            <li><Link to="/pages/blog-post" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Blog Posts</Link></li>
            <li><Link to="/pages/talk" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Talks</Link></li>
            <li><Link to="/pages/workshop" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Workshop</Link></li>
            <li><Link to="/pages/publication" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Publications</Link></li>
            <li><Link to="/pages/coaching" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">Coaching</Link></li>
            <li><Link to="/pages/ai-playbook" className="text-gray-800 font-bold hover:border-b-2 hover:border-gray-700 pb-1 no-underline">AI Playbook</Link></li>
          </ul>
          <button className="hamburger md:hidden block">
            <i className="fas fa-bars text-gray-800"></i>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;