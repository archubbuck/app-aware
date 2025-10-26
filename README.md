# AI Chat - Landing Page

A modern, single-page application with an identical layout to ChatSEO, built with Angular 20. Features a hero section, chat preview, waitlist form, and key features showcase.

## Features

- 🎨 Beautiful landing page with gradient hero section
- 💬 Interactive chat preview showing the interface
- 📧 Waitlist form with email validation
- ✨ Key features showcase section
- 📱 Fully responsive design
- 🎯 Single-page application layout

## Technology Stack

- **Angular 20.3.7** - Latest stable version with Signals API
- **TypeScript 5.9** - Strong typing and modern JavaScript features
- **SCSS** - Advanced styling with nested rules and variables
- **RxJS 7.8** - Reactive programming for async operations
- **Jasmine & Karma** - Testing framework

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/archubbuck/app-aware.git
cd app-aware
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Testing

Run the test suite:
```bash
npm test
```

Run tests in headless mode:
```bash
npm test -- --no-watch --browsers=ChromeHeadless
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── landing/       # Main landing page component
│   │   ├── chat/          # Chat interface component
│   │   └── message/       # Individual message component
│   ├── models/
│   │   └── message.model.ts  # Message interface
│   ├── services/
│   │   └── chat.ts        # Chat service for message management
│   ├── app.ts             # Root component
│   └── app.config.ts      # App configuration
├── styles.scss            # Global styles
└── index.html             # HTML entry point
```

## Landing Page Sections

### Hero Section
- Eye-catching gradient background
- Clear value proposition
- Engaging headline and subtitle

### Preview Section
- Interactive chat interface preview
- Sample conversation showing the interface
- Demonstrates key features visually

### Waitlist Section
- Email signup form
- Form validation
- Success message after submission
- Purple gradient background matching ChatSEO

### Features Section
- Three key feature cards:
  - Real-time Responses
  - Responsive Design
  - Secure & Private
- Icon-based presentation
- Hover animations

### Footer
- Copyright information
- Clean, minimalist design

## Best Practices Implemented

- ✅ Angular Signals for reactive state management
- ✅ Standalone components (no NgModules)
- ✅ TypeScript strict mode enabled
- ✅ SCSS for maintainable styling
- ✅ Component-based architecture
- ✅ Proper TypeScript typing throughout
- ✅ Comprehensive test coverage
- ✅ Semantic HTML structure
- ✅ Accessibility considerations
- ✅ SEO-friendly meta tags
- ✅ Responsive design for all devices

## Customization

This is a generic landing page shell that can be customized:

1. **Update Branding** - Modify colors, fonts, and styles in SCSS files
2. **Change Content** - Edit the landing component HTML for different messaging
3. **Add Features** - Extend the component functionality as needed
4. **Integrate Backend** - Connect the waitlist form to your backend API

## License

This project is open source and available for adaptation to various use cases.
