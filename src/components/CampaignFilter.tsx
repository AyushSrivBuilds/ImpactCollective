import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { FilterOptions } from '../types';

interface CampaignFilterProps {
  filterOptions: FilterOptions;
  onFilterChange: (filters: {
    cause: string | null;
    community: string | null;
    context: string | null;
    searchQuery: string;
  }) => void;
}

const CampaignFilter: React.FC<CampaignFilterProps> = ({ filterOptions, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cause, setCause] = useState<string | null>(null);
  const [community, setCommunity] = useState<string | null>(null);
  const [context, setContext] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({ cause, community, context, searchQuery: e.target.value });
  };

  const handleCauseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    setCause(value);
    onFilterChange({ cause: value, community, context, searchQuery });
  };

  const handleCommunityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    setCommunity(value);
    onFilterChange({ cause, community: value, context, searchQuery });
  };

  const handleContextChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    setContext(value);
    onFilterChange({ cause, community, context: value, searchQuery });
  };

  const clearFilters = () => {
    setCause(null);
    setCommunity(null);
    setContext(null);
    setSearchQuery('');
    onFilterChange({ cause: null, community: null, context: null, searchQuery: '' });
  };

  const hasActiveFilters = cause !== null || community !== null || context !== null || searchQuery !== '';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Search Campaigns</h2>
        
        <div className="flex items-center">
          <button 
            onClick={handleFilterToggle}
            className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg mr-2 hover:bg-green-100 transition duration-200"
          >
            <Filter className="w-4 h-4 mr-1" />
            Filters
          </button>
          
          {hasActiveFilters && (
            <button 
              onClick={clearFilters}
              className="flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition duration-200"
            >
              <X className="w-4 h-4 mr-1" />
              Clear
            </button>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 animate-fadeIn">
          <div>
            <label htmlFor="cause-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Cause
            </label>
            <select
              id="cause-filter"
              value={cause || ''}
              onChange={handleCauseChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Causes</option>
              {filterOptions.causes.map((causeOption) => (
                <option key={causeOption} value={causeOption}>
                  {causeOption}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="community-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Community
            </label>
            <select
              id="community-filter"
              value={community || ''}
              onChange={handleCommunityChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Communities</option>
              {filterOptions.communities.map((communityOption) => (
                <option key={communityOption} value={communityOption}>
                  {communityOption}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="context-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Context
            </label>
            <select
              id="context-filter"
              value={context || ''}
              onChange={handleContextChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">All Contexts</option>
              {filterOptions.contexts.map((contextOption) => (
                <option key={contextOption} value={contextOption}>
                  {contextOption}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {cause && (
            <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Cause: {cause}
              <button 
                onClick={() => {
                  setCause(null);
                  onFilterChange({ cause: null, community, context, searchQuery });
                }}
                className="ml-1 text-green-600 hover:text-green-800"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          
          {community && (
            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Community: {community}
              <button 
                onClick={() => {
                  setCommunity(null);
                  onFilterChange({ cause, community: null, context, searchQuery });
                }}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          
          {context && (
            <span className="inline-flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
              Context: {context}
              <button 
                onClick={() => {
                  setContext(null);
                  onFilterChange({ cause, community, context: null, searchQuery });
                }}
                className="ml-1 text-purple-600 hover:text-purple-800"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
          
          {searchQuery && (
            <span className="inline-flex items-center bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              Search: {searchQuery}
              <button 
                onClick={() => {
                  setSearchQuery('');
                  onFilterChange({ cause, community, context, searchQuery: '' });
                }}
                className="ml-1 text-gray-600 hover:text-gray-800"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CampaignFilter;