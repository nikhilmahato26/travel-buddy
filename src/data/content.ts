// Premium royalty-free photography (Unsplash). Curated for North-East India themes.
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export interface Destination {
  slug: string
  name: string
  tagline: string
  image: string
  blurb: string
  highlights: string[]
  bestTime: string
}

export const destinations: Destination[] = [
  {
    slug: 'assam',
    name: 'Assam',
    tagline: 'Land of Tea, Rhinos & the Mighty Brahmaputra',
    image: 'https://images.pexels.com/photos/38232180/pexels-photo-38232180.jpeg',
    blurb:
      'Rolling tea estates, the wide Brahmaputra and the wildlife of Kaziranga make Assam the soulful gateway to the North-East.',
    highlights: ['Kaziranga Safari', 'Brahmaputra River Cruise', 'Kamakhya Temple', 'Endless Tea Gardens'],
    bestTime: 'Nov – Apr',
  },
  {
    slug: 'meghalaya',
    name: 'Meghalaya',
    tagline: 'Abode of Clouds & Living Root Bridges',
    image: img('1470071459604-3b5ec3a7fe05'),
    blurb:
      'Crystal-clear Dawki river, double-decker living root bridges and the cleanest villages on earth await in the abode of clouds.',
    highlights: ['Dawki Crystal River', 'Living Root Bridges', 'Cherrapunji Falls', 'Mawlynnong Village'],
    bestTime: 'Oct – May',
  },
  {
    slug: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    tagline: 'Land of the Dawn-Lit Mountains',
    image: img('1506905925346-21bda4d32df4'),
    blurb:
      'Snow peaks, untouched valleys and warm tribal hospitality — Arunachal is raw Himalayan adventure at its purest.',
    highlights: ['Sela Pass', 'Ziro Valley', 'Tribal Heritage', 'Alpine Lakes'],
    bestTime: 'Mar – Oct',
  },
  {
    slug: 'tawang',
    name: 'Tawang',
    tagline: 'Monasteries Among the Clouds',
    image: img('1464822759023-fed622ff2c3b'),
    blurb:
      'Home to one of the largest monasteries in the world, Tawang blends spiritual calm with breathtaking high-altitude scenery.',
    highlights: ['Tawang Monastery', 'Madhuri Lake', 'Bumla Pass', 'Sela Lake'],
    bestTime: 'Apr – Oct',
  },
  {
    slug: 'majuli',
    name: 'Majuli',
    tagline: "The World's Largest River Island",
    image: img('1593693411515-c20261bcad6e'),
    blurb:
      'A serene river island of satras, mask-making artisans and golden sunsets over the Brahmaputra — culture in its purest form.',
    highlights: ['Satra Monasteries', 'Mask Making Art', 'River Sunsets', 'Mishing Villages'],
    bestTime: 'Oct – Mar',
  },
  {
    slug: 'bhutan',
    name: 'Bhutan',
    tagline: 'The Last Himalayan Kingdom',
    image: img('1553856622-d1b352e9a211'),
    blurb:
      'The kingdom of Gross National Happiness — dramatic dzongs, the cliff-side Tiger’s Nest and pristine Himalayan culture.',
    highlights: ["Tiger’s Nest Monastery", 'Punakha Dzong', 'Thimphu', 'Paro Valley'],
    bestTime: 'Mar – May, Sep – Nov',
  },
]

export interface Package {
  slug: string
  name: string
  destination: string
  duration: string
  travelers: string
  rating: number
  price: string
  image: string
  description: string
}

