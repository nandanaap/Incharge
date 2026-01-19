import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
              Incharge
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300 font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300 font-medium">About</Link>
            <Link to="/podcast" className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300 font-medium">Podcast</Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300 font-medium">Courses</Link>
            <Link to="/contact" className="btn-primary animate-pulse-slow">Get in Touch</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary transform hover:scale-110 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-accent rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">Services</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">About</Link>
              <Link to="/podcast" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">Podcast</Link>
              <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">Courses</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-white rounded transition-all duration-300">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;