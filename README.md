# 🌮 Food Recipe App

A modern, responsive React application for discovering and exploring food recipes. This application allows users to search for recipes, view detailed cooking instructions, and get information about ingredients and nutritional values.

## ✨ Features

- 🔍 Real-time recipe search
- 📝 Detailed recipe information including:
  - Cooking time
  - Serving size
  - Vegetarian/Vegan indicators
  - Price per serving
- 📋 Complete ingredient lists with measurements
- 📝 Step-by-step cooking instructions
- 🖼️ High-quality recipe images
- 💫 Smooth animations and transitions
- 📱 Responsive design for all devices
- ⚡ Fast performance with React 18
- 🔄 Real-time UI updates
- 🎨 Modern component architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A Spoonacular API key

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Spoonacular API key:
```env
VITE_API_KEY=your_spoonacular_api_key_here
VITE_API_URL=https://api.spoonacular.com/recipes/complexSearch
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
  - React 18.2.0 with improved rendering and concurrent features
  - React Hooks for state management
  - Custom hooks for API integration
  - Functional components with TypeScript support
- [Vite](https://vitejs.dev/) - Build tool
  - Fast Hot Module Replacement (HMR)
  - Optimized build process
  - Environment variable handling
- [Spoonacular API](https://spoonacular.com/food-api) - Recipe data API
- CSS Modules - Styling

## 📦 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Container.jsx    # Layout container component
│   ├── FoodDetails.jsx  # Detailed recipe view
│   ├── FoodItem.jsx     # Individual recipe card
│   ├── FoodList.jsx     # List of recipe cards
│   ├── InnerContainer.jsx # Inner layout component
│   ├── Item.jsx         # Individual ingredient item
│   ├── ItemList.jsx     # List of ingredients
│   ├── Nav.jsx          # Navigation component
│   └── Search.jsx       # Search functionality
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🎯 Features in Detail

### React Components
- **Functional Components**: Modern React components using hooks
- **Custom Hooks**: Specialized hooks for API calls and state management
- **Props Type Checking**: Runtime type checking for component props
- **Error Boundaries**: Graceful error handling
- **Memo and Callbacks**: Optimized rendering performance

### Search Functionality
- Real-time recipe search as you type
- Debounced search implementation
- Instant results display
- Rich preview cards for each recipe
- Search history management

### Recipe Details
- Comprehensive recipe information
- Ingredient lists with quantities
- Step-by-step cooking instructions
- Cooking time and serving size
- Dietary information (vegetarian/vegan)
- Cost per serving
- Nutritional information
- Dynamic image loading with lazy loading

### State Management
- React Hooks for local state
- Custom hooks for shared logic
- Efficient state updates
- Optimized re-rendering

## 🎨 Styling

The application uses CSS Modules for styling, providing:
- Scoped styling for components
- Clean and modern UI design
- Smooth animations and transitions
- Responsive layout for all screen sizes
- Dark/Light mode support
- CSS Variables for theme customization
- Flexbox and Grid layouts
- Mobile-first approach

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Features
- Hot Module Replacement (HMR)
- ESLint configuration
- Development mode with detailed errors
- Source maps for debugging
- Performance monitoring

## 📝 Environment Variables

Required environment variables:

- `VITE_API_KEY`: Your Spoonacular API key
- `VITE_API_URL`: Spoonacular API endpoint

## 🔍 Code Quality

- ESLint for code linting
- Prettier for code formatting
- React best practices enforcement
- Component composition patterns
- Custom hooks guidelines
- Performance optimization techniques

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Spoonacular API for the recipe data
- The open-source community for inspiration and tools
