import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import stockIcon from "../assets/products/portfolio.png";
import automationIcon from "../assets/products/operation.png";
import resumeIcon from "../assets/package.png";
import socialIcon from "../assets/products/social-media.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality blogs, social captions, and ad copy in minutes with advanced AI prompts.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: [
      "Unlimited generations",
      "50+ writing templates",
      "Grammar checker",
    ],
    icon: writingIcon,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "A premium collection of social, brand, and campaign-ready templates for fast publishing.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: ["200+ templates", "Monthly updates", "Commercial license"],
    icon: designIcon,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access royalty-free photos, vectors, and overlays curated for creators and small teams.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["4K visuals", "Commercial use", "No attribution"],
    icon: stockIcon,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and connect your workflow apps with no-code style actions.",
    price: 79,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: ["50+ automations", "API access", "Custom workflows"],
    icon: automationIcon,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create a polished resume and cover letter with ATS-friendly layouts and guided writing.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: ["30+ templates", "ATS optimization", "Export to PDF"],
    icon: resumeIcon,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Plan, schedule, and analyze social campaigns with a practical all-in-one content toolkit.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["5000+ assets", "Post scheduler", "Analytics dashboard"],
    icon: socialIcon,
  },
  {
    id: 7,
    name: "Podcast Production Suite",
    description:
      "Record, edit, and publish podcasts with studio-quality presets and export tools.",
    price: 59,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: ["Noise cleanup", "Auto mastering", "One-click publishing"],
    icon: automationIcon,
  },
  {
    id: 8,
    name: "Brand Kit Generator",
    description:
      "Generate logos, palettes, and typography systems for new products and campaigns.",
    price: 25,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: ["Logo variations", "Color presets", "Export brand guide"],
    icon: designIcon,
  },
  {
    id: 9,
    name: "Client Proposal Vault",
    description:
      "Create winning proposals with conversion-focused layouts and reusable templates.",
    price: 35,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["25+ proposal templates", "E-sign support", "Track client views"],
    icon: writingIcon,
  },
];

export default products;