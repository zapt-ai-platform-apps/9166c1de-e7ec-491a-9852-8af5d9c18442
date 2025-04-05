import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 shadow-sm">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
              className="h-8 mr-3" 
              alt="Earn Guide Logo" 
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Earn Guide</span>
          </Link>
        </div>
        
        <div className="flex items-center lg:hidden">
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1 mt-4 lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
            <li>
              <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary rounded lg:p-0" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/earning-methods" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary rounded lg:p-0" onClick={() => setIsMobileMenuOpen(false)}>
                Earning Methods
              </Link>
            </li>
            <li>
              <Link to="/tracker" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary rounded lg:p-0" onClick={() => setIsMobileMenuOpen(false)}>
                Tracker
              </Link>
            </li>
            <li>
              <Link to="/resources" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary rounded lg:p-0" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;