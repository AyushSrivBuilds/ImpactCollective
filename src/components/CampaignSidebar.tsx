import React from 'react';
import { ShoppingBag, Calendar, DollarSign, Share2 } from 'lucide-react';
import { Campaign } from '../types';
import ShareButtons from './ShareButtons';

interface CampaignSidebarProps {
  campaign: Campaign;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CampaignSidebar: React.FC<CampaignSidebarProps> = ({ campaign, activeTab, onTabChange }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);

    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = 'st';
    } else if (day === 2 || day === 22) {
      daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
      daySuffix = 'rd';
    }

    return `${day}${daySuffix} ${month} '${year}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Get Involved</h3>
      
      <div className="space-y-4">
        <button
          onClick={() => onTabChange('shop')}
          className={`w-full flex items-center p-3 rounded-lg transition duration-200 ${
            activeTab === 'shop' 
              ? 'bg-green-600 text-white' 
              : 'bg-white border border-green-600 text-green-600 hover:bg-green-50'
          }`}
        >
          <ShoppingBag className="w-5 h-5 mr-3" />
          <span className="font-medium">Buy Merchandise</span>
        </button>
        
        <button
          onClick={() => onTabChange('webinar')}
          className={`w-full flex items-center p-3 rounded-lg transition duration-200 ${
            activeTab === 'webinar' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Calendar className="w-5 h-5 mr-3" />
          <span className="font-medium">Attend Webinar</span>
        </button>
        
        <button
          onClick={() => onTabChange('donate')}
          className={`w-full flex items-center p-3 rounded-lg transition duration-200 ${
            activeTab === 'donate' 
              ? 'bg-purple-600 text-white' 
              : 'bg-white border border-purple-600 text-purple-600 hover:bg-purple-50'
          }`}
        >
          <DollarSign className="w-5 h-5 mr-3" />
          <span className="font-medium">Donate</span>
        </button>
        
        <button
          onClick={() => onTabChange('share')}
          className={`w-full flex items-center p-3 rounded-lg transition duration-200 ${
            activeTab === 'share' 
              ? 'bg-orange-600 text-white' 
              : 'bg-white border border-orange-600 text-orange-600 hover:bg-orange-50'
          }`}
        >
          <Share2 className="w-5 h-5 mr-3" />
          <span className="font-medium">Share</span>
        </button>
      </div>
      
      {activeTab === 'share' && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-3">Share this campaign</h4>
          <ShareButtons title={campaign.title} />
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-700 mb-2">Campaign Information</h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Cause:</span>
            <span className="font-medium">{campaign.cause}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Community:</span>
            <span className="font-medium">{campaign.community}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Start Date:</span>
            <span className="font-medium">
              {formatDate(campaign.startDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSidebar;