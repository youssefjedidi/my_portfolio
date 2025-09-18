# AI Coding Guidelines for Youssef Jedidi Portfolio

## Project Overview
This is a React-based personal portfolio website for Youssef Jedidi, a Computer Engineering student specializing in AI/ML and web development. The site showcases projects, experience, skills, and provides contact functionality.

## Architecture & Key Patterns

### Content Management
- **Centralized Configuration**: All content lives in `src/content_option.js` - modify this file to update portfolio items, skills, experience, and personal information
- **Data-Driven Components**: Components map over data arrays from `content_option.js` (e.g., `dataportfolio.map()`, `experience.map()`)
- **Example**: Adding a new portfolio project requires only updating the `dataportfolio` array in `content_option.js`

### Component Structure
```
src/
├── app/
│   ├── App.js (main app with router, loading screen, animated cursor)
│   └── routes.js (page routing with CSSTransition animations)
├── pages/
│   ├── home/ (landing page with typewriter animation)
│   ├── portfolio/ (projects + experience + certificates)
│   ├── contact/ (EmailJS contact form)
│   └── about/ (currently disabled in navigation)
├── components/
│   ├── socialicons/ (floating social links)
│   └── themetoggle/ (dark/light theme switcher)
└── header/ (responsive navigation with hamburger menu)
```

### Routing & Navigation
- Uses React Router v6 with `basename={process.env.PUBLIC_URL}` for GitHub Pages deployment
- Page transitions via `react-transition-group` CSSTransition (400ms enter/exit)
- Navigation menu toggles `document.body.classList.toggle("ovhidden")` to prevent scrolling
- About page route exists but is commented out in header navigation

## Styling & Theming

### CSS Architecture
- Bootstrap 5 + custom CSS in component `style.css` files
- Dark/light theme via `data-theme` attribute on `document.documentElement`
- Theme persistence using `localStorage.setItem('theme', theme)`
- Responsive design with Bootstrap grid system (`Col lg="8"`, `d-lg-flex`)

### Animation Patterns
- **Typewriter Effect**: Used in home/portfolio pages for animated text rotation
- **Framer Motion**: Available for complex animations (currently underutilized)
- **Custom Button Animations**: Ring effects with CSS classes (`ring one/two/three`)
- **Page Transitions**: CSSTransition with `page` className for smooth routing

## External Integrations

### EmailJS Contact Form
```javascript
// Configuration in content_option.js
contactConfig = {
  YOUR_SERVICE_ID: "service_upiqsbk",
  YOUR_TEMPLATE_ID: "template_gn0t00c",
  YOUR_USER_ID: "nWW-hP5g0boErypRe"
}
```
- Form submission sends to `youssefjedidi2022@gmail.com`
- Success/error handling with Bootstrap Alert component
- Loading state shows "Sending..." button text

### Google Analytics
- Tracking ID: `G-379KCVV4Y4`
- Script loaded in `public/index.html`

## Development Workflow

### Build & Deployment
```bash
npm start          # Development server
npm run build      # Production build
npm run predeploy  # Build + copy index.html to 404.html for SPA routing
npm run deploy     # Deploy to GitHub Pages via gh-pages
```

### Key Development Patterns
- **SEO Optimization**: Use `react-helmet-async` for page-specific meta tags
- **Image Assets**: Store in `public/images/` and reference as `/images/filename.jpg`
- **Responsive Images**: Use Bootstrap responsive classes and custom CSS
- **Social Links**: Configure in `socialprofils` object (GitHub, LinkedIn active; Facebook commented out)

## Common Tasks

### Adding Portfolio Projects
1. Add image to `public/images/`
2. Update `dataportfolio` array in `content_option.js`:
```javascript
{
  img: "/images/new-project.jpg",
  description: "Project description",
  link: "https://github.com/youssefjedidi/project-repo"
}
```

### Updating Skills/Experience
- Skills: Array of `{name, value}` objects (value = percentage)
- Experience: Array of `{jobtitle, where, date}` objects
- Both render automatically in portfolio page

