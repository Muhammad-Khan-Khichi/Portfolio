import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaWhatsapp } from '../data/portfolio';
// import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Fallback scroll-based active section (more reliable than IntersectionObserver)
  const handleActiveSectionOnScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100; // offset for navbar height

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener('scroll', handleActiveSectionOnScroll, { passive: true });

  // Run once on mount to set initial active section
  handleActiveSectionOnScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', handleActiveSectionOnScroll);
   };
  }, []);

  const handleNavClick = (href) => {
  setIsMobileOpen(false); // close menu FIRST
  
  // Wait for menu close animation to finish, then scroll
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 70;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 300); // 300ms matches your menu close animation duration
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass shadow-lg shadow-dark-900/10 dark:shadow-dark-900/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="relative z-10 flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            MK
          </div>
          <span className="font-display font-bold text-lg hidden sm:block">
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            <span className="text-dark-600 dark:text-dark-600 ml-1">
              {personalInfo.name.split(' ')[1]}
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary-400'
                  : 'text-dark-600 dark:text-dark-600 hover:text-dark-900 dark:hover:text-light-50'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary-500/10 rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          {/* <ThemeToggle /> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-white/10 dark:border-dark-700/50 mt-2"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-dark-600 dark:text-dark-600 hover:text-light-50 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
