import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories, Story } from '../data/stories'; // Assuming Story interface is in stories.ts
import { ArrowLeft, Calendar, MapPin, User, Tag } from 'lucide-react';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the story you're looking for.</p>
        <Link 
          to="/stories" 
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to All Stories
        </Link>
      </div>
    );
  }

  // Dummy content for full story - replace with actual full story content
  const fullStoryContent = `
    <p class="mb-4 text-lg leading-relaxed">This is the beginning of the full story for "${story.title}". It would typically contain several paragraphs detailing the events, challenges, and outcomes related to this impact story. We are highlighting the journey of ${story.author} and the community in ${story.location || 'their area'}.</p>
    <p class="mb-4 text-lg leading-relaxed">The ${story.category} initiative faced numerous hurdles, but through perseverance and community support, significant progress was made. For instance, [mention a specific challenge and how it was overcome]. This led to [mention a specific positive outcome].</p>
    <h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Achievements</h3>
    <ul class="list-disc list-inside mb-6 text-lg space-y-2">
      <li>Achievement one related to the story.</li>
      <li>Another significant milestone reached.</li>
      <li>Impactful change observed in the community.</li>
    </ul>
    <p class="mb-4 text-lg leading-relaxed">The long-term effects of this project are expected to be [discuss long-term impact]. ${story.author} expressed, "${story.excerpt.substring(0, 50)}..." which underscores the profound difference made.</p>
    <p class="text-lg leading-relaxed">Further details and personal accounts would enrich this narrative, providing a comprehensive view of the success and the lessons learned from this inspiring endeavor.</p>
  `;


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Story Header */}
      {story.imageUrl && (
        <div className="relative h-96">
          <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 md:p-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{story.title}</h1>
              <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {story.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {!story.imageUrl && ( // Show title here if no image header
            <>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{story.title}</h1>
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
                {story.category}
              </span>
            </>
          )}

          {/* Story Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 space-x-4">
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4 text-green-600" />
              <span>By {story.author}</span>
            </div>
            {story.location && (
              <div className="flex items-center">
                <MapPin className="mr-1.5 h-4 w-4 text-green-600" />
                <span>{story.location}</span>
              </div>
            )}
            {/* You can add a date field to your Story interface if needed */}
            {/* <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4 text-green-600" />
              <span>Published on [Date]</span>
            </div> */}
          </div>
          
          {/* Full Story Content */}
          <article 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: fullStoryContent }}
          >
            {/* Content is set via dangerouslySetInnerHTML */}
          </article>

          <hr className="my-12" />

          {/* Back Link */}
          <div className="text-center">
            <Link 
              to="/stories" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;