import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-green-900 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          opacity: '0.3'
        }}
      />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Make a Difference Through Collective Action
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Join campaigns that matter. Support causes that create positive change in communities worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/campaigns" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
            >
              Explore Campaigns
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a 
              href="#featured" 
              className="inline-flex items-center justify-center bg-white text-green-700 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;