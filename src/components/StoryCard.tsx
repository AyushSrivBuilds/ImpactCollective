import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Story } from '../data/stories'; // Assuming Story interface is in stories.ts

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {story.imageUrl && (
        <Link to={`/stories/${story.id}`} className="block">
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="w-full h-56 object-cover hover:opacity-90 transition-opacity duration-200"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 self-start">
          {story.category}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Link to={`/stories/${story.id}`} className="hover:text-green-600 transition-colors duration-200">
            {story.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{story.excerpt}</p>
        <div className="mt-auto">
          <p className="text-xs text-gray-500 font-medium">{story.author}</p>
          {story.location && <p className="text-xs text-gray-500">{story.location}</p>}
          {story.fullStoryLink ? (
            <a 
              href={story.fullStoryLink} 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Story <BookOpen className="ml-1.5 h-4 w-4" />
            </a>
          ) : (
            <Link 
              to={`/stories/${story.id}`}
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm mt-3"
            >
              Read More <BookOpen className="ml-1.5 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;