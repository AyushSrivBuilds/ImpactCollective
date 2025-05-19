import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import CartDrawer from './CartDrawer';

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center text-white mb-4 md:mb-0">
            <Globe className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">ImpactCollective</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-green-200 transition duration-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-green-200 transition duration-200">
              About
            </Link>
            <Link to="/campaigns" className="text-white hover:text-green-200 transition duration-200">
              Campaigns
            </Link>
            <Link to="/stories" className="text-white hover:text-green-200 transition duration-200">
              Stories
            </Link>
            <Link to="/contact" className="text-white hover:text-green-200 transition duration-200">
              Contact
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-green-800 rounded-full transition duration-200"
            >
              <CartIcon />
            </button>
          </nav>
        </div>
      </div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;