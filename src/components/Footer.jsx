import { personalInfo, navLinks } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-700/30 dark:border-dark-700/30">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center text-white font-bold text-sm">
                MK
              </div>
              <span className="font-display font-bold text-lg">
                <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
                <span className="text-dark-600 dark:text-dark-600 ml-1">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </span>
            </div>
            <p className="text-sm text-dark-600 dark:text-dark-600 max-w-sm leading-relaxed">
              Building scalable end-to-end machine learning systems and web applications .
              Let's create something extraordinary together.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-600 dark:text-dark-600 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-dark-600 dark:text-dark-600 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-dark-700/30 gap-4">
          <p className="text-xs text-dark-600 dark:text-dark-600">
            © {currentYear} {personalInfo.name}. Built with{' '}
            <FaHeart className="w-3 h-3 inline text-red-400" /> and React.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaWhatsapp, href: personalInfo.twitter, label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-dark-600 dark:text-dark-600 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
