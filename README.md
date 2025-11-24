# Washly Washing Services - Professional Cleaning Website

A modern, responsive website built for Washly Washing Services, a local cleaning company in Prince Edward Island. The site features a clean blue-and-gold color scheme, smooth animations, and an intuitive user interface.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with ShadCN UI for a polished, professional look
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Quote request dialog/modal
  - Contact form with validation
  - Clickable phone numbers for easy contact
  - Animated hero section with call-to-action buttons

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (built on Radix UI)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form

## Business Information

- **Company Name**: Washly Washing Services
- **Tagline**: Shine Brighter Together
- **Location**: Prince Edward Island, Canada
- **Contacts**:
  - Pathik Pandya: (705) 822-8605
  - Atmiya Patel: (705) 970-4920

## Services Offered

1. Window Cleaning
2. Gutter Cleaning
3. Soft & Pressure Washing (House, Driveway, Walkway, etc.)
4. Roof Cleaning

## Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Getting Started

1. **Clone or navigate to the project directory**:
   ```bash
   cd washly-washing-services
   ```

2. **Install dependencies**:

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server**:

   Using npm:
   ```bash
   npm run dev
   ```

   Using yarn:
   ```bash
   yarn dev
   ```

   Using pnpm:
   ```bash
   pnpm dev
   ```

4. **Open your browser**:

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

## Build for Production

To create an optimized production build:

Using npm:
```bash
npm run build
npm start
```

Using yarn:
```bash
yarn build
yarn start
```

Using pnpm:
```bash
pnpm build
pnpm start
```

## Project Structure

```
washly-washing-services/
├── app/
│   ├── layout.tsx          # Root layout with metadata and SEO
│   ├── page.tsx            # Home page (main entry point)
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact section with form
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation bar
│   ├── QuoteDialog.tsx     # Quote request modal
│   └── Services.tsx        # Services section
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

The website uses a professional blue and gold color scheme:

- **Primary Blue**: `#004C97` - Main brand color
- **Secondary Gold**: `#FFD700` - Accent color
- **White**: `#FFFFFF` - Background and text
- **Grays**: Various shades for text and borders

## Customization

### Changing Colors

Edit the [tailwind.config.ts](tailwind.config.ts) file to modify the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: "#004C97",  // Change this hex code
    foreground: "#ffffff",
  },
  secondary: {
    DEFAULT: "#FFD700",  // Change this hex code
    foreground: "#004C97",
  },
}
```

### Updating Content

- **Hero Section**: Edit [components/Hero.tsx](components/Hero.tsx)
- **Services**: Modify the `services` array in [components/Services.tsx](components/Services.tsx)
- **About**: Update content in [components/About.tsx](components/About.tsx)
- **Contact Info**: Change details in [components/Contact.tsx](components/Contact.tsx) and [components/Footer.tsx](components/Footer.tsx)

### SEO & Metadata

Update metadata in [app/layout.tsx](app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... other metadata
}
```

## Features in Detail

### Navigation
- Fixed navigation bar that becomes visible on scroll
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- "Get a Quote" call-to-action button

### Hero Section
- Full-screen gradient background with animated pattern
- Animated text and buttons using Framer Motion
- Multiple call-to-action buttons
- Scroll indicator animation

### Services Section
- Card-based layout with hover effects
- Custom icons for each service
- Staggered animations on scroll
- Responsive grid layout

### About Section
- Two-column layout (content + values)
- Animated value propositions
- Highlighting company strengths

### Contact Section
- Dual layout: contact form + contact information
- Form validation
- Clickable phone numbers
- Business hours display

### Quote Request Modal
- Form for requesting quotes
- Service selection dropdown
- Mobile-optimized dialog
- Success state feedback

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Code splitting via Next.js App Router
- Lazy loading components
- Minimal bundle size

## License

This project is created for Washly Washing Services. All rights reserved.

## Support

For questions or issues with the website, contact:
- Pathik Pandya: (705) 822-8605
- Atmiya Patel: (705) 970-4920

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI**

*Shine Brighter Together* ✨
# Platinum_Construction
