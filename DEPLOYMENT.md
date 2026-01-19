# Deployment Guide for Vercel

This guide will help you deploy the Contractor Company website to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect the Vite configuration

3. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Environment Variables

No environment variables are required for this project.

## Build Configuration

The project includes a `vercel.json` file with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing configuration (all routes redirect to index.html)
- Cache headers for static assets

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain

2. **Performance Monitoring**
   - Vercel automatically provides analytics
   - Check the "Analytics" tab in your dashboard

## Troubleshooting

### Build Fails
- Ensure all dependencies are in `package.json`
- Check that Node.js version is compatible (18+)
- Review build logs in Vercel dashboard

### Routing Issues
- The `vercel.json` includes SPA routing configuration
- All routes should redirect to `index.html`

### Images Not Loading
- Ensure images are in the `public/images/` directory
- Check that image paths start with `/images/`

## Mobile Optimization

The site is optimized for mobile devices with:
- Responsive design (mobile-first approach)
- Touch-friendly buttons (minimum 48px height)
- Mobile hamburger menu
- Optimized font sizes for readability
- Proper viewport meta tags

## Performance

- Images are lazy-loaded where appropriate
- Static assets are cached (configured in vercel.json)
- Code splitting via Vite
- Optimized CSS and JavaScript bundles

## Support

For issues or questions:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Check browser console for runtime errors
