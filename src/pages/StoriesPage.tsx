import React from 'react';
import { Heart } from 'lucide-react';
import { stories } from '../data/stories';
import StoryCard from '../components/StoryCard';

const StoriesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Stories of Impact</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the real-life impact of our campaigns and the incredible individuals and communities we support.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Optional) */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have you been impacted by a campaign or have a story of change to share? We'd love to hear from you.
          </p>
          <a
            href="/contact" // Link to contact page or a specific story submission form
            className="inline-block bg-white text-green-800 font-medium px-8 py-3 rounded-lg hover:bg-green-100 transition duration-200"
          >
            Get in Touch <Heart className="ml-2 inline-block h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;