import { BookOpen } from 'lucide-react'; // Assuming BookOpen might be used in a StoryCard component later

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  author: string;
  location?: string;
  category: string;
  fullStoryLink?: string;
}

export const stories: Story[] = [
  {
    id: 'story-1',
    title: 'Clean Water Transforms a Village',
    excerpt: "The clean water initiative has transformed our village. Our children are healthier and can attend school regularly, and women no longer have to walk miles each day to collect water. Life has improved immensely.",
    author: 'Elena Muthoni',
    location: 'Nakuru County, Kenya',
    category: 'Health & Sanitation',
    imageUrl: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image001RLSL.jpg', // Health & Sanitation: Water tap
  },
  {
    id: 'story-2',
    title: 'Empowering Youth Through Education',
    excerpt: "Thanks to the new school supplies and dedicated tutors, students in our community are now more engaged and performing better in their studies. The future looks brighter for them.",
    author: 'David K.',
    location: 'Rural Community, Ghana',
    category: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop', // Education: Students in a classroom
  },
  {
    id: 'story-3',
    title: 'Reforestation Brings Back Wildlife',
    excerpt: "Our reforestation project has not only helped combat climate change but has also seen the return of several native bird and animal species to the area. It's a testament to what collective effort can achieve.",
    author: 'Maria S.',
    location: 'Amazon Rainforest, Brazil',
    category: 'Environment',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop', // Environment: Lush forest
  },
  {
    id: 'story-4',
    title: 'Tech Hub Ignites Innovation',
    excerpt: "The new community tech hub provides access to computers and internet for aspiring entrepreneurs and students. We've already seen several small businesses launch from here!",
    author: 'Johnathan P.',
    location: 'Urban Center, Nigeria',
    category: 'Community Development',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&auto=format&fit=crop', // Community Development: People working on laptops
  }
];