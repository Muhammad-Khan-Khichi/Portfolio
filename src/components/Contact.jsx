import { useState } from 'react';
import { useForm } from '@formspree/react';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
} from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  // Formspree hook
  const [formspreeState, handleFormspreeSubmit] = useForm("xlgzykzp");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus('sending');
      
      try {
        // Post data to Formspree
        await handleFormspreeSubmit({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        });
        
        setStatus('sent');
        // Clear the form fields after successful submission
        setForm({ name: '', email: '', subject: '', message: '' });
        
      } catch (error) {
        setStatus('error');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactLinks = [
    { icon: FaEnvelope,     label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: FaWhatsapp,     label: 'WhatsApp', value: 'Chat Now',            href: `https://wa.me/${personalInfo.whatsapp}` },
    { icon: FaGithub,       label: 'GitHub',   value: 'muhammadkhan',        href: personalInfo.github },
    { icon: FaLinkedin,     label: 'LinkedIn', value: 'muhammadkhan',        href: personalInfo.linkedin },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subheading mx-auto">
          Have a project in mind? Let's build something great together.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

        <div className="lg:col-span-2 space-y-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const Wrapper = link.href ? 'a' : 'div';
            const wrapperProps = link.href
              ? {
                  href: link.href,
                  target: link.href.startsWith('http') ? '_blank' : undefined,
                  rel: link.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <Wrapper
                key={link.label}
                {...wrapperProps}
                className="flex items-center gap-4 p-4 rounded-xl glass-card group hover:neon-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-dark-600 dark:text-dark-600 font-medium">
                    {link.label}
                  </div>
                  <div className="text-sm font-semibold">{link.value}</div>
                </div>
              </Wrapper>
            );
          })}

          <a
            href={`https://wa.me/${personalInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] transition-all duration-300 mt-6"
          >
            <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 neon-glow"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="John Doe"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="john@example.com"
              />
            </div>

            <InputField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="Project Inquiry"
            />

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 dark:bg-dark-800/50 border text-sm text-light-50 dark:text-light-50 placeholder-dark-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 resize-none ${
                  errors.message ? 'border-red-500' : 'border-dark-700/50'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>✓ Message Sent!</>
                ) : status === 'error' ? (
                  <>✗ Failed. Try again.</>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" /> Send Message
                  </>
                )}
              </span>
            </button>
          </form>
        </div>

      </div>
    </SectionWrapper>
  );
}

function InputField({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-dark-800/50 dark:bg-dark-800/50 border text-sm text-light-50 dark:text-light-50 placeholder-dark-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200 ${
          error ? 'border-red-500' : 'border-dark-700/50'
        }`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}