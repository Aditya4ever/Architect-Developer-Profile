# Cloud Architect & Developer Portfolio

A professional portfolio website showcasing cloud architecture and development expertise across GCP, Azure, and AWS platforms.

## 🌟 Features

- **Responsive Design**: Fully mobile-friendly and responsive across all devices
- **Multi-Cloud Showcase**: Filter projects by GCP, Azure, and AWS
- **Sector Organization**: Projects organized by industry (Healthcare, Power-Utilities, Financial Services, Retail, Manufacturing)
- **Articles Integration**: Showcase your Medium and LinkedIn articles
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Customization**: Simple data structure for adding new projects and articles

## 🚀 Quick Start

### 1. Update Your Information

**Edit `index.html`:**
- Replace "Cloud Architect & Developer" with your name in the hero section
- Update social media links (Medium, LinkedIn, GitHub) in multiple places:
  - Hero section social links
  - Contact section
  - Replace `@yourusername` with your actual usernames

**Edit `scripts/data.js`:**
- Add your actual projects to the `projectsData` object
- Add your articles to the `articlesData` array
- Update links to point to your actual Medium and LinkedIn articles

**Edit `styles/main.css`:**
- Customize colors in the `:root` CSS variables if desired
- Adjust any styling to match your preferences

### 2. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch (usually `main` or `master`)
4. Click "Save"
5. Your site will be published at `https://Aditya4ever.github.io/Architect-Developer-Profile/`

## 📁 File Structure

```
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles and responsive design
├── scripts/
│   ├── data.js            # Project and article data
│   └── main.js            # Interactive functionality
└── README.md              # This file
```

## ✏️ Customization Guide

### Adding New Projects

Edit `scripts/data.js` and add to the appropriate sector:

```javascript
{
    title: "Your Project Title",
    platform: "gcp", // or "azure", "aws"
    description: "Brief description of the project",
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "https://link-to-your-article-or-case-study"
}
```

### Adding New Articles

Edit `scripts/data.js`:

```javascript
{
    title: "Your Article Title",
    category: "Cloud Architecture", // or "Development", "Best Practices"
    excerpt: "Brief description of the article",
    date: "2025-01-15",
    platform: "medium", // or "linkedin"
    link: "https://link-to-your-article"
}
```

### Adding New Sectors

1. Add a new sector group in `index.html` in the portfolio section
2. Add data for that sector in `scripts/data.js`
3. Update the rendering logic in `scripts/main.js`

## 🎨 Color Customization

Edit the CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #00a67e;    /* Accent color */
    --dark-bg: #1a1a2e;           /* Dark backgrounds */
    --light-bg: #f8f9fa;          /* Light backgrounds */
    /* ... more colors */
}
```

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## 📝 To-Do

- [ ] Update all social media links with your actual profiles
- [ ] Replace placeholder projects with your real work
- [ ] Add your actual articles
- [ ] Customize colors to match your brand
- [ ] Add your professional photo (optional)
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Support

If you need help customizing this portfolio, feel free to reach out or open an issue in this repository.

---

**Made with ❤️ for Cloud Architects and Developers**