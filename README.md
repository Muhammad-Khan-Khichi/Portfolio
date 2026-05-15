# 🚀 Muhammad Khan — Portfolio

A premium, high-performance portfolio website built with **React**, **Tailwind CSS**, and **GPU-optimized animations**. Designed to look like a high-end SaaS landing page while maintaining silky-smooth 60fps on low-performance devices.

---

## 🌟 Overview

This isn't just a portfolio — it's a **performance masterpiece**. Every animation, component, and style decision is engineered for speed and visual impact. Inspired by the design language of [Stripe](https://stripe.com) and [Linear](https://linear.app), it features glassmorphism, neon gradients, and buttery-smooth interactions without the bloat of heavy animation libraries.

---

## ✨ Key Features

- ⚡ **Blazing Fast** — 60fps animations using only `transform` and `opacity`
- 🎨 **Glassmorphism UI** — Modern `backdrop-blur` effects with neon accents
- 🌙 **Dark/Light Mode** — System-aware theme with manual toggle
- 📱 **Mobile-First** — Fully responsive across all breakpoints
- 🎬 **Smart Animations** — CSS-first approach with Framer Motion only where necessary
- 🧩 **Component Architecture** — Clean, reusable, and production-ready code
- 🔍 **SEO Optimized** — Semantic HTML and meta tags
- 📄 **Lazy Loaded** — Below-fold sections load on demand

---

## 🏗️ Architecture & Performance

This project strictly adheres to high-performance animation principles:

| Rule | Implementation |
|---|---|
| Primary Animation | CSS transitions + Tailwind utilities |
| Secondary Animation | Framer Motion (page entry, stagger, hover only) |
| GPU Optimization | `will-change: transform`, `translateZ(0)` |
| No Layout Thrashing | Animating **only** `transform` and `opacity` |
| No Heavy Libraries | ❌ GSAP &nbsp; ❌ Particle systems &nbsp; ❌ Canvas animations |
| Lazy Loading | `React.lazy` + `Suspense` for below-fold sections |
| Animation Duration | Strictly **300–600ms** for all transitions |

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| React Icons | 5 |
| Fonts | Inter + Poppins (Google Fonts) |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Your resume file
├── src/
│   ├── main.jsx                # Entry point with ThemeProvider
│   ├── App.jsx                 # Root component with lazy loading
│   ├── index.css               # Global styles, animations, utilities
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light mode context
│   ├── hooks/
│   │   ├── useInView.js        # IntersectionObserver hook
│   │   ├── useCounter.js       # Animated counter hook (rAF)
│   │   └── useTyping.js        # Typing effect hook
│   ├── data/
│   │   └── portfolio.js        # ⭐ ALL PORTFOLIO DATA HERE
│   └── components/
│       ├── Navbar.jsx          # Sticky glass navbar
│       ├── Hero.jsx            # Animated hero with typing
│       ├── About.jsx           # Bio + timeline
│       ├── Skills.jsx          # Categorized progress bars
│       ├── Projects.jsx        # Project cards with tilt
│       ├── Achievements.jsx    # Animated counters
│       ├── Testimonials.jsx    # Lightweight slider
│       ├── Contact.jsx         # Form with validation
│       ├── Footer.jsx          # Site footer
│       ├── ThemeToggle.jsx     # Dark/Light switch
│       ├── SectionWrapper.jsx  # Reusable scroll animation
│       └── ScrollToTop.jsx     # Floating scroll button
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammadkhan/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:5173**

---

## 🎨 Customization

### 1. Personal Data

Edit `src/data/portfolio.js` to update all your information:

```js
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  roles: ['Role 1', 'Role 2', 'Role 3'],
  tagline: 'Your tagline here',
  email: 'your@email.com',
  whatsapp: '923001234567',
  // ... more fields
};
```

### 2. Projects

Update the `projects` array in the same file:

```js
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'What it does',
    image: 'https://image-url.com/...',
    techStack: ['React', 'FastAPI'],
    liveUrl: 'https://...',
    githubUrl: 'https://...',
  },
];
```

### 3. Theme Colors

Modify `tailwind.config.js` to change the color palette:

```js
colors: {
  neon: {
    blue: '#38bdf8',    // Change these
    purple: '#a855f7',  // Change these
    cyan: '#22d3ee',    // Change these
  },
  dark: {
    900: '#0f172a',     // Main background
  }
}
```

### 4. Resume

Replace the file at `public/resume.pdf` with your own resume.

---

## 📦 Build & Deploy

### Production Build

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Deployment Options

The `dist` folder can be deployed to:

| Platform | Steps |
|---|---|
| Vercel | `vercel` (auto-detected) |
| Netlify | `netlify deploy --prod` |
| GitHub Pages | Use `gh-pages` package |
| AWS S3 | Upload `dist` folder |
| Cloudflare Pages | Connect repo directly |

---

## 🎬 Animation Guide

### What's Allowed ✅

- CSS `transition` on `transform`, `opacity`
- Tailwind `animate-` utilities
- `@keyframes` in `index.css`
- Framer Motion for: page entry, stagger children, hover effects
- `will-change: transform` for GPU promotion

### What's NOT Allowed ❌

- GSAP or similar heavy animation libraries
- Particle.js or canvas-based backgrounds
- Scroll-triggered layout shifts
- Animating `width`, `height`, `top`, `left`, `margin`, `padding`
- Animation durations over **600ms**

---

## 📊 Performance Metrics

Expected Lighthouse scores on production build:

| Metric | Target |
|---|---|
| Performance | **95+** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |
| First Contentful Paint | **< 1.0s** |
| Cumulative Layout Shift | **< 0.01** |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Muhammad Khan**

- 📧 [muhammad@example.com](mailto:muhammad@example.com)
- 💬 [WhatsApp](https://wa.me/923001234567)
- 🐙 [GitHub](https://github.com/muhammadkhan)
- 💼 [LinkedIn](https://linkedin.com/in/muhammadkhan)

---

<p align="center">Built with ⚡ by <strong>Muhammad Khan</strong></p>
