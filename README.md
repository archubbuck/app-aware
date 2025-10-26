# ChatSEO - AI-Powered SEO Assistant

A modern, responsive clone of [ChatSEO](https://chatseo.app/) built with Angular 20, following best practices and featuring a clean, intuitive chat interface.

## Features

- 🤖 AI-powered SEO assistant chatbot
- 💬 Real-time chat interface with message history
- 🎨 Modern, responsive design with smooth animations
- 🔄 Clear conversation functionality
- ⌨️ Keyboard shortcuts (Enter to send)
- 📱 Mobile-friendly responsive layout
- 🎯 SEO-focused conversation topics including:
  - Keyword research
  - Content optimization
  - Technical SEO
  - Link building
  - Meta descriptions and title tags
  - And more!

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
│   │   └── chat.ts        # Chat service with SEO responses
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

### SEO Knowledge Base
The assistant can help with topics including:
- Keyword research strategies
- SEO best practices
- Meta descriptions optimization
- Title tag best practices
- Technical SEO improvements
- Content optimization
- Link building strategies
- And more!

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

## Screenshots

![ChatSEO Initial View](https://github.com/user-attachments/assets/7b88cd0a-1b62-4771-a836-36f068bb806d)

![ChatSEO Conversation](https://github.com/user-attachments/assets/8728bb9c-f84a-46c9-a3b7-8803dae00462)

## License

This project is a demonstration/clone and is not affiliated with the original ChatSEO application.
