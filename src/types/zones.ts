// Stall type
export interface Stall {
  id: number;
  zone?: Zone | null;
  name: string;
  description?: string;
  image?: string;
  organizer?: string;
  category?: string;
  floorNumber?: number;
  location?: string;
  createdAt?: string;
  updatedAt?: string;
  qrCode?: string;
}

// Zone type
export interface Zone {
  id: number;
  zoneName: string;
  description?: string;
  imageUrl?: string;
  colorCode?: string;
  createdAt?: string;
  updatedAt?: string;
  stallCount?: number | null;
  qrCode?: string;
  stalls?: Stall[];
}

// QR Code API Response types
export interface QRCodeResponse {
  status: string;
  results: Zone[] | Stall[];
}

// Type guards to differentiate between Zone and Stall
export const isZone = (item: Zone | Stall): item is Zone => {
  return "zoneName" in item && "stalls" in item;
};

export const isStall = (item: Zone | Stall): item is Stall => {
  return "zone" in item && !("zoneName" in item);
};
