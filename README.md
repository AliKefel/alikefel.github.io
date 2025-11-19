# Portfolio Website

## Live Link

Visit the live site: [https://alikefel.github.io](https://alikefel.github.io)

## 🛠️ Tech Stack

### Core Framework
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.2** - Build tool and dev server

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite plugin
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.22** - CSS vendor prefixing

### Animation & UI
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.554.0** - Icon library

### Forms & Validation
- **React Hook Form 7.66.1** - Form state management
- **Zod 4.1.12** - Schema validation
- **@hookform/resolvers 5.2.2** - Form validation resolvers

### Analytics & Services
- **PostHog 1.296.0** - Product analytics and feature flags
- **Formspree** - Form submission service

### Development Tools
- **ESLint 9.39.1** - Code linting
- **TypeScript ESLint 8.46.3** - TypeScript-specific linting
- **React Hooks ESLint Plugin** - React hooks linting

## Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── GradientText.tsx
│   │   └── ProjectImage.tsx
│   ├── sections/           # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── data/                   # Portfolio content
│   ├── projects.ts
│   ├── experience.ts
│   ├── education.ts
│   └── skills.ts
├── types/                  # TypeScript definitions
│   └── portfolio.ts
├── hooks/                  # Custom hooks
│   └── useScrollAnimation.ts
├── lib/                    # Utilities
│   └── posthog.ts
├── App.tsx
├── main.tsx
└── index.css
```

##  Features

- **Terminal/Computer Theme** - Unique terminal-inspired design with command prompts
- **Smooth Animations** - Framer Motion powered animations throughout
- **Responsive Design** - Mobile-first, works on all devices
- **Project Showcase** - Filterable project gallery with images
- **Contact Form** - Formspree integration for form submissions
- **Analytics** - PostHog integration for traffic and user behavior tracking
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Lazy loading, code splitting, optimized images

## 🔗 Useful Links

### Formspree Dashboard
- **Dashboard**: [https://formspree.io/forms](https://formspree.io/forms)
- **Documentation**: [https://help.formspree.io](https://help.formspree.io)
- **My Form ID**: `xkgyjppb` (update in Contact.tsx if needed)

### PostHog Dashboard
- **Dashboard**: [https://app.posthog.com](https://app.posthog.com)
- **Documentation**: [https://posthog.com/docs](https://posthog.com/docs)

### Other Resources
- **Vite Documentation**: [https://vite.dev](https://vite.dev)
- **React Documentation**: [https://react.dev](https://react.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [https://www.framer.com/motion](https://www.framer.com/motion)
- **TypeScript**: [https://www.typescriptlang.org](https://www.typescriptlang.org)

### Updating Content
All portfolio content is stored in the `src/data/` directory:
- `projects.ts` - Project information
- `experience.ts` - Work experience
- `education.ts` - Education and achievements
- `skills.ts` - Technical skills

## Libraries & Purpose

| Library | Purpose |
|---------|---------|
| **React** | UI component framework |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | smooth animations and transitions |
| **Lucide React** | icon library |
| **React Hook Form** | Performant form handling |
| **Zod** | Runtime type validation |
| **PostHog** | Product analytics and user tracking |
| **Formspree** | Form submission handling |


## 👤 Author

**Ali Kefel**
- GitHub: [@AliKefel](https://github.com/AliKefel)
- Email: alikefel114@gmail.com

---

Built with React, TypeScript, and Tailwind CSS
