import React from 'react';
import { 
  FaLaptopCode, FaCamera, FaYoutube, FaPenNib, FaShoppingBag, 
  FaBookReader, FaChartLine, FaPodcast, FaHandsHelping, FaHome,
  FaGraduationCap, FaGamepad, FaEnvelope, FaUserFriends
} from 'react-icons/fa';

export const earningMethodsData = [
  {
    id: 1,
    name: 'Freelance Web Development',
    description: 'Create websites and web applications for clients around the world. Freelance web development is in high demand as businesses of all sizes need online presence. You can specialize in front-end, back-end, or full-stack development.',
    icon: <FaLaptopCode size={24} color="white" />,
    color: '#3b82f6',
    difficultyLevel: 'Intermediate',
    earningPotential: '$500-2000/month',
    keyPoints: [
      'Learn HTML, CSS, JavaScript, and a framework like React or Vue',
      'Create a portfolio showcasing your work',
      'Sign up on platforms like Upwork, Fiverr, or Freelancer',
      'Network in tech communities to find direct clients'
    ],
    learnMoreUrl: 'https://www.freecodecamp.org/news/how-to-become-a-freelance-web-developer/'
  },
  {
    id: 2,
    name: 'Stock Photography',
    description: 'Shoot and sell stock photographs on platforms like Shutterstock, Adobe Stock, and iStock. Quality photos that businesses can use for marketing materials are always in demand. Focus on popular categories or underserved niches.',
    icon: <FaCamera size={24} color="white" />,
    color: '#ec4899',
    difficultyLevel: 'Beginner',
    earningPotential: '$100-500/month',
    keyPoints: [
      'Invest in a decent camera or use a good smartphone',
      'Learn basic photography and editing skills',
      'Create diverse portfolios on multiple stock sites',
      'Focus on in-demand categories like business, lifestyle, and technology'
    ],
    learnMoreUrl: 'https://www.shopify.com/blog/how-to-sell-photos-online'
  },
  {
    id: 3,
    name: 'YouTube Content Creation',
    description: 'Create and monetize video content on YouTube. Successful channels can earn from ads, sponsorships, merchandise, and more. Find a niche you're passionate about and consistently create valuable or entertaining content.',
    icon: <FaYoutube size={24} color="white" />,
    color: '#ef4444',
    difficultyLevel: 'Intermediate',
    earningPotential: '$200-5000/month',
    keyPoints: [
      'Choose a profitable niche you're knowledgeable about',
      'Invest in basic video and audio equipment',
      'Learn video editing and SEO for YouTube',
      'Be consistent with your posting schedule'
    ],
    learnMoreUrl: 'https://www.shopify.com/blog/youtube-money'
  },
  {
    id: 4,
    name: 'Freelance Writing',
    description: 'Write articles, blog posts, and other content for businesses and publications. Content marketing continues to grow, creating demand for skilled writers who can create engaging and informative content across various industries.',
    icon: <FaPenNib size={24} color="white" />,
    color: '#8b5cf6',
    difficultyLevel: 'Beginner',
    earningPotential: '$200-1000/month',
    keyPoints: [
      'Develop a writing portfolio with samples in your niche',
      'Sign up on platforms like Contently, Skyword, or Upwork',
      'Pitch directly to blogs and publications in your field',
      'Consider specializing in technical or niche content for higher rates'
    ],
    learnMoreUrl: 'https://www.freelancewriting.com/freelance-writing/freelance-writing-guide/'
  },
  {
    id: 5,
    name: 'E-commerce Store',
    description: 'Start an online store selling physical or digital products. You can sell your own products, dropship, or use print-on-demand services. E-commerce continues to grow as more consumers shop online for convenience and variety.',
    icon: <FaShoppingBag size={24} color="white" />,
    color: '#10b981',
    difficultyLevel: 'Intermediate',
    earningPotential: '$500-10000/month',
    keyPoints: [
      'Choose between dropshipping, print-on-demand, or inventory-based',
      'Find a profitable niche with good demand',
      'Set up a store on Shopify or similar platform',
      'Learn digital marketing to drive traffic to your store'
    ],
    learnMoreUrl: 'https://www.shopify.com/blog/start-online-store'
  },
  {
    id: 6,
    name: 'Online Courses',
    description: 'Create and sell courses teaching your skills or knowledge. Platforms like Udemy, Teachable, and Kajabi make it easy to create and market your courses to people eager to learn new skills or improve existing ones.',
    icon: <FaBookReader size={24} color="white" />,
    color: '#f59e0b',
    difficultyLevel: 'Intermediate',
    earningPotential: '$300-3000/month',
    keyPoints: [
      'Choose a topic you're knowledgeable about with market demand',
      'Plan and structure your course content carefully',
      'Invest in decent video and audio equipment',
      'Market your course through multiple channels'
    ],
    learnMoreUrl: 'https://www.teachable.com/blog/how-to-create-an-online-course'
  },
  {
    id: 7,
    name: 'Affiliate Marketing',
    description: 'Promote products or services and earn commission on sales. You can do this through a blog, YouTube channel, social media, or email list. Success depends on building trust with your audience and promoting relevant products.',
    icon: <FaChartLine size={24} color="white" />,
    color: '#6366f1',
    difficultyLevel: 'Intermediate',
    earningPotential: '$200-2000/month',
    keyPoints: [
      'Choose a niche you're passionate about',
      'Build a platform (blog, YouTube channel, etc.)',
      'Join affiliate programs relevant to your audience',
      'Create honest, valuable content that includes affiliate links'
    ],
    learnMoreUrl: 'https://www.shopify.com/blog/affiliate-marketing'
  },
  {
    id: 8,
    name: 'Podcasting',
    description: 'Start a podcast on a topic you're passionate about and monetize through sponsorships, ads, and premium content. Podcasting continues to grow in popularity as it offers a convenient way for people to consume content.',
    icon: <FaPodcast size={24} color="white" />,
    color: '#8b5cf6',
    difficultyLevel: 'Intermediate',
    earningPotential: '$100-1000/month',
    keyPoints: [
      'Choose a specific niche with an interested audience',
      'Invest in decent audio equipment',
      'Be consistent with your publishing schedule',
      'Grow your audience before approaching sponsors'
    ],
    learnMoreUrl: 'https://www.podcastinsights.com/start-a-podcast/'
  },
  {
    id: 9,
    name: 'Virtual Assistant',
    description: 'Provide administrative, technical, or creative assistance to clients remotely. As businesses look to outsource tasks without hiring full-time staff, virtual assistants are in high demand for their flexibility and specialized skills.',
    icon: <FaHandsHelping size={24} color="white" />,
    color: '#14b8a6',
    difficultyLevel: 'Beginner',
    earningPotential: '$500-2000/month',
    keyPoints: [
      'Identify your skills and services (email management, social media, etc.)',
      'Create a professional online presence',
      'Join platforms like Upwork or directly pitch to potential clients',
      'Consider specializing in a specific industry or task set'
    ],
    learnMoreUrl: 'https://www.thepennyhoarder.com/make-money/side-gigs/how-to-become-a-virtual-assistant/'
  },
  {
    id: 10,
    name: 'Online Tutoring',
    description: 'Teach students subjects you're knowledgeable about via video calls. Academic subjects, test prep, language learning, and professional skills are all popular areas for online tutoring that allow you to help others while earning.',
    icon: <FaGraduationCap size={24} color="white" />,
    color: '#0ea5e9',
    difficultyLevel: 'Beginner',
    earningPotential: '$500-2500/month',
    keyPoints: [
      'Choose subjects you're qualified to teach',
      'Join established platforms like VIPKid, Chegg, or Wyzant',
      'Create a professional teaching space at home',
      'Obtain certifications if needed for your subject area'
    ],
    learnMoreUrl: 'https://www.teachaway.com/blog/how-to-become-an-online-tutor'
  },
  {
    id: 11,
    name: 'Remote Customer Service',
    description: 'Work as a customer service representative from home for various companies. Many businesses now hire remote customer service agents to handle inquiries via phone, chat, or email, offering flexible work arrangements.',
    icon: <FaHome size={24} color="white" />,
    color: '#f97316',
    difficultyLevel: 'Beginner',
    earningPotential: '$400-2000/month',
    keyPoints: [
      'Develop excellent communication and problem-solving skills',
      'Create a quiet home office environment',
      'Apply to companies like Amazon, Apple, or American Express',
      'Consider specialized roles in technical support or sales'
    ],
    learnMoreUrl: 'https://www.flexjobs.com/blog/post/10-work-from-home-customer-service-jobs/'
  },
  {
    id: 12,
    name: 'Game Streaming',
    description: 'Stream gameplay on platforms like Twitch or YouTube and earn from subscriptions, donations, sponsorships, and ads. While competitive, game streaming allows gamers to turn their hobby into income by building a community.',
    icon: <FaGamepad size={24} color="white" />,
    color: '#9333ea',
    difficultyLevel: 'Intermediate',
    earningPotential: '$100-3000/month',
    keyPoints: [
      'Choose games you enjoy and can play well',
      'Invest in decent streaming equipment',
      'Create a consistent streaming schedule',
      'Engage with viewers and build a community'
    ],
    learnMoreUrl: 'https://www.businessinsider.com/how-to-make-money-streaming-on-twitch'
  }
];