import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subheading mx-auto">
          Technologies I work with daily to build production-grade applications
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30 shadow-lg shadow-primary-500/10'
                  : 'text-dark-600 dark:text-dark-600 hover:text-light-50 glass-card'
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Skills display */}
      <div className="max-w-2xl mx-auto">
        {skillCategories.map((cat, catIndex) => (
          <div
            key={cat.title}
            className={`transition-all duration-400 ${
              activeCategory === catIndex
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            {activeCategory === catIndex && (
              <div className="space-y-6">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SkillBar({ skill, index }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold">{skill.name}</span>
        <span className="text-sm font-bold text-primary-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-dark-700/50 dark:bg-dark-700/50 overflow-hidden">
        <div
          className="h-full rounded-full progress-fill bg-gradient-to-r from-primary-600 to-neon-purple"
          style={{ width: isInView ? `${skill.level}%` : '0%' }}
        />
      </div>
    </motion.div>
  );
}
