// Stall type
export interface Stall {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  organizer?: string;
  category?: string;
}

// Zone type
export interface Zone {
  id: string;
  zoneName: string;
  description?: string;
  imageUrl?: string;
  stalls: Stall[];
}
