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
  roles: ['AI Engineer'],
  tagline: 'I build end-to-end Artificial Intelligence systems & scalable web apps',
  email: 'muhammadkhan08561@gmail.com',
  phone: '+92 301 9487954',
  location: 'Pakistan',
  whatsapp: '923019487954',
  github: 'https://github.com/Muhammad-Khan-Khichi',
  linkedin: 'https://www.linkedin.com/feed/',
  twitter: 'https://twitter.com/muhammadkhan',
  resumeUrl: '/resume.pdf',
  bio: `I'm an AI Engineer specializing in building
      production-grade, LLM-powered systems. My
      focus is designing multi-agent architectures,
      RAG pipelines, and real-time voice AI using
      tools like LangChain, LangGraph, and LiveKit.
      I build end-to-end  from vector search with
      FAISS and Qdrant, to FastAPI backends
      handling async workloads, to React frontend
      that bring it all together. I care about
      systems that are fast, reliable, and actually
      useful in production, not just impressive
      in a notebook.`
};

export const timeline = [
  {
    year: 2026,
    title: "AI Engineer",
    company: 'Senarios.co',
    description: 'Built RAG pipelines and a multi-agent voice AI system using Qdrant, FastAPI, and GPT-4.1, achieving sub-second query latency in production.'
  },
  {
    year: '2025',
    title: 'Frontend Internship',
    company: 'Senarios.co',
    description: 'Learning frontend architecture form senior Engineers and many more.',
  }
];

export const skillCategories = [
  {
    title: 'AI & ML',
    icon: FaBrain,
    skills: [
      { name: 'LangChian', level: 85 },
      { name: 'RAG', level: 82 },
      { name: 'Vector DB', level: 82 },
      { name: 'LiveKit', level: 82 },
      { name: 'Scikit-learn', level: 82 },
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
    title: 'HireAI(AI-Powered Job Search Platform)',
    description:
      'An AI recruitment platform that parses resumes to extract skills, then matches and ranks jobs using semantic search. Also offers AI-powered career tools like resume/LinkedIn optimization, mock interviews, and cover letter generation.',
    image: 'https://unsplash.com/photos/an-abstract-image-of-a-sphere-with-dots-and-lines-nGoCBxiaRO0',
    techStack: ['FastApi', 'React', 'LangChain', 'Postgres', 'Qdrant'],
    liveUrl: 'https://automl-analyst-platform-mk.streamlit.app/',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'AutoML DataAnalysis Platform',
    description:
      'Real-time crypto portfolio tracker with ML-powered price predictions and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    techStack: ['Streamlit', 'FastApi', 'Scikit Learn', 'Numpy'],
    liveUrl: 'https://automl-analyst-platform-mk.streamlit.app/',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Movie Recommendation System',
    description:
      'Built a content-based recommendation engine using TF-IDF vectorization on movie metadata (genres, cast, keywords, overview).',
    image: movie,
    techStack: ['Streamlit', 'FastApi', 'Scikit Learn', 'NLP'],
    liveUrl: 'https://reelhaus-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Movie-recommender-frontend',
  },
  {
    id: 4,
    title: 'Heart Risk Predictor',
    description:
      'Developed a regression model to Predict Heart Disease.  Performed extensive EDA with Matplotlib and Seaborn, identifying key correlations and feature importance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://heart-risk-prediction-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Heart-Risk-Prediction',
  },
  {
    id: 5,
    title: 'GoldPrice Predictor',
    description:
      'Developed a regression model to forecast gold prices using macroeconomic indicators (USD index, S&P 500, oil prices, silver).',
    image: gold,
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://gold-price-predictor-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Gold-Price-Predictor',
  },
  {
    id: 6,
    title: 'Titanic Survival Predictor',
    description:
      'Compared multiple classifiers (Logistic Regression, Decision Tree, Random Forest) using accuracy, precision, recall, and F1-score.',
    image: titanic,
    techStack: ['Streamlit', 'Scikit Learn', 'Numpy', 'Pandas'],
    liveUrl: 'https://titanic-survival-predictor-mk.streamlit.app/',
    githubUrl: 'https://github.com/Muhammad-Khan-Khichi/Titanic-Survival-Predictor',
  },
  {
    id: 7,
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


