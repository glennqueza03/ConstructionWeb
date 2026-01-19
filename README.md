# LJH Construction Website

A modern, high-performance, single-page website for LJH Construction featuring bathroom remodels in Brownsville, TX.

## Features

- 🎨 Modern design with brand color palette
- 📱 Fully responsive and mobile-first
- ⚡ High performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🖼️ Parallax effects throughout
- ♿ Accessible design with high contrast
- 🚀 Optimized for fast loading

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Color Palette

- **Primary/Deep Navy**: `#0B2240`
- **Action Blue**: `#345DAE`
- **Subtle Accent**: `#A5ADC4`
- **Soft Gray**: `#D8DEE1`

## Project Structure

```
src/
  ├── components/
  │   ├── Hero.tsx
  │   ├── PainPoint.tsx
  │   ├── Features.tsx
  │   ├── Process.tsx
  │   ├── Services.tsx
  │   ├── Gallery.tsx
  │   └── Footer.tsx
  ├── App.tsx
  ├── main.tsx
  └── index.css
```

## Customization

### Adding Images to Gallery

Replace the placeholder images in `src/components/Gallery.tsx` with your actual project images. The component is optimized for fast loading with lazy loading enabled.

### Contact Information

Update contact details in `src/components/Footer.tsx` as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
