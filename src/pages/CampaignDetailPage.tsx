import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { campaigns } from '../data/campaigns';
import { Campaign } from '../types';
import CampaignSidebar from '../components/CampaignSidebar';
import MerchandiseSection from '../components/MerchandiseSection';
import WebinarSection from '../components/WebinarSection';
import DonateSection from '../components/DonateSection';
import ImpactStoriesSection from '../components/ImpactStoriesSection';

const CampaignDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [activeTab, setActiveTab] = useState<string>('description');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Simulate API call to get campaign details
    const timer = setTimeout(() => {
      const foundCampaign = campaigns.find(camp => camp.id === id);
      setCampaign(foundCampaign || null);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }
  
  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Campaign Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The campaign you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/campaigns" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
          >
            View All Campaigns
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img 
              src={campaign.imageUrl} 
              alt={campaign.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {campaign.cause}
                  </span>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {campaign.community}
                  </span>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {campaign.context}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{campaign.title}</h1>
                <p className="text-lg text-white/90 max-w-3xl">
                  {campaign.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'description' && (
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About This Campaign</h2>
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: campaign.fullDescription }}
                />
              </div>
            )}
            
            {activeTab === 'shop' && (
              <MerchandiseSection campaign={campaign} />
            )}
            
            {activeTab === 'webinar' && (
              <WebinarSection campaign={campaign} />
            )}
            
            {activeTab === 'donate' && (
              <DonateSection />
            )}
            
            {activeTab === 'share' && (
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Share This Campaign</h2>
                <p className="text-gray-600 mb-6">
                  Help spread the word about this initiative by sharing it with your network.
                </p>
              </div>
            )}
            
            {/* Always show Impact Stories regardless of tab */}
            <ImpactStoriesSection campaign={campaign} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CampaignSidebar 
              campaign={campaign} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailPage;