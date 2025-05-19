import React from 'react';
import { Campaign } from '../types';
import { Quote } from 'lucide-react';

interface ImpactStoriesSectionProps {
  campaign: Campaign;
}

const ImpactStoriesSection: React.FC<ImpactStoriesSectionProps> = ({ campaign }) => {
  if (!campaign.impactStories || campaign.impactStories.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Impact Stories</h3>
      <p className="text-gray-600 mb-6">
        Real stories of how this campaign is making a difference.
      </p>
      
      <div className="space-y-6">
        {campaign.impactStories.map((story, index) => (
          <div key={index} className="rounded-lg bg-gray-50 p-6 relative">
            <Quote className="absolute top-4 right-4 text-gray-200" size={36} />
            
            <h4 className="font-semibold text-lg text-gray-800 mb-3">{story.title}</h4>
            <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                {story.author.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-medium">{story.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStoriesSection;