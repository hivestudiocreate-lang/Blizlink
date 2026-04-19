import { useState } from 'react';
import { Company, Post, MarketplaceItem, InvestmentOpportunity } from './types';

// Mock Data
export const MOCK_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'Copperbelt Energy Corporation',
    industry: 'Energy & Utilities',
    description: 'A leading independent power transmitter and generator in Zambia.',
    logo: 'https://picsum.photos/seed/energy/200/200',
    isVerified: true,
    location: 'Kitwe, Zambia',
    website: 'https://ceczambia.com',
    tier: 'Enterprise'
  },
  {
    id: '2',
    name: 'Zambia National Commercial Bank (Zanaco)',
    industry: 'Financial Services',
    description: 'Providing innovative financial solutions to all Zambians.',
    logo: 'https://picsum.photos/seed/bank/200/200',
    isVerified: true,
    location: 'Lusaka, Zambia',
    website: 'https://zanaco.co.zm',
    tier: 'Enterprise'
  },
  {
    id: '3',
    name: 'Lusaka Tech Solutions',
    industry: 'Technology',
    description: 'Specializing in custom software development and IT consultancy.',
    logo: 'https://picsum.photos/seed/tech/200/200',
    isVerified: true,
    location: 'Lusaka, Zambia',
    website: 'https://lusakatech.com',
    tier: 'Premium'
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    companyId: '1',
    authorName: 'Owen Silavwe',
    companyName: 'Copperbelt Energy Corporation',
    content: 'Excited to announce our new renewable energy initiative in the Southern Province. We are looking for local partners in the construction phase.',
    timestamp: '2 hours ago',
    type: 'announcement',
    likes: 45,
    comments: 12
  },
  {
    id: 'p2',
    companyId: '2',
    authorName: 'Mukwandi Chibesakunda',
    companyName: 'Zambia National Commercial Bank',
    content: 'Zanaco is proud to sponsor the upcoming Entrepreneurship Summit in Kitwe. Join us to discuss the future of B2B financing.',
    timestamp: '5 hours ago',
    type: 'event',
    likes: 89,
    comments: 24
  }
];

export const MOCK_MARKETPLACE: MarketplaceItem[] = [
  {
    id: 'm1',
    title: 'Solar Installation for Warehouses',
    provider: 'SolarGen Zambia',
    category: 'Service',
    price: 'Starting from K50,000',
    description: 'Full solar setup for industrial and commercial use with 24/7 maintenance.',
    image: 'https://picsum.photos/seed/solar/400/300'
  },
  {
    id: 'm2',
    title: 'B2B Logistics & Freight',
    provider: 'SwiftMove Zambia',
    category: 'Service',
    price: 'Quote on Request',
    description: 'Nationwide delivery and logistics management for businesses.',
    image: 'https://picsum.photos/seed/truck/400/300'
  }
];

export const MOCK_INVESTMENTS: InvestmentOpportunity[] = [
  {
    id: 'i1',
    title: 'Agri-Tech Expansion',
    companyName: 'FarmFresh Zambia',
    amountNeeded: 'K500,000',
    equityOffered: '15%',
    description: 'Seeking capital to scale our smart irrigation systems across multiple provinces.',
    sector: 'Agriculture'
  }
];