export const packages: Package[] = [
  {
    slug: 'assam-meghalaya-kaziranga',
    name: 'Assam Meghalaya Kaziranga',
    destination: 'Assam & Meghalaya',
    duration: '7 Days',
    travelers: '3 Travelers',
    rating: 5,
    price: '₹18,999',
    image: 'https://images.pexels.com/photos/38232180/pexels-photo-38232180.jpeg',
    description:
      'The ultimate North-East circuit — rhino safari at Kaziranga, the living root bridges and crystal Dawki river of Meghalaya.',
  },
  {
    slug: 'majuli-tour',
    name: 'Majuli Tour',
    destination: 'Majuli Island',
    duration: '5 Days',
    travelers: '4 Travelers',
    rating: 5,
    price: '₹14,999',
    image: img('1593693411515-c20261bcad6e'),
    description:
      'Discover the world’s largest river island — ancient satras, mask artisans and unforgettable Brahmaputra sunsets.',
  },
  {
    slug: 'tawang-tour',
    name: 'Tawang Tour',
    destination: 'Tawang, Arunachal',
    duration: '5 Days',
    travelers: '4 Travelers',
    rating: 5,
    price: '₹22,999',
    image: img('1464822759023-fed622ff2c3b'),
    description:
      'A high-altitude Himalayan journey to Tawang Monastery, Sela Pass and the pristine alpine Madhuri Lake.',
  },
  {
    slug: 'meghalaya-explorer',
    name: 'Meghalaya Explorer',
    destination: 'Meghalaya',
    duration: '6 Days',
    travelers: '4 Travelers',
    rating: 5,
    price: '₹19,999',
    image: img('1470071459604-3b5ec3a7fe05'),
    description:
      'Cherrapunji waterfalls, the double-decker root bridge trek, Dawki boating and Asia’s cleanest village, Mawlynnong.',
  },
  {
    slug: 'bhutan-experience',
    name: 'Bhutan Experience',
    destination: 'Bhutan',
    duration: '7 Days',
    travelers: '4 Travelers',
    rating: 5,
    price: '₹34,999',
    image: img('1553856622-d1b352e9a211'),
    description:
      'The last Himalayan kingdom — Tiger’s Nest hike, Punakha Dzong and the serene happiness of Thimphu and Paro.',
  },
  {
    slug: 'arunachal-discovery',
    name: 'Arunachal Discovery',
    destination: 'Arunachal Pradesh',
    duration: '6 Days',
    travelers: '4 Travelers',
    rating: 5,
    price: '₹24,999',
    image: img('1506905925346-21bda4d32df4'),
    description:
      'Dawn-lit mountains, Ziro valley, alpine passes and immersive tribal heritage across India’s wildest frontier.',
  },
]

export interface Experience {
  title: string
  image: string
  icon: string
}

export const experiences: Experience[] = [
  { title: 'River Cruises', image: img('1559825481-12a05cc00344'), icon: 'Ship' },
  { title: 'Tea Garden Tours', image: img('1582126892906-5ba111b41b0d'), icon: 'Leaf' },
  { title: 'Tribal Village Visits', image: img('1528605248644-14dd04022da1'), icon: 'Users' },
  { title: 'Wildlife Safari', image: img('1564760055775-d63b17a55c44'), icon: 'PawPrint' },
  { title: 'Monastery Tours', image: img('1464822759023-fed622ff2c3b'), icon: 'Landmark' },
  { title: 'Adventure Activities', image: img('1551632811-561732d1e306'), icon: 'Mountain' },
  { title: 'Local Food Trails', image: img('1504674900247-0877df9cc836'), icon: 'UtensilsCrossed' },
  { title: 'Photography Tours', image: img('1452421822248-d4c2b47f0c81'), icon: 'Camera' },
]

export const gallery = [
  { src: img('1564760055775-d63b17a55c44'), caption: 'Kaziranga Rhino', tall: true },
  { src: img('1470071459604-3b5ec3a7fe05'), caption: 'Meghalaya Lakes', tall: false },
  { src: img('1559825481-12a05cc00344'), caption: 'Dawki River', tall: false },
  { src: img('1518709268805-4e9042af9f23'), caption: 'Living Root Bridges', tall: true },
  { src: img('1582126892906-5ba111b41b0d'), caption: 'Tea Gardens', tall: false },
  { src: img('1464822759023-fed622ff2c3b'), caption: 'Tawang Monastery', tall: true },
  { src: img('1506905925346-21bda4d32df4'), caption: 'Snow Mountains', tall: false },
  { src: img('1593693411515-c20261bcad6e'), caption: 'River Islands', tall: false },
  { src: img('1528605248644-14dd04022da1'), caption: 'Local Culture', tall: true },
  { src: img('1452421822248-d4c2b47f0c81'), caption: 'Sunrise Views', tall: false },
]

