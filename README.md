# 🔌 Browser Extensions Manager UI

A modern, responsive web application for managing browser extensions with a beautiful glassmorphism UI design.

## ✨ Features

- **🌓 Dark/Light Theme Toggle** - Switch between elegant dark and light themes
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🔍 Smart Filtering** - Filter extensions by All, Active, or Inactive status
- **⚡ Interactive Controls** - Toggle extensions on/off with smooth animations
- **🗑️ Remove Extensions** - Delete extensions with confirmation dialog
- **🎨 Modern UI Design** - Glassmorphism effects, gradients, and micro-interactions
- **⚡ Performance Optimized** - Pure HTML, CSS, and JavaScript - no dependencies

## 🚀 Demo

### ☀️ Light Theme

**All** 

![light-theme-all](https://github.com/user-attachments/assets/cabb97a5-50b5-44ce-b1a6-2ceffe8b15a9)


#### 📱 Mobile

**All Mobile**

![light-theme-all-mobile](https://github.com/user-attachments/assets/9fa78a96-5391-4884-a73d-828d8c893c67)


### 🌙 Dark Theme

**All**

![dark-theme-all](https://github.com/user-attachments/assets/7b1c5182-006a-4f9e-bcc9-3ce5a609a936)


#### 📱 Mobile

**All Mobile**

![dark-theme-all-mobile](https://github.com/user-attachments/assets/f2c63e96-b7c3-4270-b8df-de5d5ecb10dd)

## 📁 Project Structure

```
browser-extensions-manager/
├── index.html              # Main HTML file
├── data.json              # Extensions data
├── README.md              # Project documentation
└── assets/
    └── images/
        ├── icon-sun.svg   # Light theme icon
        ├── icon-moon.svg  # Dark theme icon
        └── logo-*.svg     # Extension logos (optional)
```

## 🛠️ Installation & Setup

1. **Clone or download** the project files
2. **Prepare your assets** folder with the required icons:
   ```
   assets/images/icon-sun.svg
   assets/images/icon-moon.svg
   ```
3. **Open** `index.html` in your web browser
4. **Enjoy!** The app will work immediately

## 📊 Data Structure

The extensions data is stored in the JavaScript file with the following structure:

```json
[
  {
    "logo": "./assets/images/logo-devlens.svg",
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": true
  }
]
```

### Data Fields:
- `logo`: Path to extension logo (currently not displayed, icons are auto-generated)
- `name`: Extension name
- `description`: Brief description of the extension
- `isActive`: Boolean indicating if extension is enabled

## 🎨 Customization

### Adding New Extensions

Modify the `extensionsData` array in the JavaScript section:

```javascript
const extensionsData = [
  // Add your new extension here
  {
    "logo": "./assets/images/your-logo.svg",
    "name": "Your Extension",
    "description": "Your extension description.",
    "isActive": true
  }
];
```

### Customizing Colors

The app uses CSS custom properties (CSS variables) for consistent theming. You can modify the color scheme by updating the `:root` variables:

```css
:root {
  /* Neutral Colors - Main UI elements */
  --neutral-900: hsl(227, 75%, 14%);  /* Primary dark text */
  --neutral-800: hsl(226, 25%, 17%);  /* Dark theme cards */
  --neutral-700: hsl(225, 23%, 24%);  /* Secondary elements */
  --neutral-600: hsl(226, 11%, 37%);  /* Muted text */
  --neutral-300: hsl(0, 0%, 78%);     /* Border colors */
  --neutral-200: hsl(217, 61%, 90%);  /* Light backgrounds */
  --neutral-100: hsl(0, 0%, 93%);     /* Very light elements */
  --neutral-0: hsl(200, 60%, 99%);    /* Pure backgrounds */

  /* Accent Colors - Interactive elements */
  --red-400: hsl(3, 86%, 64%);        /* Hover states */
  --red-500: hsl(3, 71%, 56%);        /* Primary actions */
  --red-700: hsl(3, 77%, 44%);        /* Active states */

  /* Theme Gradients */
  --gradient-light: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
  --gradient-dark: linear-gradient(180deg, #040918 0%, #091540 100%);
}
```

**Usage in your project:**
- Replace the existing color values in the CSS with your custom properties
- Use `var(--color-name)` syntax for consistent theming
- Easy to maintain and update across the entire application


## 🎯 Key Components

### Theme System
- Automatic theme persistence (stored in memory during session)
- Smooth transitions between light and dark modes
- SVG icon integration for theme toggle

### Filter System
- Real-time filtering without page refresh
- Active/Inactive status management
- Empty state handling

### Extension Cards
- Glassmorphism design with backdrop blur
- Hover animations and micro-interactions
- Staggered loading animations

## 🖥️ Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Responsive Breakpoints

- **Desktop**: `> 768px` - 3 column grid
- **Tablet**: `≤ 768px` - Auto-fit grid
- **Mobile**: `< 400px` - Single column

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Grid layout, Flexbox, Custom properties, Animations
- **Vanilla JavaScript** - ES6+ features, DOM manipulation

### Performance Features
- **CSS Grid** for efficient layouts
- **CSS Transforms** for hardware-accelerated animations
- **Debounced interactions** for smooth user experience
- **Minimal DOM manipulation** for better performance

## 🎨 Design System

### Color Palette
```css
:root {
  /* Neutral Colors */
  --neutral-900: hsl(227, 75%, 14%);  /* Deep dark blue */
  --neutral-800: hsl(226, 25%, 17%);  /* Dark blue-gray */
  --neutral-700: hsl(225, 23%, 24%);  /* Medium dark */
  --neutral-600: hsl(226, 11%, 37%);  /* Medium gray */
  --neutral-300: hsl(0, 0%, 78%);     /* Light gray */
  --neutral-200: hsl(217, 61%, 90%);  /* Very light blue */
  --neutral-100: hsl(0, 0%, 93%);     /* Off white */
  --neutral-0: hsl(200, 60%, 99%);    /* Pure white */

  /* Red Colors */
  --red-400: hsl(3, 86%, 64%);        /* Light red */
  --red-500: hsl(3, 71%, 56%);        /* Medium red */
  --red-700: hsl(3, 77%, 44%);        /* Dark red */

  /* Gradient Colors */
  --gradient-light: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
  --gradient-dark: linear-gradient(180deg, #040918 0%, #091540 100%);
}

/* Usage Examples */
/* Light Theme */
Background: var(--gradient-light)
Cards: var(--neutral-0) with opacity
Text: var(--neutral-900)

/* Dark Theme */
Background: var(--gradient-dark)
Cards: var(--neutral-800) with opacity
Text: var(--neutral-0)

/* Accent Colors */
Primary: var(--red-500)
Hover: var(--red-400)
Active: var(--red-700)
```

### Typography
```css
Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
Title: 32px, weight 800
Cards: 18px, weight 700
Description: 14px, opacity 0.8
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons and design inspiration from modern extension managers
- Glassmorphism design trend
- CSS Grid and Flexbox specifications

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Challenge by Frontend Mentor. Coded by Nguyen Minh Tuan**

**Made with ❤️ for the developer community**
