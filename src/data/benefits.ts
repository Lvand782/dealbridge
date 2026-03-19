export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const sellerBenefits: Benefit[] = [
  {
    icon: "chart",
    title: "Free Business Valuation",
    description:
      "Get a professional, data-driven valuation of your business at no cost. Know what you're worth before you list.",
  },
  {
    icon: "dollar",
    title: "$0 Commission",
    description:
      "We don't earn a cent until you close. No upfront fees, no listing fees — just results.",
  },
  {
    icon: "shield",
    title: "90-Day Close Guarantee",
    description:
      "Our network of qualified buyers moves fast. Most listings see serious interest within two weeks.",
  },
  {
    icon: "users",
    title: "M&A Advisors in Your Corner",
    description:
      "Our deal room connects you with experienced M&A professionals who guide you from LOI to close.",
  },
];

export const buyerBenefits: Benefit[] = [
  {
    icon: "check",
    title: "Pre-Vetted Listings",
    description:
      "Every business on DealBridge is verified. Financials reviewed, owners interviewed — no surprises at due diligence.",
  },
  {
    icon: "lock",
    title: "NDA-Protected Access",
    description:
      "Browse confidential details safely. Your identity is protected until you're ready to engage.",
  },
  {
    icon: "bookmark",
    title: "Save & Compare Deals",
    description:
      "Build your shortlist. Compare businesses side by side and track deals through your personalized dashboard.",
  },
  {
    icon: "star",
    title: "Expert Deal Support",
    description:
      "From SBA financing to letter of intent templates — our advisors help buyers move with confidence.",
  },
];