export const testimonials = [
  {
    quote:
      'Everything was perfectly organized. Hotels, transportation and sightseeing exceeded our expectations.',
    name: 'Priya Sharma',
    location: 'Delhi',
  },
  {
    quote:
      'The Tawang trip was unforgettable. Professional service and wonderful hospitality throughout.',
    name: 'Rahul Das',
    location: 'Kolkata',
  },
  {
    quote:
      'Highly recommend Travel Buddy Tours for anyone planning North-East holidays. Truly seamless.',
    name: 'Ananya Roy',
    location: 'Bengaluru',
  },
  {
    quote:
      'Our Kaziranga safari and Meghalaya tour were absolutely amazing. Every detail was taken care of.',
    name: 'Rakesh Gupta',
    location: 'Mumbai',
  },
]

export const whyChooseUs = [
  { title: 'Local Tour Experts', icon: 'MapPin', desc: 'Born-and-raised guides who know every hidden gem.' },
  { title: 'Best Price Guarantee', icon: 'BadgePercent', desc: 'Transparent, honest pricing with zero surprises.' },
  { title: 'Comfortable Transportation', icon: 'Car', desc: 'Clean, well-maintained vehicles for every terrain.' },
  { title: 'Experienced Drivers', icon: 'Steering', desc: 'Safe, friendly drivers familiar with mountain roads.' },
  { title: 'Customized Packages', icon: 'Sliders', desc: 'Itineraries tailored exactly to how you travel.' },
  { title: 'Hotel Booking Assistance', icon: 'BedDouble', desc: 'Hand-picked stays from cozy to luxury.' },
  { title: 'Wildlife & Adventure Tours', icon: 'Compass', desc: 'Safaris, treks and thrills across the North-East.' },
  { title: '24×7 Customer Support', icon: 'Headset', desc: 'We are one message away, anytime you need us.' },
]

export const faqs = [
  {
    q: 'How do I book a tour?',
    a: 'Simply pick a package and tap “Book Now”. It opens WhatsApp with your details pre-filled — our team replies with a full itinerary and confirms your booking.',
  },
  {
    q: 'Can I customize my package?',
    a: 'Absolutely. Every itinerary is fully customizable. Tell us your dates, budget and interests and we will craft a personalized journey just for you.',
  },
  {
    q: 'Do you arrange hotels?',
    a: 'Yes. We offer hand-picked stays across every budget — from cozy homestays and boutique resorts to premium luxury hotels.',
  },
  {
    q: 'Do you provide transportation?',
    a: 'All our packages include comfortable, well-maintained vehicles with experienced local drivers who know the mountain routes.',
  },
  {
    q: 'Can families travel with you?',
    a: 'Of course! We design family-friendly itineraries with comfortable pacing, safe activities and stays suited for children and elders.',
  },
  {
    q: 'Do you arrange airport pickup?',
    a: 'Yes, airport and railway pickups & drops are arranged as part of your package for a completely hassle-free experience.',
  },
]

export const processSteps = [
  { num: '1', title: 'Choose Package', desc: 'Browse curated tours and pick your dream destination.' },
  { num: '2', title: 'Contact on WhatsApp', desc: 'Tap Book Now — we receive your request instantly.' },
  { num: '3', title: 'Receive Itinerary', desc: 'Get a detailed day-by-day plan with transparent pricing.' },
  { num: '4', title: 'Confirm Booking', desc: 'Lock your dates with a simple, secure confirmation.' },
  { num: '5', title: 'Enjoy Your Journey', desc: 'Pack your bags — we handle everything else.' },
]

export const stats = [
  { value: 5000, suffix: '+', label: 'Happy Travelers' },
  { value: 50, suffix: '+', label: 'Curated Tours' },
  { value: 7, suffix: '', label: 'Destinations' },
  { value: 4.9, suffix: '★', label: 'Average Rating' },
]
