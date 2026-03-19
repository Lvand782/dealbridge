export interface Listing {
  id: string;
  title: string;
  category: string;
  askingPrice: string;
  annualRevenue: string;
  cashFlow: string;
  location: string;
  description: string;
  slug: string;
  tags: string[];
  image: string;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "Established Plumbing & HVAC Company",
    category: "Home Services",
    askingPrice: "$1,200,000",
    annualRevenue: "$2,400,000",
    cashFlow: "$380,000",
    location: "Nashville, TN",
    description:
      "30-year-old plumbing and HVAC business with 12 full-time technicians, recurring service contracts, and a strong referral network. Owner retiring.",
    slug: "plumbing-hvac-nashville",
    tags: ["Home Services", "Recession-Resistant", "Recurring Revenue"],
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "7",
    title: "Residential Roofing Company",
    category: "Home Services",
    askingPrice: "$950,000",
    annualRevenue: "$1,800,000",
    cashFlow: "$290,000",
    location: "Dallas, TX",
    description:
      "20-truck roofing operation with a full-time estimator, project manager, and crew leads. Strong storm-damage pipeline and insurance relationships.",
    slug: "roofing-company-dallas",
    tags: ["Home Services", "High Margin", "Equipment Included"],
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "8",
    title: "Electrical Contracting Business",
    category: "Home Services",
    askingPrice: "$780,000",
    annualRevenue: "$1,450,000",
    cashFlow: "$240,000",
    location: "Charlotte, NC",
    description:
      "Licensed electrical contractor with residential and light commercial clients. Master electrician on staff and 6 journeymen. Fully equipped vans included.",
    slug: "electrical-contractor-charlotte",
    tags: ["Home Services", "Licensed", "Recurring Revenue"],
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "9",
    title: "Residential Painting Company",
    category: "Home Services",
    askingPrice: "$390,000",
    annualRevenue: "$820,000",
    cashFlow: "$145,000",
    location: "Raleigh, NC",
    description:
      "Well-branded residential painting business with a 4.9-star Google rating and 600+ completed projects. Owner-operated with 8 seasonal crew members.",
    slug: "painting-company-raleigh",
    tags: ["Home Services", "Strong Brand", "Low Overhead"],
    image: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "10",
    title: "Pest Control & Termite Services",
    category: "Home Services",
    askingPrice: "$560,000",
    annualRevenue: "$940,000",
    cashFlow: "$195,000",
    location: "Orlando, FL",
    description:
      "State-licensed pest control company with 340 active monthly service accounts. Recurring revenue model, fully trained technician team in place.",
    slug: "pest-control-orlando",
    tags: ["Home Services", "Recurring Revenue", "Licensed"],
    image: "https://images.pexels.com/photos/5247440/pexels-photo-5247440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "11",
    title: "Pool Service & Repair Company",
    category: "Home Services",
    askingPrice: "$475,000",
    annualRevenue: "$780,000",
    cashFlow: "$160,000",
    location: "Scottsdale, AZ",
    description:
      "Established pool maintenance and repair business serving 280 residential accounts on weekly routes. Two service trucks and equipment fully included.",
    slug: "pool-service-scottsdale",
    tags: ["Home Services", "Route Business", "Recurring Revenue"],
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "12",
    title: "Garage Door Installation & Repair",
    category: "Home Services",
    askingPrice: "$325,000",
    annualRevenue: "$610,000",
    cashFlow: "$118,000",
    location: "Columbus, OH",
    description:
      "Busy garage door company with residential and commercial clients. Strong Google presence, repeat service agreements, and a trained install team.",
    slug: "garage-door-columbus",
    tags: ["Home Services", "Low Competition", "Fast Close"],
    image: "https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  },
  {
    id: "2",
    title: "Boutique Fitness Studio — 3 Locations",
    category: "Health & Fitness",
    askingPrice: "$850,000",
    annualRevenue: "$1,100,000",
    cashFlow: "$210,000",
    location: "Austin, TX",
    description:
      "Popular group fitness brand with three leased locations, 900+ active members, and a strong instructor team in place. Turnkey opportunity.",
    slug: "boutique-fitness-austin",
    tags: ["Health & Fitness", "Membership Model", "Brand"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Commercial Landscaping Business",
    category: "Landscaping",
    askingPrice: "$640,000",
    annualRevenue: "$980,000",
    cashFlow: "$175,000",
    location: "Phoenix, AZ",
    description:
      "Established commercial landscaping company with 18 HOA and corporate contracts. Fully equipped fleet included. Strong margins.",
    slug: "commercial-landscaping-phoenix",
    tags: ["Landscaping", "Contract Revenue", "Equipment Included"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "E-Commerce Pet Supplies Brand",
    category: "E-Commerce",
    askingPrice: "$420,000",
    annualRevenue: "$760,000",
    cashFlow: "$140,000",
    location: "Remote",
    description:
      "Branded Shopify store in the pet niche. 4.8-star reviews, 12,000 email subscribers, and a supplier relationship transferrable to new owner.",
    slug: "ecommerce-pet-supplies",
    tags: ["E-Commerce", "Remote", "Growing Niche"],
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Full-Service Auto Repair Shop",
    category: "Automotive",
    askingPrice: "$725,000",
    annualRevenue: "$1,350,000",
    cashFlow: "$220,000",
    location: "Denver, CO",
    description:
      "Family-owned auto repair with a loyal customer base spanning 25 years. Three bays, two master mechanics willing to stay on post-sale.",
    slug: "auto-repair-denver",
    tags: ["Automotive", "Loyal Customer Base", "Stable"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "Italian Restaurant — High Traffic Location",
    category: "Food & Beverage",
    askingPrice: "$310,000",
    annualRevenue: "$890,000",
    cashFlow: "$95,000",
    location: "Chicago, IL",
    description:
      "Beloved neighborhood Italian restaurant open 15 years. Prime corner location, full liquor license, catering revenue stream included.",
    slug: "italian-restaurant-chicago",
    tags: ["Food & Beverage", "Liquor License", "Catering"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
];

export const categories = [
  "All",
  "Home Services",
  "Health & Fitness",
  "Landscaping",
  "E-Commerce",
  "Automotive",
  "Food & Beverage",
];
