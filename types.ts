
export interface Play {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  genre: string;
  image: string;
  color: string;
  description: string;
  duration: string;
  ageRating: string;
  collectiveId: string; // Linked to Agrupacion
  mapsLink?: string;
  isBarter?: boolean;
}

export interface Agrupacion {
  id: string;
  name: string;
  description: string;
  fullHistory: string;
  color: string;
  location: string;
  address: string; // New: Physical address
  mapsLink: string; // New: Google Maps URL
  podcastUrl?: string; // Optional for invited groups
  image: string;
  whatsapp: string; // Dedicated contact for bookings
}

export type Page = 'home' | 'billboard' | 'detail' | 'agrupacion_detail' | 'map';
