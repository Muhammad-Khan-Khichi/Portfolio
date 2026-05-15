import { motion } from 'framer-motion';
import { useTyping } from '../hooks/useTyping';
import { personalInfo } from '../data/portfolio';
import { FaArrowRight, FaDownload, FaWhatsapp } from '../data/portfolio';

export default function Hero() {
  const typedText = useTyping(personalInfo.roles, 80, 40, 2000);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-bg"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float [animation-delay:4s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="block text-light-50 dark:text-light-50">Hi, I'm</span>
            <span className="block gradient-text mt-2">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-dark-600 dark:text-dark-600 mb-4"
          >
            <span className="typing-cursor">{typedText}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-dark-600/80 dark:text-dark-600/80 max-w-xl mb-10 leading-relaxed"
          >
            {personalInfo.tagline}. Crafting pixel-perfect interfaces with clean architecture that scales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              <span className="flex items-center gap-2">
                View Projects <FaArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaWhatsapp className="w-4 h-4" /> Let's Chat
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-dark-600 dark:text-dark-600 hover:text-primary-400 transition-colors duration-200"
            >
              <FaDownload className="w-4 h-4" /> Download CV
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10 dark:border-dark-700/50"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">1+</div>
              <div className="text-sm text-dark-600 dark:text-dark-600 mt-1">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-dark-600 dark:text-dark-600 mt-1">Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-dark-600 dark:text-dark-600 mt-1">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-dark-600/50 dark:text-dark-600/50 hover:text-primary-400 transition-colors duration-200"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce-subtle" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}