export interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  logo: string;
  isVerified: boolean;
  location: string;
  website: string;
  tier: 'Basic' | 'Premium' | 'Enterprise';
}

export interface Post {
  id: string;
  companyId: string;
  authorName: string;
  companyName: string;
  content: string;
  timestamp: string;
  type: 'announcement' | 'event' | 'opportunity';
  likes: number;
  comments: number;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  provider: string;
  category: 'Service' | 'Product' | 'Consultancy';
  price?: string;
  description: string;
  image: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  companyName: string;
  amountNeeded: string;
  equityOffered: string;
  description: string;
  sector: string;
}
