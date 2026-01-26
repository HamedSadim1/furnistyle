# FurniStyle 🛋️

A modern, responsive furniture e-commerce application built with React Router 6, showcasing contemporary web development practices and elegant UI/UX design.

![FurniStyle Preview](https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and hover effects
- **React Router 6**: Advanced routing with nested layouts, protected routes, and dynamic navigation
- **Product Catalog**: Interactive furniture showcase with search functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Modern CSS**: Custom properties, flexbox, and CSS Grid layouts
- **Icon Integration**: Beautiful React Icons for enhanced visual appeal

## 🛠️ Tech Stack

- **Frontend**: React 19.2.4 with TypeScript
- **Routing**: React Router DOM 7.13.0
- **Build Tool**: Vite 7.3.1
- **Icons**: React Icons 5.5.0
- **Styling**: Modern CSS with custom properties
- **Development**: ESLint, TypeScript compiler

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd furnistyle
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   ```bash
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Pages/
│   │   ├── About.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Error.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Products.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── SharedLayout.tsx
│   │   ├── SharedProductLayout.tsx
│   │   └── SingleProduct.tsx
│   ├── StyledNavbar.tsx
│   └── usePages.tsx
├── data/
│   └── index.ts
├── types/
│   └── index.ts
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## 🎯 Key Components

### Navigation & Layout

- **StyledNavbar**: Responsive navigation with mobile hamburger menu
- **SharedLayout**: Main layout wrapper with footer integration
- **SharedProductLayout**: Product-specific layout with breadcrumbs

### Pages

- **Home**: Welcome page with hero section and featured products
- **Products**: Product catalog with search and filter functionality
- **SingleProduct**: Detailed product view with pricing
- **About**: Company information and mission
- **Login/Dashboard**: Authentication and user dashboard
- **Error**: 404 error handling page

### Features

- **Search Functionality**: Real-time product filtering
- **Responsive Cards**: Modern product display with hover effects
- **Protected Routes**: Authentication-based route protection
- **Dynamic Routing**: URL-based product navigation

## 🎨 Design System

### Color Palette

- **Primary**: Purple gradient (#645cff to #504acc)
- **Greys**: Comprehensive grey scale for text and backgrounds
- **Accent**: Green/red for success/error states

### Typography

- **Primary Font**: System font stack for optimal performance
- **Sizes**: Responsive text scaling with custom properties

### Components

- **Buttons**: Consistent styling with hover states
- **Cards**: Shadow effects and smooth transitions
- **Forms**: Clean input styling with focus states

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Configured for React and TypeScript
- **TypeScript**: Strict type checking enabled
- **CSS**: Organized with custom properties and consistent naming

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Learning Outcomes

This project demonstrates:

- Advanced React Router 6 patterns
- Modern CSS techniques
- TypeScript integration
- Responsive web design
- Component composition
- State management
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Router**: For powerful routing capabilities
- **Vite**: For lightning-fast development experience
- **React Icons**: For beautiful icon components
- **Unsplash**: For high-quality product images

---

**Built with ❤️ using React Router 6**
