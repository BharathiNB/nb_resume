# Portfolio Website Project

## Overview
This is a modern, responsive portfolio website for Bharathi N, a Software Engineer with 3+ years of experience in full-stack development. The project is built using React.js with TypeScript, Express.js backend, and PostgreSQL database, creating a professional showcase of skills, experience, and projects.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Middleware**: Built-in Express middleware for JSON parsing and logging

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### UI Components
- **Component Library**: shadcn/ui with Radix UI primitives
- **Design System**: Consistent theming with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI

### Portfolio Sections
- **Hero Section**: Professional introduction with contact links and profile photo
- **About**: Personal background and statistics with profile image
- **Skills**: Technical competencies with visual progress indicators
- **Experience**: Work history with detailed achievements
- **Education**: Academic background, certifications, awards, and languages
- **Contact**: Interactive contact form with backend integration

### Interactive Features
- **Contact Form**: Validated form submission with toast notifications
- **Floating Resume Button**: Download functionality for resume
- **Smooth Scrolling Navigation**: Animated section transitions
- **Mobile-Responsive Menu**: Collapsible navigation for mobile devices

## Data Flow

### Contact Form Workflow
1. User fills out contact form with validation
2. Form data validated using Zod schema on client-side
3. Data sent to `/api/contact` endpoint via POST request
4. Server validates data again using shared schema
5. Contact information stored in PostgreSQL database
6. Success/error response sent back to client
7. Toast notification displayed to user

### Navigation Flow
1. Single-page application with section-based navigation
2. Smooth scrolling implemented with native browser APIs
3. Active section tracking via scroll position monitoring
4. Mobile menu state managed with React hooks

## External Dependencies

### UI & Styling
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development & Build
- **vite**: Frontend build tool and dev server
- **typescript**: Type safety and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Backend & Database
- **drizzle-orm**: Type-safe ORM with excellent TypeScript support
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **zod**: Runtime type validation and schema definition

### Form & Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Assets**: Static assets served from build directory

### Development Workflow
- **Dev Server**: Vite dev server with HMR for frontend development
- **API Development**: Express server with TypeScript compilation via tsx
- **Database**: Drizzle migrations and schema management

### Production Considerations
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Static File Serving**: Express serves built React application
- **Error Handling**: Centralized error middleware with proper status codes
- **Logging**: Request/response logging for API endpoints

## Changelog
- July 05, 2025: Initial setup - Complete portfolio website implementation
- July 05, 2025: Integrated user's profile photo in hero and about sections
- July 05, 2025: Removed projects section as per user request
- July 05, 2025: Added contact form functionality with backend storage

## User Preferences
Preferred communication style: Simple, everyday language.