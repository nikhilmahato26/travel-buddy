export const BRAND = {
  name: 'Travel Buddy Tours',
  phone: '+91 9127062249',
  phoneRaw: '919127062249',
  email: 'maps.travelbuddytours@gmail.com',
  maps: 'https://share.google/S6TTCL7kabPxKR0Sc',
  mapsEmbed:
    'https://www.google.com/maps?q=Guwahati,Assam,India&output=embed',
  tagline: 'Explore North-East India Like Never Before',
}

export function waLink(message: string) {
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(message)}`
}

export function bookPackageMsg(pkg: string) {
  return `Hi Travel Buddy Tours,\n\nI'm interested in the ${pkg} Package.\n\nPlease share itinerary and pricing.`
}

export function inquiryMsg() {
  return `Hi Travel Buddy Tours,\n\nI'm interested in booking a tour. Please share package details.`
}
