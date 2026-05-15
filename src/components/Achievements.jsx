import SectionWrapper from './SectionWrapper';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Impact & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subheading mx-auto">
          Numbers that reflect the quality and consistency of my work
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, i) => (
          <CounterCard key={item.label} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function CounterCard({ item, index }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCounter(item.value, 2000, isInView);

  return (
    <div
      ref={ref}
      className="glass-card p-6 sm:p-8 text-center group hover:neon-glow transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
        {count}
        {item.suffix}
      </div>
      <div className="text-sm font-medium text-dark-600 dark:text-dark-600">
        {item.label}
      </div>
    </div>
  );
}
