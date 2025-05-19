import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Users, BookOpen } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CampaignCard from '../components/CampaignCard';
import { campaigns } from '../data/campaigns';
import { stories } from '../data/stories'; // Import stories
import StoryCard from '../components/StoryCard'; // Import StoryCard

const HomePage: React.FC = () => {
  // Get the 3 most recent campaigns for featuring
  const featuredCampaigns = [...campaigns]
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, 3);

  // Get the 3 most recent stories for preview
  const featuredStories = [...stories]
    // Assuming stories don't have a date, sort by ID or title for consistency, or add a date field
    .sort((a, b) => a.id.localeCompare(b.id)) // Example: sort by ID
    .slice(0, 3);


  return (
    <div>
      <HeroSection />
      
      {/* Featured Campaigns */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Campaigns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover campaigns making a real impact. Join these initiatives and be part of the change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/campaigns"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
            >
              View All Campaigns
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a difference is simple. Here's how you can get involved and support causes you care about.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Discover Causes</h3>
              <p className="text-gray-600">
                Explore campaigns focused on environmental protection, education, health, and community development.
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Get Involved</h3>
              <p className="text-gray-600">
                Support causes through donations, purchasing merchandise, or attending educational webinars.
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Create Impact</h3>
              <p className="text-gray-600">
                Be part of a community driving positive change and see the real-world impact of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Numbers */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">35+</div>
              <div className="text-green-200">Active Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12K+</div>
              <div className="text-green-200">Supporters</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$250K+</div>
              <div className="text-green-200">Funds Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-green-200">Communities Served</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stories of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from communities and individuals whose lives have been changed through our campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/stories"
              className="inline-flex items-center justify-center bg-white border border-green-600 text-green-600 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition duration-200"
            >
              Read More Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of individuals and organizations who are creating positive change through collective action.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/campaigns" 
              className="inline-flex items-center justify-center bg-white text-green-700 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition duration-200"
            >
              Browse Campaigns
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-green-600 border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-green-800 transition duration-200"
            >
              Start Your Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Quote = (props: { className?: string; size: number }) => {
  return (
    <BookOpen {...props} />
  );
};

export default HomePage;