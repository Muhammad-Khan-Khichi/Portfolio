import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaServer,
  FaChartLine,
  FaBrain,
  FaSun,
  FaMoon,
  FaBars,         
  FaTimes,        
  FaChevronLeft,  
  FaChevronRight, 
  FaQuoteLeft,    
  FaArrowUp,      
  FaHeart,        
  FaPaperPlane,   
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiFastapi,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiSolidity,
  SiWeb3Dotjs,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

import movie from '../assets/movie.jpg'
import gold from '../assets/gold.jpg'
import titanic from '../assets/titanic.jpg'
import search from '../assets/search.jpg'

export const personalInfo = {
  name: 'Muhammad Khan',
  title: 'Full Stack ML Engineer',
  roles: ['ML Engineer', 'Frontend Developer', 'Full Stack Developer'],
  tagline: 'I build end-to-end machine learning systems & scalable web apps',
  email: 'muhammadkhan08561@gmail.com',
  phone: '+92 301 9487954',
  location: 'Pakistan',
  whatsapp: '923019487954',
  github: 'https://github.com/Muhammad-Khan-Khichi',
  linkedin: 'https://www.linkedin.com/feed/',
  twitter: 'https://twitter.com/muhammadkhan',
  resumeUrl: '/resume.pdf',
  bio: `I work as a Data Scientist
          and Machine Learning
          Engineer. My specialty is
          creating machine learning
          systems. I do this by
          building pipelines that get
          the data ready for use. I
          am skilled at using tools
          like FastAPI and Streamlit.
          These tools help me take
          data and turn it into
          insights that businesses.I deliver end-to-end solutions that drive real 
          business impact.  I architect high-performance web applications 
        that scale. From pixel-perfect React interfaces to robust FastAPI backends 
        and ML-powered analytics`
};

export const timeline = [
  {
    year: '2025',
    title: 'Frontend Internship',
    company: 'Senarios.co',
    description: 'Learning frontend architecture form senior Engineers and many more.',
  },
];

export const skillCategories = [
  {
    title: 'ML & DataScience',
    icon: FaBrain,
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'NumPy', level: 82 },
      { name: 'Pandas', level: 82 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 82 },
    ],
  },
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Streamlit', level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Python', level: 85},
      { name: 'FastAPI', level: 90 },
      { name: 'APIs', level: 93 },
      { name: 'JWT Auth', level: 88 },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },

];

export const projects = [
  {
    id: 1,
    title: 'AutoML DataAnalysis Platform',
    description:
      'Real-time crypto portfolio tracker with ML-powered price predictions and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    techStack: ['Streamlit', 'FastApi', 'Scikit Learn', 'Numpy'],
    liveUrl: 'https://automl-analyst-platform-mk.streamlit.app/',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Movie Recommendation System',
    description:
      'Built a content-based recommendation engine using TF-IDF vectorization on movie metadata (genres, cast, keywords, overview).',
    image: movie,
    techStack: ['Streamlit', 'FastApi', 'Scikit Learn', 'NLP'],
    liveUrl: 'https://reelhaus-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Movie-recommender-frontend',
  },
  {
    id: 3,
    title: 'Heart Risk Predictor',
    description:
      'Developed a regression model to Predict Heart Disease.  Performed extensive EDA with Matplotlib and Seaborn, identifying key correlations and feature importance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://heart-risk-prediction-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Heart-Risk-Prediction',
  },
  {
    id: 4,
    title: 'GoldPrice Predictor',
    description:
      'Developed a regression model to forecast gold prices using macroeconomic indicators (USD index, S&P 500, oil prices, silver).',
    image: gold,
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://gold-price-predictor-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Gold-Price-Predictor',
  },
  {
    id: 5,
    title: 'Titanic Survival Predictor',
    description:
      'Compared multiple classifiers (Logistic Regression, Decision Tree, Random Forest) using accuracy, precision, recall, and F1-score.',
    image: titanic,
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://titanic-survival-predictor-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Titanic-Survival-Predictor',
  },
  {
    id: 6,
    title: 'Image Search web app',
    description:
      'High-performance storefront handling 10K+ concurrent users with sub-second page loads.',
    image: search,
    techStack: ['React.js', 'Tailwind', 'Unsplash Api'],
    liveUrl: 'https://muhammad-khan-khichi.github.io/Image-Search-app-in-React/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Image-Search-app-in-React',
  },
];

export const achievements = [
  { label: 'Projects Delivered', value: 5, suffix: '+' },
  { label: 'Happy Clients', value: 5, suffix: '+' },
  { label: 'Years Experience', value: 1, suffix: '+' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechVentures',
    text: 'Muhammad delivered an exceptional React dashboard that exceeded our performance targets. His attention to detail and architectural decisions saved us months of refactoring.',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Founder, CryptoTrack',
    text: 'The DeFi analytics tool Muhammad built handles millions of data points smoothly. His full-stack expertise and crypto knowledge made him the perfect fit for our project.',
    avatar: 'AH',
  },
  {
    id: 3,
    name: 'Lisa Chen',
    role: 'Product Lead, ScaleUp',
    text: 'Working with Muhammad was a game-changer. He transformed our legacy frontend into a modern, performant React app. Load times dropped by 70% overnight.',
    avatar: 'LC',
  },
  {
    id: 4,
    name: 'Omar Siddiqui',
    role: 'VP Engineering, DataFlow',
    text: 'Muhammad\'s ML integration skills are outstanding. He built our prediction pipeline end-to-end — from data processing to the React visualization layer.',
    avatar: 'OS',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export { 
  FaReact, FaPython, FaNodeJs, FaDatabase, FaEthereum,
  FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope,
  FaDownload, FaArrowRight, FaCode, FaServer, FaChartLine, FaBrain,
  FaSun, FaMoon, FaBars, FaTimes, FaChevronLeft, FaChevronRight,
  FaQuoteLeft, FaArrowUp, FaHeart, FaPaperPlane, FaMapMarkerAlt,
  FaExternalLinkAlt,
  SiFastapi, SiMysql, SiTailwindcss, SiTypescript, SiNextdotjs,
  SiDocker, SiKubernetes, SiRedis, SiMongodb, SiPostgresql,
  SiSolidity, SiWeb3Dotjs, SiTensorflow, SiPytorch, SiPandas, SiNumpy,
};


