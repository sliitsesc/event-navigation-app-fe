// Stall type
export interface Stall {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  organizer?: string;
  category?: string;
  floorNumber?: number;
  location?: string;
}

// Zone type
export interface Zone {
  id: string;
  zoneName: string;
  description?: string;
  imageUrl?: string;
  stalls: Stall[];
}
