export interface Campaign {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  startDate: string; // ISO format date string
  cause: string;
  community: string;
  context: string;
  imageUrl: string;
  merchandise?: MerchandiseItem[];
  webinars?: {
    title: string;
    date: string;
    description: string;
  }[];
  impactStories?: {
    title: string;
    story: string;
    author: string;
  }[];
}

export interface MerchandiseItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export interface FilterOptions {
  causes: string[];
  communities: string[];
  contexts: string[];
}

export interface CartItem {
  id: string;
  campaignId: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}