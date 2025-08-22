# Neurova AI Website

A professional, elegant, and tech-focused website for Neurova AI, a Netherlands-based AI development company. This website showcases modern design trends with cool animations and professional styling.

## 🌟 Features

### Design & Styling
- **Modern Design**: Clean, professional layout following latest design trends
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Gradient Accents**: Beautiful gradient color schemes and text effects
- **Glassmorphism**: Modern glass-like effects with backdrop blur
- **Typography**: Professional Inter font family with excellent readability

### Animations & Effects
- **Floating Elements**: Animated floating cards in the hero section
- **Parallax Scrolling**: Smooth parallax effects for background elements
- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Loading Animations**: Staggered loading animations for content
- **Particle Effects**: Subtle floating particles in the background
- **Cursor Trail**: Interactive cursor trail effect

### Interactive Features
- **Smooth Navigation**: Fixed navigation with scroll effects
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Form Handling**: Interactive contact and newsletter forms
- **Notifications**: Toast notification system for user feedback
- **Smooth Scrolling**: Smooth scrolling between sections

### Content Sections
- **Hero Section**: Eye-catching introduction with floating elements
- **Services**: Three-tier service packages with feature lists
- **Why Choose Us**: Highlighting company advantages
- **About Us**: Company information and mission statement
- **Contact**: Contact form and company details
- **Newsletter**: Email subscription form
- **Footer**: Comprehensive footer with links and social media

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/neurova-ai-logo.svg`
3. Open `index.html` in your web browser

### Development Setup
For development with live reload:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 📁 File Structure

```
neurova-ai-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/
│   └── neurova-ai-logo.svg  # Company logo
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #06b6d4;    /* Secondary accent */
    --accent-color: #8b5cf6;       /* Additional accent */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text */
    --bg-primary: #ffffff;         /* Main background */
    --bg-secondary: #f8fafc;       /* Secondary background */
}
```

### Fonts
The website uses Inter font family. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify the `font-family` property in `styles.css`

### Animations
Animation speeds and effects can be customized in the CSS file:

```css
/* Adjust animation duration */
.floating-card {
    animation: float 6s ease-in-out infinite; /* Change 6s to desired duration */
}

/* Modify animation delays */
[data-aos-delay="100"] {
    animation-delay: 0.1s; /* Adjust delay values */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features**: CSS Grid, Flexbox, CSS Variables, Intersection Observer API
- **Fallbacks**: Graceful degradation for older browsers

## ⚡ Performance Features

- **Optimized Animations**: Uses `requestAnimationFrame` for smooth animations
- **Debounced Scroll**: Optimized scroll event handling
- **Lazy Loading**: Elements animate in as they become visible
- **CSS Transforms**: Hardware-accelerated animations using CSS transforms

## 🔧 JavaScript Features

### Core Functions
- `initNavigation()`: Handles navigation and mobile menu
- `initScrollAnimations()`: Manages scroll-triggered animations
- `initFloatingElements()`: Controls floating element animations
- `initFormHandling()`: Manages form submissions and validation
- `showNotification()`: Displays user notifications

### Interactive Elements
- Mobile navigation toggle
- Smooth scrolling between sections
- Form validation and submission
- Hover effects and animations
- Parallax scrolling effects

## 📧 Contact Forms

The website includes two forms:

1. **Contact Form**: For general inquiries and service requests
2. **Newsletter Form**: For email subscriptions

Both forms include client-side validation and simulated submission handling.

## 🎯 SEO Features

- Semantic HTML structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images
- Structured content sections

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Server Requirements
- No server-side processing required
- Static file hosting only
- HTTPS recommended for production

## 🔒 Security Considerations

- Client-side form validation
- No sensitive data collection
- HTTPS recommended for production
- Regular dependency updates

## 📈 Analytics & Tracking

To add analytics:
1. Add Google Analytics or similar tracking code to `index.html`
2. Place before the closing `</head>` tag
3. Update privacy policy if required

## 🛠️ Troubleshooting

### Common Issues

**Animations not working:**
- Check browser compatibility
- Ensure JavaScript is enabled
- Verify all files are loaded correctly

**Mobile menu not working:**
- Check JavaScript console for errors
- Ensure proper CSS classes are applied
- Verify touch events are supported

**Forms not submitting:**
- Check browser console for JavaScript errors
- Verify form validation is working
- Check network connectivity

### Debug Mode
Enable debug mode by adding this to the browser console:
```javascript
window.NeurovaAI.debug = true;
```

## 🤝 Contributing

To contribute to the website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Neurova AI. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: info@neurovaai.com
- Phone: +31 619919544
- Website: https://neurova-ai.com/

## 🔄 Updates

The website is regularly updated with:
- Performance improvements
- New features and animations
- Security updates
- Browser compatibility improvements
- Design enhancements

---

**Built with ❤️ for Neurova AI**
