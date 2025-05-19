import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Campaign } from '../types';

interface WebinarSectionProps {
  campaign: Campaign;
}

const WebinarSection: React.FC<WebinarSectionProps> = ({ campaign }) => {
  if (!campaign.webinars || campaign.webinars.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Webinars & Workshops</h3>
        <p className="text-gray-600">No webinars or workshops are currently scheduled for this campaign.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Webinars & Workshops</h3>
      <p className="text-gray-600 mb-6">
        Join our educational sessions to learn more about this cause and how you can make a difference.
      </p>
      
      <div className="space-y-6">
        {campaign.webinars.map((webinar, index) => {
          const webinarDate = new Date(webinar.date);
          const isFuture = webinarDate > new Date();
          
          return (
            <div 
              key={index} 
              className={`border ${isFuture ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'} rounded-lg p-4`}
            >
              <h4 className="font-semibold text-gray-800 mb-2">{webinar.title}</h4>
              <p className="text-gray-600 mb-3">{webinar.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                  {webinarDate.toLocaleDateString(undefined, { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1 text-blue-500" />
                  {webinarDate.toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1 text-blue-500" />
                  Virtual Event
                </div>
              </div>
              
              {isFuture && (
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Register Now
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebinarSection;