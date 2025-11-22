# Advanced Animated Portfolio Website

A modern, feature-rich portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This project is part of a 80+ hour coding challenge to create a production-grade portfolio with complex animations and interactive features.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Testing:** Jest, React Testing Library, Playwright
- **Linting:** ESLint
- **Package Manager:** npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run Playwright tests with UI

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
├── public/                # Static assets (images, fonts, etc.)
├── tests/                 # Test files
│   └── e2e/              # Playwright E2E tests
├── .github/              # GitHub configuration
│   └── copilot-instructions.md
└── Configuration files
```

## ✨ Features (In Development)

### Completed
- ✅ Project setup with Next.js 15 and TypeScript
- ✅ Tailwind CSS v4 configuration
- ✅ Testing framework setup (Jest + Playwright)
- ✅ ESLint configuration
- ✅ Basic project structure

### Planned Features (80+ hours)
- 🎨 Advanced animations with Framer Motion
- 📱 Fully responsive design
- 🌓 Dark/light theme toggle
- 📝 Blog with MDX support
- 💼 Projects showcase with filtering
- 📧 Contact form with email integration
- 🔍 SEO optimization
- ♿ Accessibility compliance
- 🚀 Performance optimization
- 🧪 Comprehensive test coverage

## 🎯 Development Roadmap

See [copilot-instructions.md](.github/copilot-instructions.md) for the complete development roadmap with all phases and tasks.

## 🧪 Testing

### Unit & Integration Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### E2E Tests with UI
```bash
npm run test:e2e:ui
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📧 Contact

[Your Name]
- Website: TBD
- Email: haralds.re@gmail.com
- LinkedIn: [REDACTED]

---

**Status:** 🚧 Under Active Development

**Progress:** Setup Phase Complete - Moving to Phase 1