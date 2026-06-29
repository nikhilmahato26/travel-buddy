# Travel Buddy Tours

A premium, modern travel website for **Travel Buddy Tours** — curated North-East India experiences (Assam, Meghalaya, Arunachal Pradesh, Tawang, Majuli, Kaziranga & Bhutan).

## Tech Stack
React · Vite · TypeScript · Tailwind CSS · Framer Motion · React Router · SwiperJS · React Hook Form · Lucide Icons

## Getting Started
```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Pages
- **Home** — cinematic parallax hero, floating booking form, about, stats counters, why-choose-us, destinations, packages, experiences, 5-step process, testimonials, FAQ.
- **Tour Packages** — full package grid.
- **Destinations** — destination grid + individual detail pages (`/destinations/:slug`).
- **Gallery** — masonry layout with lightbox.
- **Testimonials** — review wall + stats.
- **Contact** — contact cards, WhatsApp form, embedded Google Map.

## WhatsApp-First Booking
The site has **no backend**. Every booking action (hero form, "Book Now", "Check Availability",
contact form, destination enquiry) builds a pre-filled WhatsApp message and opens
`wa.me/919127062249`. All brand details live in `src/data/site.ts`.

## Customization
- **Brand / phone / email / maps** → `src/data/site.ts`
- **Packages, destinations, gallery, testimonials, FAQs** → `src/data/content.ts`
- **Colors, fonts, shadows, animations** → `tailwind.config.js`
- **Images** are royalty-free Unsplash photos referenced by ID in `src/data/content.ts`.

## Brand
- Phone: +91 9127062249
- Email: maps.travelbuddytours@gmail.com
