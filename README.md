# SafeTap Ghana 🚰

> **Touchless Water for Climate-Resilient Sanitation**

A modern, responsive website showcasing SafeTap Ghana's innovative touchless water dispensing technology designed to improve sanitation and public health across Northern Ghana.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Project Overview

SafeTap Ghana addresses critical sanitation challenges in Northern Ghana by providing low-cost, touchless smart water dispensing systems for schools and public facilities. This website serves as the digital presence for the initiative, showcasing the technology, impact, and mission.

### 🎯 Key Features

- **🎨 Modern Design**: Beautiful, responsive interface with custom Ghanaian-inspired color palette
- **♿ Accessibility First**: WCAG AA compliant with comprehensive accessibility features
- **📱 Mobile Optimized**: Mobile-first responsive design with touch-friendly interactions
- **⚡ Performance**: Optimized for fast loading with efficient bundle sizes
- **🔍 SEO Ready**: Comprehensive meta tags, structured data, and search optimization
- **🌐 Interactive**: Contact forms, modal dialogs, and smooth animations

## 🚀 Quick Start

### Prerequisites

Ensure you have one of the following installed:

- **Node.js** 18+ with npm/yarn
- **Bun** (recommended for faster performance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/safetap-ghana/website.git
   cd safetap-ghana
   ```

2. **Install dependencies**

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start development server**

   ```bash
   # Using Bun
   bun run dev

   # Or using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
safetap-ghana/
├── 📁 public/                    # Static assets
│   ├── robots.txt               # SEO robots configuration
│   ├── sitemap.xml             # XML sitemap for search engines
│   └── favicon.ico             # Website favicon
├── 📁 src/
│   ├── 📁 assets/              # Images and media files
│   │   ├── hero-student.jpg    # Hero section image
│   │   ├── tap-closeup.jpg     # Technology showcase image
│   │   └── community.jpg       # Community impact image
│   ├── 📁 components/          # Reusable React components
│   │   ├── ContactForm.tsx     # Interactive contact form
│   │   ├── ContactModal.tsx    # Modal wrapper for contact form
│   │   └── 📁 ui/             # shadcn/ui component library
│   ├── 📁 hooks/              # Custom React hooks
│   │   └── use-mobile.tsx     # Mobile device detection hook
│   ├── 📁 lib/                # Utility functions and configurations
│   │   ├── utils.ts           # Common utility functions
│   │   ├── error-capture.ts   # Error handling utilities
│   │   ├── error-page.ts      # Error page renderer
│   │   └── 📁 api/           # API-related functions
│   ├── 📁 routes/             # Page components and routing
│   │   ├── __root.tsx         # Root layout component
│   │   └── index.tsx          # Homepage component
│   ├── 📁 types/              # TypeScript type definitions
│   │   ├── global.d.ts        # Global type declarations
│   │   └── jsx.d.ts           # JSX type definitions
│   ├── styles.css             # Global styles and Tailwind config
│   ├── router.tsx             # Router configuration
│   ├── server.ts              # Server-side rendering setup
│   └── start.ts               # Application entry point
├── 📄 package.json            # Project dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 vite.config.ts          # Vite build configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 .prettierrc             # Prettier configuration
├── 📄 components.json         # shadcn/ui configuration
├── 📄 .env.example            # Environment variables template
├── 📄 LICENSE                 # MIT license
└── 📄 README.md               # This file
```

## 🛠️ Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `bun run dev`     | Start development server with hot reload |
| `bun run build`   | Build optimized production bundle        |
| `bun run preview` | Preview production build locally         |
| `bun run lint`    | Run ESLint for code quality checks       |
| `bun run format`  | Format code with Prettier                |

## 🎨 Design System

### Color Palette

The design uses a custom color palette inspired by Ghanaian landscapes:

| Color       | Hex       | Usage                              |
| ----------- | --------- | ---------------------------------- |
| **Sand**    | `#faf9f7` | Primary background, light surfaces |
| **Clay**    | `#9d7c47` | Primary accent, CTAs, highlights   |
| **Savanna** | `#d4b896` | Secondary accent, warm highlights  |
| **Ink**     | `#2c2c2c` | Text, dark elements                |

### Typography

- **Display Font**: Fraunces (serif, for headings)
- **Body Font**: Outfit (sans-serif, for body text)

### Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## ♿ Accessibility Features

Our commitment to accessibility includes:

- ✅ **WCAG AA Compliance**: High contrast ratios and proper color usage
- ✅ **Semantic HTML**: Proper heading hierarchy and landmark elements
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Screen Reader Support**: ARIA labels and descriptive text
- ✅ **Skip Links**: Quick navigation for assistive technologies
- ✅ **Reduced Motion**: Respects user motion preferences
- ✅ **Focus Management**: Clear focus indicators and logical tab order

## 🔧 Performance Optimizations

- **Image Optimization**: Proper sizing, lazy loading, and modern formats
- **Font Loading**: Preloaded fonts with optimal display strategies
- **Bundle Optimization**: Tree shaking and code splitting
- **CSS Efficiency**: Tailwind CSS with purging for minimal bundle size
- **Caching**: Proper cache headers and static asset optimization

## 🌍 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: Schema.org markup for rich snippets
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Proper crawler directives
- **Canonical URLs**: Prevent duplicate content issues
- **Performance**: Fast loading times for better search rankings

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
bun run build

# Deploy the dist folder to Netlify
```

### Self-hosted

```bash
# Build for production
bun run build

# Serve the dist folder with any static file server
# Example with serve:
npx serve dist
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Site Configuration
VITE_SITE_URL=https://safetap.gh
VITE_SITE_NAME="SafeTap Ghana"

# Analytics (optional)
VITE_GA_TRACKING_ID=your_ga_id
VITE_HOTJAR_ID=your_hotjar_id

# Contact Form
VITE_CONTACT_EMAIL=hello@safetap.gh

# Social Media
VITE_TWITTER_HANDLE=@SafeTapGhana
VITE_LINKEDIN_URL=your_linkedin_url
```

### Customization

#### Colors

Update the color palette in `src/styles.css`:

```css
:root {
  --sand: oklch(0.985 0.012 85);
  --clay: oklch(0.62 0.155 38);
  --savanna: oklch(0.78 0.135 80);
  --ink: oklch(0.18 0.005 60);
}
```

#### Fonts

Modify font imports in `src/routes/index.tsx` head function.

#### Content

Update content directly in `src/routes/index.tsx` or create new route files.

## 🧪 Testing

### Manual Testing Checklist

- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Mobile menu functions properly
- [ ] Images load with proper alt text
- [ ] Page is keyboard navigable
- [ ] Screen reader compatibility
- [ ] Performance meets standards (Lighthouse score > 90)

### Automated Testing (Future Enhancement)

```bash
# Unit tests (to be implemented)
bun run test

# E2E tests (to be implemented)
bun run test:e2e

# Accessibility tests (to be implemented)
bun run test:a11y
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow the coding standards**
   ```bash
   bun run lint
   bun run format
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Coding Standards

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write semantic, accessible HTML
- Use Tailwind CSS for styling
- Add proper alt text for images
- Include ARIA labels where needed

## 📊 Analytics & Monitoring

### Performance Monitoring

- **Core Web Vitals**: Monitor LCP, FID, and CLS
- **Lighthouse**: Regular performance audits
- **Bundle Analysis**: Track bundle size changes

### User Analytics

- **Google Analytics**: User behavior tracking
- **Hotjar**: User experience insights
- **Error Tracking**: Monitor and fix issues

## 🔒 Security

- **Content Security Policy**: Implemented for XSS protection
- **HTTPS Only**: All connections secured
- **Input Validation**: Form inputs properly validated
- **Dependency Updates**: Regular security updates

## 🌐 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 📱 Mobile Support

- **iOS Safari**: 14+
- **Chrome Mobile**: 90+
- **Samsung Internet**: 14+
- **Firefox Mobile**: 88+

## 🛠️ Tech Stack

### Core Technologies

- **[TanStack Start](https://tanstack.com/start)**: Full-stack React framework
- **[React 19](https://reactjs.org/)**: UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Vite](https://vitejs.dev/)**: Fast build tool and dev server

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)**: High-quality React components
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)**: Beautiful icon library

### Development Tools

- **[ESLint](https://eslint.org/)**: Code linting and quality
- **[Prettier](https://prettier.io/)**: Code formatting
- **[Bun](https://bun.sh/)**: Fast JavaScript runtime and package manager

## 📈 Performance Metrics

Target performance benchmarks:

- **Lighthouse Performance**: > 95
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🐛 Troubleshooting

### Common Issues

#### TypeScript Errors

If you encounter JSX-related TypeScript errors:

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
bun install
```

#### Build Failures

```bash
# Clear all caches and reinstall
rm -rf node_modules dist .output
bun install
bun run build
```

#### Development Server Issues

```bash
# Kill any processes on port 3000
lsof -ti:3000 | xargs kill -9
bun run dev
```

## 📞 Support & Contact

- **Website**: [https://safetap.gh](https://safetap.gh)
- **Email**: [hello@safetap.gh](mailto:hello@safetap.gh)
- **GitHub Issues**: [Report a bug or request a feature](https://github.com/safetap-ghana/website/issues)
- **Documentation**: [Project Wiki](https://github.com/safetap-ghana/website/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[TanStack](https://tanstack.com/)** for the excellent Start framework
- **[shadcn](https://ui.shadcn.com/)** for the beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[Vercel](https://vercel.com/)** for deployment and hosting solutions
- **[Google Fonts](https://fonts.google.com/)** for the typography
- **Community contributors** who help improve this project

## 🌍 Impact

SafeTap Ghana is more than just a website—it's a digital gateway to improving public health and sanitation across Northern Ghana. Through touchless water dispensing technology, we're:

- 🏥 **Reducing Disease**: Preventing waterborne illnesses in schools and communities
- 💧 **Conserving Water**: Smart dispensing reduces waste during droughts
- 👧 **Empowering Girls**: Improved sanitation supports girls' education
- 🌱 **Building Resilience**: Climate-conscious infrastructure for the future

---

<div align="center">

**Built with ❤️ for Northern Ghana**

[Website](https://safetap.gh) • [Contact](mailto:hello@safetap.gh) • [GitHub](https://github.com/safetap-ghana/website)

</div>