### Modifying Navigation
- Routes defined in `src/app/routes.js`
- Menu items in `src/header/index.js` (some commented out)
- Social links in header footer and floating component

### Theming
- CSS custom properties for theme colors
- Toggle via moon icon in header
- Persists across sessions via localStorage

## Code Quality Notes
- Commented-out code indicates planned features (About page, additional portfolio items)
- Loading screen shows for 3 seconds on initial load
- Animated cursor uses `react-intersection-observer` pattern
- EmailJS error handling includes scroll-to-view for alerts

## Performance Considerations
- Images loaded from `/images/` (consider optimization for production)
- Typewriter animation runs continuously (consider pause on page blur)
- Bootstrap CSS loaded globally (consider tree-shaking for unused components)

## Testing Patterns

### Unit Testing Standards
- **Framework**: Jest (bundled with Create React App)
- **Component Testing**: React Testing Library for user-centric testing
- **Test File Naming**: `ComponentName.test.js` or `ComponentName.spec.js`
- **Test Location**: Place tests alongside components in `__tests__/` folders or as sibling files

### Testing Best Practices
```javascript
// Example component test pattern
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactUs } from './contact';

describe('ContactUs Component', () => {
  test('renders contact form', () => {
    render(<ContactUs />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
  
  test('handles form submission', () => {
    render(<ContactUs />);
    // Test form validation and submission logic
  });
});
```

### Integration Testing
- **EmailJS Integration**: Mock external API calls using `jest.mock()`
- **Router Testing**: Use `MemoryRouter` for component testing with routing
- **Theme Testing**: Test theme toggle functionality and localStorage persistence

### Test Coverage Goals
- **Minimum Coverage**: 80% for critical components (forms, navigation, data display)
- **Priority Areas**: Contact form validation, theme switching, portfolio data rendering
- **CI/CD Integration**: Run tests on pre-commit hooks and deployment

## Code Organization Preferences

### File Structure Standards
```
src/
├── components/          # Reusable UI components
│   ├── ComponentName/
│   │   ├── index.js    # Main component export
│   │   ├── style.css   # Component-specific styles
│   │   └── ComponentName.test.js  # Component tests
├── pages/              # Route-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and helpers
├── constants/          # Application constants
└── content_option.js   # Centralized content configuration
```

### Component Organization
- **Single Responsibility**: Each component should have one clear purpose
- **Functional Components**: Prefer functional components with hooks over class components
- **Props Interface**: Document component props with PropTypes or TypeScript (future migration)
- **Default Exports**: Use default exports for components, named exports for utilities

### Naming Conventions
- **Components**: PascalCase (e.g., `PortfolioItem`, `ContactForm`)
- **Files**: kebab-case for multi-word files (e.g., `content-option.js`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme`, `useLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`, `THEME_MODES`)

### Import/Export Patterns
```javascript
// Preferred import order
import React from 'react';                    // React imports
import { useState, useEffect } from 'react';  // React hooks
import { Container, Row, Col } from 'react-bootstrap';  // External libraries
import { meta, contactConfig } from '../../content_option';  // Internal modules
import './style.css';                         // Styles
```

### State Management
- **Local State**: Use `useState` for component-specific state
- **Global State**: Leverage `content_option.js` for shared data
- **Side Effects**: Use `useEffect` for API calls, DOM manipulation, and subscriptions
- **Custom Hooks**: Extract complex stateful logic into reusable hooks

### Error Handling Patterns
- **User-Friendly Messages**: Display meaningful error messages to users
- **Graceful Degradation**: Ensure app remains functional during errors
- **Logging**: Use `console.error()` for debugging, remove in production
- **Form Validation**: Implement client-side validation with visual feedback

### Code Quality Standards
- **ESLint Configuration**: Follow React app default linting rules
- **Consistent Formatting**: Use consistent indentation and spacing
- **Accessibility**: Include ARIA labels and semantic HTML where appropriate
- **Performance**: Optimize re-renders with `React.memo()` for expensive components
- **Bundle Size**: Monitor and optimize bundle size for production builds</content>
<parameter name="filePath">/Volumes/PSSD T7/yj_dev/my_portfolio/.github/copilot-instructions.md