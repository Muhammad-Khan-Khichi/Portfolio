import { useInView } from '../hooks/useInView';

export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div
        className={`section-container transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    </section>
  );
}
