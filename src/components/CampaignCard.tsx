import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock } from 'lucide-react';
import { Campaign } from '../types';
import useCountdown from '../hooks/useCountdown';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const { days, hours, minutes, seconds } = useCountdown(new Date(campaign.startDate));
  const hasStarted = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title} 
          className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
          {campaign.cause}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{campaign.title}</h3>
        
        <div className="mb-4 text-sm text-gray-600">
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
            {campaign.community}
          </span>
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 mb-2">
            {campaign.context}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{campaign.shortDescription}</p>
        
        <div className="flex items-center mb-4 text-sm font-medium">
          <Clock className="w-4 h-4 mr-1 text-orange-500" />
          {hasStarted ? (
            <span className="text-green-600">Campaign Active</span>
          ) : (
            <span>
              Starts in: {days}d {hours}h {minutes}m {seconds}s
            </span>
          )}
        </div>
        
        <div className="flex justify-between mt-4">
          <Link 
            to={`/campaign/${campaign.id}`}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
          >
            Know More
          </Link>
          
          <Link 
            to={`/campaign/${campaign.id}?tab=shop`}
            className="inline-flex items-center bg-white border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded transition duration-200"
          >
            <ShoppingBag className="w-4 h-4 mr-1" />
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;