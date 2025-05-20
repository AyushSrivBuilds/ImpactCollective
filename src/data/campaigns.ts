import { Campaign, FilterOptions } from '../types';

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Clean Ocean Initiative',
    shortDescription: 'Join our mission to clean coastal areas and protect marine life from plastic pollution.',
    fullDescription: `
      <p>The Clean Ocean Initiative aims to address the growing problem of plastic pollution in our oceans. Through community-led beach cleanups, educational workshops, and advocacy work, we're making a significant impact in protecting marine ecosystems.</p>
      
      <p>Our volunteers have removed over 5 tons of plastic waste from coastal areas in the last year alone. We work closely with marine biologists to identify the most affected areas and implement targeted cleanup operations.</p>
      
      <p>Beyond cleanups, we're focused on education and prevention. Our workshops teach participants about sustainable alternatives to single-use plastics and how small changes in daily habits can make a big difference for our oceans.</p>
      
      <h3>Goals for 2024-2025:</h3>
      <ul>
        <li>Remove 10 tons of plastic waste from coastal areas</li>
        <li>Conduct 50 educational workshops in schools and communities</li>
        <li>Partner with 10 local businesses to implement plastic-free policies</li>
        <li>Launch a marine life rehabilitation program</li>
      </ul>
    `,
    startDate: '2025-12-15T10:00:00Z',
    cause: 'Environment',
    community: 'IIFT Delhi',
    context: 'Environment Campaign',
    imageUrl: 'https://assets.theoceancleanup.com/scaled/1100x/app/uploads/2021/08/211008-Oceans-System-002-Trip-2-Offload-S1H-DvdK-85-scaled.jpg.webp',
    merchandise: [
      {
        id: '1-1',
        title: 'Ocean Friend T-Shirt',
        price: 25.99,
        imageUrl: 'https://images.pexels.com/photos/5710148/pexels-photo-5710148.jpeg'
      },
      {
        id: '1-2',
        title: 'Reusable Water Bottle',
        price: 18.50,
        imageUrl: 'https://images.pexels.com/photos/4000086/pexels-photo-4000086.jpeg'
      }
    ],
    webinars: [
      {
        title: 'Marine Conservation Basics',
        date: '2023-12-20T18:00:00Z',
        description: 'Learn about the fundamentals of marine conservation and how you can contribute.'
      },
      {
        title: 'Plastic-Free Living Workshop',
        date: '2024-01-10T17:00:00Z',
        description: 'Practical tips and strategies for reducing plastic usage in your daily life.'
      }
    ],
    impactStories: [
      {
        title: 'A Cleaner Shore for Local Wildlife',
        story: 'After our cleanup at Silver Beach, local conservationists reported a 30% increase in nesting sea turtles returning to the area.',
        author: 'Dr. Maya Patel, Marine Biologist'
      }
    ]
  },
  {
    id: '2',
    title: 'Forest Restoration Project',
    shortDescription: 'Help us plant trees and restore native forests in areas affected by deforestation.',
    fullDescription: `
      <p>The Forest Restoration Project is dedicated to reforesting areas that have been affected by deforestation, wildfires, and urban development. Our approach combines scientific research, community engagement, and sustainable practices to ensure long-term success.</p>
      
      <p>We work with local communities to plant native species that will thrive in the specific climate and soil conditions of each area. This approach helps restore biodiversity and creates sustainable ecosystems that can support local wildlife.</p>
      
      <p>Our team includes forestry experts, ecologists, and community organizers who work together to maximize the impact of each planting event and monitor the growth and health of restored areas.</p>
      
      <h3>Key Achievements:</h3>
      <ul>
        <li>Planted over 50,000 trees across 15 locations</li>
        <li>Restored 500 acres of degraded forest land</li>
        <li>Created habitats for 30+ endangered species</li>
        <li>Engaged 2,000+ volunteers in planting activities</li>
      </ul>
    `,
    startDate: '2025-11-01T09:00:00Z',
    cause: 'Environment',
    community: 'Green Earth Society',
    context: 'Reforestation Campaign',
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    merchandise: [
      {
        id: '2-1',
        title: 'Plant a Tree Kit',
        price: 15.99,
        imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg'
      }
    ],
    webinars: [
      {
        title: 'Native Plant Selection',
        date: '2023-11-15T16:00:00Z',
        description: 'Learn how to identify and select native plants for successful reforestation projects.'
      }
    ],
    impactStories: [
      {
        title: 'From Barren Land to Thriving Forest',
        story: 'What was once a barren hillside is now a thriving young forest, home to numerous bird species and small mammals. Local communities report improved air quality and reduced soil erosion.',
        author: 'James Wong, Project Coordinator'
      }
    ]
  },
  {
    id: '3',
    title: 'Tech for Good Hackathon',
    shortDescription: 'Join our hackathon to develop innovative tech solutions for social challenges.',
    fullDescription: `
      <p>The Tech for Good Hackathon brings together developers, designers, and innovators to create technology solutions that address pressing social and environmental issues. Participants will work in teams to build prototypes and present their ideas to a panel of judges.</p>
      <p>This year's themes include sustainable living, accessible education, and community health. We provide mentorship, resources, and a collaborative environment to foster creativity and impact.</p>
      <h3>Event Highlights:</h3>
      <ul>
        <li>Workshops on emerging technologies</li>
        <li>Networking opportunities with industry leaders</li>
        <li>Prizes for winning teams</li>
        <li>Opportunity to develop real-world solutions</li>
      </ul>
    `,
    startDate: '2025-08-10T09:00:00Z',
    cause: 'Technology',
    community: 'Global Tech Community',
    context: 'Innovation Challenge',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    merchandise: [
      {
        id: '3-1',
        title: 'Hackathon Hoodie',
        price: 35.00,
        imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
      },
      {
        id: '3-2',
        title: 'Developer Sticker Pack',
        price: 9.99,
        imageUrl: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
      }
    ],
    webinars: [
      {
        title: 'Intro to Impact Tech',
        date: '2024-07-20T18:00:00Z',
        description: 'Explore how technology can be a force for positive change.'
      }
    ],
    impactStories: [
      {
        title: 'Winning Solution for Local Food Banks',
        story: 'Last year\'s winning team developed an app that optimized food distribution for local food banks, reducing waste and improving access for those in need.',
        author: 'Sarah Chen, Hackathon Organizer'
      }
    ]
  },
  {
    id: '4',
    title: 'Youth Empowerment Workshops',
    shortDescription: 'Empowering young individuals with skills, confidence, and opportunities for a brighter future.',
    fullDescription: `
      <p>Our Youth Empowerment Workshops provide young people aged 15-24 with essential life skills, career guidance, and mentorship. We believe in nurturing the potential of every young individual to become a leader and change-maker in their community.</p>
      <p>Workshops cover topics such as public speaking, financial literacy, digital skills, and mental well-being. We partner with local schools and community centers to reach a diverse group of participants.</p>
      <h3>Program Goals:</h3>
      <ul>
        <li>Reach 500 young people in the next year</li>
        <li>Provide 200 hours of workshop content</li>
        <li>Establish a mentorship network connecting youth with professionals</li>
        <li>Improve participants\' confidence and employability</li>
      </ul>
    `,
    startDate: '2025-09-05T14:00:00Z',
    cause: 'Education',
    community: 'Local Youth Centers',
    context: 'Skill Development Program',
    imageUrl: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg',
    merchandise: [
      {
        id: '4-1',
        title: 'Empower Youth T-Shirt',
        price: 22.00,
        imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
      }
    ],
    webinars: [
      {
        title: 'Building Your Personal Brand',
        date: '2024-08-15T17:00:00Z',
        description: 'Tips for young professionals on creating a strong personal brand online and offline.'
      }
    ],
    impactStories: [
      {
        title: 'From Shy Student to Confident Speaker',
        story: 'After attending our public speaking workshop, Maria, a high school student, overcame her fear and delivered a powerful speech at her school assembly.',
        author: 'John Davis, Workshop Facilitator'
      }
    ]
  }
];

export const filterOptions: FilterOptions = {
  causes: Array.from(new Set(campaigns.map(campaign => campaign.cause))),
  communities: Array.from(new Set(campaigns.map(campaign => campaign.community))),
  contexts: Array.from(new Set(campaigns.map(campaign => campaign.context)))
};