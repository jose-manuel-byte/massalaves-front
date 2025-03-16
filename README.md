# Massalaves Community App

## Project Overview

This application is designed for the Massalaves community to manage user access and facility reservations. The primary functionality allows community members to:

- Log in to their accounts
- Reserve the community room adjacent to the swimming pool
- Make reservations for 24-hour periods on specific dates
- View availability through an interactive calendar

The project is built as a modern single-page application with a focus on clean code, maintainability, and scalability.

## Technology Stack

### Core Technologies
- **Vue.js 3**: Progressive JavaScript framework for building user interfaces
- **TypeScript**: Typed superset of JavaScript for improved development experience
- **Vuetify 3**: Material Design component library for Vue

### Routing & State Management
- **Vue Router**: Navigation and routing system
- **Pinia**: State management for Vue 3

### Development & Build Tools
- **Vite**: Next generation frontend tooling and development server
- **Node.js**: JavaScript runtime environment
- **npm/yarn**: Package manager for dependencies

### Development Utilities
- **ESLint**: Code linting tool
- **Prettier**: Code formatter
- **Material Design Icons**: Icon library for the UI

## Project Structure

```
src/
├── assets/          # Static files (CSS, images)
├── components/      # Reusable components
│   ├── common/      # Generic components (buttons, inputs)
│   ├── layout/      # Structure components (header, footer)
│   └── feature/     # Feature-specific components
├── composables/     # Reusable functionality with Composition API
├── router/          # Routing configuration
├── stores/          # Global state with Pinia
├── services/        # API services, authentication, etc.
├── utils/           # Utility functions
├── plugins/         # Plugin configurations (Vuetify)
└── views/           # Main pages/views
```

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/username/massalaves-community.git
cd massalaves-community
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## Features

- **User Authentication**: Secure login system for community members
- **Calendar Integration**: Interactive calendar for booking visualization
- **Reservation Management**: System to book the community room
- **Responsive Design**: Works on desktop and mobile devices

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
