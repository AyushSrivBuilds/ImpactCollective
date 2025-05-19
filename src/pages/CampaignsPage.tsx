import React, { useState, useEffect } from 'react';
import CampaignCard from '../components/CampaignCard';
import CampaignFilter from '../components/CampaignFilter';
import { campaigns, filterOptions } from '../data/campaigns';
import { Campaign } from '../types';

const CampaignsPage: React.FC = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>(campaigns);
  const [currentFilters, setCurrentFilters] = useState<{
    cause: string | null;
    community: string | null;
    context: string | null;
    searchQuery: string;
  }>({
    cause: null,
    community: null,
    context: null,
    searchQuery: '',
  });

  useEffect(() => {
    const { cause, community, context, searchQuery } = currentFilters;
    
    const filtered = campaigns.filter(campaign => {
      // Filter by cause
      if (cause && campaign.cause !== cause) {
        return false;
      }
      
      // Filter by community
      if (community && campaign.community !== community) {
        return false;
      }
      
      // Filter by context
      if (context && campaign.context !== context) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          campaign.title.toLowerCase().includes(query) ||
          campaign.shortDescription.toLowerCase().includes(query)
        );
      }
      
      return true;
    });
    
    setFilteredCampaigns(filtered);
  }, [currentFilters]);

  const handleFilterChange = (filters: {
    cause: string | null;
    community: string | null;
    context: string | null;
    searchQuery: string;
  }) => {
    setCurrentFilters(filters);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Social Campaigns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover campaigns that align with your values and interests. Filter by cause, community, or context to find ways to make an impact.
          </p>
        </div>
        
        <CampaignFilter filterOptions={filterOptions} onFilterChange={handleFilterChange} />
        
        {filteredCampaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Campaigns Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any campaigns matching your current filters.
            </p>
            <button
              onClick={() => handleFilterChange({ cause: null, community: null, context: null, searchQuery: '' })}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;