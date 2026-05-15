import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { testimonials } from '../data/portfolio';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from '../data/portfolio';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="section-subheading mx-auto">
          What people I've worked with have to say
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="glass-card p-8 sm:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="w-8 h-8 text-primary-500/30 mb-6" />
              <p className="text-base sm:text-lg leading-relaxed text-dark-600 dark:text-dark-600 mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{testimonials[current].name}</div>
                  <div className="text-xs text-dark-600 dark:text-dark-600">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 bg-primary-500'
                    : 'bg-dark-700 hover:bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
