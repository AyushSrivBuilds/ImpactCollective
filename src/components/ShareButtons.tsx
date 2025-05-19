import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(window.location.href);
  
  return (
    <div className="flex space-x-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90 transition duration-200"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition duration-200"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-90 transition duration-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      
      <a
        href={`mailto:?subject=${encodedTitle}&body=Check out this campaign: ${encodedUrl}`}
        className="p-2 bg-[#EA4335] text-white rounded-full hover:bg-opacity-90 transition duration-200"
        aria-label="Share via Email"
      >
        <Mail size={20} />
      </a>
    </div>
  );
};

export default ShareButtons;