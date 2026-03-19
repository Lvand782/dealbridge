export interface Deal {
  businessName: string;
  category: string;
  location: string;
  salePrice: string;
  closedYear: number;
  story: string;
  image: string;
}

export const deals: Deal[] = [
  {
    businessName: "Hartley Construction",
    category: "General Contracting",
    location: "Columbus, OH",
    salePrice: "$2.1M",
    closedYear: 2024,
    story:
      "Third-generation family business successfully transitioned to a regional PE-backed roll-up. Owner secured a 12-month earnout and stayed on as advisor.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    businessName: "Sweet Roots Bakery",
    category: "Food & Beverage",
    location: "Portland, OR",
    salePrice: "$380K",
    closedYear: 2024,
    story:
      "Beloved local bakery sold to a longtime employee after 18 years. Deal structured with seller financing to enable a smooth internal transfer.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    businessName: "Precision Electric Services",
    category: "Electrical Contracting",
    location: "Tampa, FL",
    salePrice: "$1.4M",
    closedYear: 2023,
    story:
      "Owner sold ahead of retirement and migrated all key customer relationships to new ownership during a 90-day transition period.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    businessName: "Blaze Fitness",
    category: "Health & Fitness",
    location: "Atlanta, GA",
    salePrice: "$620K",
    closedYear: 2023,
    story:
      "Boutique gym chain acquired by a national franchise operator. NDA process kept the sale confidential until closing day, protecting member relationships.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  },
];
