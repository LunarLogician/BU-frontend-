# BU Assistant Landing Page

A modern, responsive landing page for BU Assistant - Bahria University's CMS and course management application. Features payment integration with LemonSqueezy for app subscriptions.

## 🌟 Features

- **Modern UI Design** - Clean, gradient-based dark theme with smooth animations
- **Payment Integration** - LemonSqueezy checkout integration for app subscriptions
- **Responsive Design** - Mobile-first approach for all device sizes
- **Fast Performance** - Optimized CSS and JavaScript with minimal dependencies
- **SEO Friendly** - Semantic HTML with proper meta tags

## 📁 Project Structure

```
├── index.html          # Main landing page
├── download.html       # Post-payment download page
├── script.js          # Payment flow and interaction logic
├── style.css          # Styling and responsive design
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ (optional, for local development server)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bu-assistant-landing.git
cd bu-assistant-landing
```

2. Open the project in your browser:
```bash
# Option 1: Direct file access
open index.html

# Option 2: Using Python (for local server)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 💳 Payment Configuration

This project uses LemonSqueezy for payment processing. To configure payments:

1. Update the `LEMONSQUEEZY_CONFIG` object in `script.js`:
```javascript
const LEMONSQUEEZY_CONFIG = {
    BASIC: {
        product_id: 'your_basic_product_id',
        checkout_url: 'your_checkout_url',
        // ... other config
    },
    PRO: {
        product_id: 'your_pro_product_id',
        checkout_url: 'your_checkout_url',
        // ... other config
    }
};
```

2. Replace placeholder values with your actual LemonSqueezy credentials

## 🎨 Customization

### Colors

The color scheme is defined in CSS variables. Edit in `style.css`:
```css
:root {
    --primary: #0E5CAD;
    --accent: #7C4DFF;
    --text: #122033;
    /* ... more colors */
}
```

### Fonts

Premium fonts are loaded from Google Fonts. To change fonts, update the font links in `index.html` and CSS variables.

## 🔒 Security Notes

- Always load external resources (fonts, APIs) over HTTPS
- Keep LemonSqueezy API credentials secure - never commit them to version control
- Validate all user inputs before processing
- Use environment variables for sensitive configuration

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, issues, or questions about the BU Assistant app:
- Visit: https://bahriauniversity.edu.pk
- Contact: support@bu-assistant.app

## 🙋 Authors

- **Your Name** - Initial work

## 📚 Resources

- [LemonSqueezy Documentation](https://docs.lemonsqueezy.com/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Google Fonts](https://fonts.google.com/)

---

**Last Updated:** April 2026
