import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">ImpactCollective</h2>
            <p className="text-gray-300 mb-4">
              Connecting communities to create positive social change through collective action.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-200">Home</a></li>
              <li><a href="/campaigns" className="text-gray-300 hover:text-white transition duration-200">Campaigns</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition duration-200">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Causes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Environment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Education</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-200">Community Development</a></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Impact Street, New Delhi, India</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@impactcollective.org</span>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ImpactCollective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;