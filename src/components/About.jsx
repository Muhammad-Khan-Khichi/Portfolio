import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';
import { personalInfo, timeline } from '../data/portfolio';
import { FaDownload } from '../data/portfolio';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subheading mx-auto">
          A brief look at my journey building digital products
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Bio */}
        <div>
          <div className="glass-card p-6 sm:p-8 neon-glow">
            <h3 className="text-xl font-display font-semibold mb-4 gradient-text">
              Who I Am
            </h3>
            <p className="text-dark-600 dark:text-dark-600 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {['Scikit Learn','FastAPI', 'React', 'Streamlit','PostgreSQL', 'JWT Auth', 'ML'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href={personalInfo.resumeUrl} download className="btn-primary text-sm">
              <span className="flex items-center gap-2">
                <FaDownload className="w-3.5 h-3.5" /> Download Resume
              </span>
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-neon-purple to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function TimelineItem({ item, index }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 sm:pl-14 group"
    >
      {/* Dot */}
      <div className="absolute left-2.5 sm:left-3.5 top-1 w-3 h-3 rounded-full border-2 border-primary-500 bg-dark-900 dark:bg-dark-900 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300" />

      <div className="glass-card p-5 sm:p-6 group-hover:neon-glow">
        <span className="text-xs font-semibold text-primary-400 tracking-wide uppercase">
          {item.year}
        </span>
        <h4 className="text-lg font-semibold mt-1 mb-1">{item.title}</h4>
        <p className="text-sm text-neon-purple font-medium mb-2">{item.company}</p>
        <p className="text-sm text-dark-600 dark:text-dark-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
