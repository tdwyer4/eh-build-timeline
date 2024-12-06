// Define the CardType interface
export interface CardType {
    icon: string;
    title: string;
    description: string;
    id: number;
  }
  
  // Export the array of warranty cards
  export const cards: CardType[] = [
    {
      icon: require("../../media/icons/Heating.png"),
      title: "Heating",
      description:
        "If staying warm and cozy is your thing, we’ve got the right home warranty coverage for you. Upgrade to a new HVAC system with exclusive member discounts on top brands. Heating services include annual maintenance and repair to keep your system running efficiently.",
      id: 1,
    },
    {
      icon: require("../../media/icons/AC.png"),
      title: "Air Conditioning",
      description:
        "We’ll help make sure your air conditioning keeps its cool so you can too. Keep cool during the summer months with repair services for your AC unit.",
      id: 2,
    },
    {
      icon: require("../../media/icons/Appliances.png"),
      title: "Kitchen & Laundry Appliances",
      description:
        "When these home heroes stop working, it’s a good day to have a home warranty. Covering everything from refrigerators to washers and dryers, we help keep your household running.",
      id: 3,
    },
    {
      icon: require("../../media/icons/Electrical.png"),
      title: "Electrical",
      description:
        "You don’t have to power through electrical issues. We’ll help you get your spark back (safely of course). Electrical repairs and troubleshooting to keep your home powered and safe.",
      id: 4,
    },
    {
      icon: require("../../media/icons/Plumbing.png"),
      title: "Plumbing",
      description:
        "Whether you’re dealing with a drip, leak or clog, we’ll help get things flowing again. Full coverage for leaks, clogs, and other plumbing issues that keep water flowing smoothly.",
      id: 5,
    },
    {
      icon: require("../../media/icons/Members.png"),
      title: "Member Benefits",
      description:
        "We offer additional services like seasonal HVAC tune-ups and rekeys, as well as partner discounts. Enjoy exclusive discounts and additional services that make maintaining your home easier.",
      id: 6,
    },
    {
      icon: require("../../media/icons/Warranty.png"),
      title: "Additional Coverage",
      description:
        "Choose from add-ons like electronics protection, roof leak repair coverage, pool & built-in spa equipment. Expand your coverage with add-ons like electronics protection and roof leak repairs.",
      id: 7,
    },
    {
      icon: require("../../media/icons/HVAC.png"),
      title: "New HVAC Program",
      description:
        "In the market for a new HVAC? Get exclusive pricing on name brand heating and cooling systems. Upgrade to a new HVAC system with exclusive member discounts on top brands.",
      id: 8,
    },
  ];
  