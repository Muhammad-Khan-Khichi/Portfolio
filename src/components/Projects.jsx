import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt } from '../data/portfolio';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading mx-auto">
          Real-world applications built with production-ready architecture
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project, index }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass-card overflow-hidden card-tilt"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 will-change-transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 bg-primary-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href={project.liveUrl}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-200"
            aria-label="View live"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors duration-200"
            aria-label="View code"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-dark-600 dark:text-dark-600 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
