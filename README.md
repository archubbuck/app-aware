# AI Chat - Modern Chat Interface

A modern, responsive chat interface built with Angular 20, following best practices and featuring a clean, intuitive design. This is a use-case agnostic chat shell that can be adapted for various applications.

## Features

- 🤖 AI-powered chat interface
- 💬 Real-time chat with message history
- 🎨 Modern, responsive design with smooth animations
- 🔄 Clear conversation functionality
- ⌨️ Keyboard shortcuts (Enter to send)
- 📱 Mobile-friendly responsive layout
- 🎯 Extensible architecture for custom use cases

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
│   │   ├── chat/          # Main chat container component
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

## Features Overview

### Chat Interface
- Clean, modern UI with gradient header
- Distinct styling for user and assistant messages
- Timestamp display for all messages
- Auto-scroll to latest message
- Smooth animations for message appearance

### Responsive Design
- Optimized for desktop and mobile devices
- Flexible layout that adapts to screen size
- Touch-friendly interface

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

## Customization

This is a generic chat shell that can be customized for various use cases:

1. **Update the Chat Service** (`src/app/services/chat.ts`) - Modify the `generateResponse()` method to implement your custom logic
2. **Customize Branding** - Update colors, fonts, and styles in the SCSS files
3. **Add Features** - Extend the component functionality as needed for your use case

## License

This project is open source and available for adaptation to various use cases.
