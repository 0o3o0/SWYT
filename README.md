# StopWastingYourTime (SWYT) Landing Page

This repository contains the complete static landing page for StopWastingYourTime (SWYT), a Usage-Based Billing SaaS for high-tech companies.

## Features
- Hero carousel with 3 bold slides
- Benefits & objection-handling section
- Testimonials slider
- Final lead-capture form
- Scroll-triggered animations (blur, fade, bounce)
- Responsive & cross-browser (Safari, Chrome, Firefox)
- Deployed via GitHub Pages

## Getting Started
1. Clone this repo:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/swyt-landing.git
   cd swyt-landing
   ```
2. Open `index.html` in your browser for local preview.
3. To deploy on GitHub Pages:
   - Push to `main` branch
   - In repo Settings → Pages → Source: `main` → `/ (root)`

## Directory Structure
```
/ (root)
├── index.html
├── style.css      # Tailwind built (via CDN in this example)
└── script.js      # Carousel & animations logic
```