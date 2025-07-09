# Venkanna Babu Pamarthi - Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Venkanna Babu Pamarthi, a B.Tech student specializing in Artificial Intelligence & Data Science. The application is designed as a full-stack web application with a React frontend and Express.js backend, featuring a professional dark theme and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom dark theme variables
- **UI Components**: Radix UI components with shadcn/ui customization
- **Animations**: CSS animations with custom keyframes for floating elements and smooth transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **API Structure**: RESTful API with `/api` prefix
- **Development**: Hot reloading with Vite integration

### Build and Deployment
- **Development**: Runs both frontend and backend concurrently
- **Production**: Frontend builds to static files, backend bundles with esbuild
- **TypeScript**: Strict type checking across the entire application

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with profile image and call-to-action buttons
2. **About Section**: Personal background and core competencies
3. **Education Section**: Academic timeline with visual progression
4. **Skills Section**: Technical and soft skills with progress bars
5. **Certifications Section**: Professional certifications and achievements
6. **Projects Section**: Featured projects with detailed descriptions
7. **Experience Section**: Work history and internship details
8. **Contact Section**: Contact form and social media links

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dark Theme**: Professional dark color scheme with accent colors
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Form Handling**: Contact form with validation
- **Image Optimization**: Proper image handling and optimization
- **SEO Optimized**: Meta tags and structured content

## Data Flow

### Client-Side Flow
1. User navigates to portfolio sections through navigation menu
2. React components render content based on static data
3. TanStack Query manages any future API calls
4. Smooth scrolling animations enhance user experience
5. Contact form submissions handled through backend API (when implemented)

### Server-Side Flow
1. Express server serves static assets in production
2. API routes handle form submissions and data requests
3. Database operations managed through Drizzle ORM
4. Session management for any future user interactions

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: Class variance authority, clsx, date-fns
- **Development**: Vite, TypeScript, ESLint

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, PostgreSQL, Neon Database
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Tools
- **Replit Integration**: Development banner and error overlay
- **Hot Reloading**: Vite HMR for frontend, tsx watch for backend
- **TypeScript**: Full type safety across client and server
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Development Environment
- Frontend runs on Vite dev server with hot module replacement
- Backend runs on Express with tsx for TypeScript execution
- Database connection to Neon Database for development
- Replit-specific tooling for cloud development

### Production Deployment
- Frontend builds to static files in `dist/public`
- Backend bundles to `dist/index.js` with esbuild
- Single server serves both API and static files
- Environment variables for database configuration
- PostgreSQL database for production data storage

### Environment Configuration
- Database URL configured through environment variables
- Separate configurations for development and production
- Session management with PostgreSQL store
- Error handling and logging for production monitoring

The application follows a monorepo structure with shared TypeScript types and utilities, ensuring type safety across the entire stack while maintaining clean separation of concerns between frontend and backend code.