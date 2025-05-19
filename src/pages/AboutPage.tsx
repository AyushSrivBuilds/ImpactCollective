import React from 'react';
import { Briefcase, Users, Zap, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are dedicated to empowering change and fostering a global community committed to making a positive impact.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To connect passionate individuals and organizations with impactful causes, creating a ripple effect of positive change across the globe. We strive to provide a transparent and effective platform for fundraising, volunteering, and advocacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Empowerment</h3>
              <p className="text-gray-600">
                We empower individuals and groups to take action on issues they care about.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Impact</h3>
              <p className="text-gray-600">
                We focus on creating measurable and sustainable impact through our supported campaigns.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community of changemakers dedicated to collective action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
          </div>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
            <p>
              Founded in [Year], [Your Organization Name] was born out of a desire to bridge the gap between those who want to help and the causes that need support. We saw a world full of passionate individuals eager to make a difference but often unsure where to start or how to maximize their impact.
            </p>
            <p>
              Our journey began with a small team and a big vision: to create a platform that is not only user-friendly but also transparent, accountable, and truly effective in channeling resources to where they are most needed. Over the years, we've grown, learned, and adapted, always staying true to our core mission.
            </p>
            <p>
              Today, we are proud to have facilitated [Number] campaigns, supported [Number] communities, and mobilized a global network of donors, volunteers, and advocates. But our story is still being written, and we invite you to be a part of it.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals driving our mission forward.
            </p>
          </div>
          {/* Placeholder for team members - you can add actual team member cards here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-12 w-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Team Member {i}</h3>
                <p className="text-green-600">Role/Title</p>
                <p className="text-sm text-gray-500 mt-2">
                  A brief bio or description of the team member's contribution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a movement that's changing the world, one campaign at a time. Whether you donate, volunteer, or spread the word, your contribution matters.
          </p>
          <a
            href="/campaigns"
            className="inline-block bg-white text-green-700 font-medium px-8 py-3 rounded-lg hover:bg-green-50 transition duration-200"
          >
            Explore Campaigns
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;