# UnderGradsMedia

UnderGradsMedia is a high-speed, premium, AI-orchestrated consulting and execution web application designed for modern business development, design, tech support, and media production. 

This repository contains the completely redesigned frontend built with a luxury dark theme layout, custom glassmorphism design systems, and responsive, interactive micro-animations.

---

## 🌟 Key Features & Redesigns Implemented

### 1. Hero Page & Navigation
- **Premium Glassmorphic CTA Buttons**: The navbar CTA ("Let's Start") and Hero button ("Let's Build Together") utilize a custom glassmorphic aesthetic with blur backdrops (`blur(16px)`), subtle inner borders, translucent gradients, and hover transitions.
- **Unified Branding**: Updated all references to the new serif typography logo brand name **UNDERGRADSMEDIA** (uppercase, wide tracking `tracking-[0.18em]`) with white-to-purple gradients matching the deep violet backdrop.
- **Floating Badges**: Added subtle float animations to the trust badge below the header.

### 2. Tabbed About & Process Section
- **Dynamic Framer Motion Tabs**: Easily toggle between **About**, **Process**, and **Implementation** details.
- **Animated Underline Indicator**: Smooth spring-based slide animation transitions when swapping tabs.
- **Custom Visual Elements**: Features clean glass stat displays, watermark water-ghost step numbers, and capsule pills.

### 3. Editorial Case Studies Portfolio
- **Editorial Layout Split-Grid**: Replaced the basic gallery grid with a modern two-column agency showcase:
  - **Left Column**: Category, full-text narrative descriptions, and clean arrow actions with dynamic entrance and exit translations.
  - **Right Column**: Tilted premium frame showcasing responsive project images with scale crossfades.
- **Interactive Checklists**: Vertical portfolio menu list item triggers interactive opacity shifts and changes active studies on hover or click.

### 4. Spacious Lead Inquiry Modal
- **Wider Premium Profile**: Expanded layout width to `540px` with generous internal padding (`48px` on mobile, `56px` on tablet/desktop) to remove crowding.
- **Spacious Form Rhythm**: Styled each form group wrapper with comfortable vertical spacing (`mb-8`) and labels with custom line-heights (`leading-loose`).
- **Seamless Backdrop Design**: Background of the pop-up matches the main site background (`#0c0817`) exactly.
- **Consistent Inputs**: Inputs, select dropdowns, and textareas use unified backgrounds (`rgba(255, 255, 255, 0.02)`), precise line height (`line-height: 1.6`), and a customized transparent dropdown arrow SVG for consistency across different web browsers.

### 5. Multi-Column Footer
- **5-Column Luxury Grid**: Includes clean top-aligned sections for brand description, services, company directories, resource links, and store badges.
- **Mobile Store Badges**: Elegant app store and Google Play download banners aligned vertically.
- **Smooth Anchor States**: Softened default links with ease transitions, offset slides on hover, and custom bottom legal bars.

---

## 🛠️ Technology Stack
- **Framework**: [React](https://react.dev/) (Vite Client bundler)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Vanilla CSS Design System (`index.css` & `App.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Animate.css](https://animate.style/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Local Development Setup

To run the application locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The application will launch on your local host (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This outputs optimized static assets directly into the `dist/` directory.
