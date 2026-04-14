export interface CaseStudySection {
  title: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  location: string;
  attendance: string;
  items: string;
  image: string;
  overview: string;
  sections: CaseStudySection[];
  takeaways: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "coca-cola-atlanta",
    title: "Elevating the Fan Experience with Real-Time Customization",
    company: "Coca-Cola",
    location: "Atlanta, Georgia",
    attendance: "3,000+",
    items: "~400",
    image: "/experiences/case-studies/coca-cola.jpg",
    overview:
      "The on-site hat decoration experience at Coca-Cola\u2019s college football tailgate was a huge success from start to finish.",
    sections: [
      {
        title: "The Challenge",
        text: "Coca-Cola wanted to stand out at a major college football tailgate in Atlanta with an activation that went beyond standard giveaways. They needed an experience that would draw fans in, keep them engaged, and leave them with something memorable that reinforced both the Coca-Cola brand and the team\u2019s presence.",
      },
      {
        title: "The Strategy",
        text: "Brand Makers proposed an on-site hat decoration experience \u2014 a live customization station where fans could choose their hat style and have it decorated in real time with Coca-Cola and team branding. The goal was to create a personal, premium takeaway that fans would actually wear, turning every attendee into a walking brand ambassador.",
      },
      {
        title: "The Execution",
        text: "Our team set up a fully equipped hat decoration station at the tailgate. Fans chose from a selection of hat styles and customization options, and our on-site decorators applied patches, embroidery, and heat transfers live on the spot. The interactive nature of the activation created a steady flow of excitement and engagement, with fans lining up throughout the event to get their custom hats.",
      },
      {
        title: "The Results",
        text: "Over 3,000 fans attended the tailgate, and approximately 400 custom hats were produced and distributed. The activation generated sustained foot traffic and buzz throughout the event. Fans loved the personal touch \u2014 the hats felt premium and unique, not like a standard giveaway. Coca-Cola\u2019s brand presence was reinforced in a way that felt organic and memorable.",
      },
    ],
    takeaways: [
      "Real-time customization creates excitement and sustained engagement",
      "Premium, personalized takeaways outperform standard giveaways",
      "Interactive activations turn attendees into brand ambassadors",
      "Live decoration drives foot traffic and social sharing",
      "Fans wear custom hats long after the event, extending brand reach",
      "Tailgate activations create organic, shareable moments",
    ],
  },
  {
    slug: "caterpillar-abu-dhabi",
    title: "High-Volume Personalization on a Global Stage",
    company: "Caterpillar",
    location: "Abu Dhabi, UAE",
    attendance: "239,000",
    items: "3,000+ over 4 days",
    image: "/experiences/case-studies/caterpillar-houston.jpg",
    overview:
      "A multi-day activation featuring on-site laser engraving of premium leather luggage tags and coasters.",
    sections: [
      {
        title: "The Challenge",
        text: "Caterpillar needed a high-impact activation for a massive multi-day event in Abu Dhabi with an expected attendance of 239,000. The activation had to handle high volume while maintaining quality and personalization, and it needed to resonate with a diverse international audience.",
      },
      {
        title: "The Strategy",
        text: "Brand Makers designed a premium on-site laser engraving experience featuring leather luggage tags and leather coasters. The strategy centered on craftsmanship and personalization \u2014 each item would be engraved with the attendee\u2019s name, images, and branded elements, creating a high-quality takeaway that felt exclusive and valuable.",
      },
      {
        title: "The Execution",
        text: "Our team operated the activation over four full days, running multiple laser engraving stations to handle the volume. Attendees could choose their item and personalize it with names, images, and Caterpillar branding. The combination of live craftsmanship and premium materials drew consistent traffic. Over 3,000 items were produced and distributed across the four days.",
      },
      {
        title: "The Results",
        text: "The booth maintained steady traffic and strong engagement throughout all four days of the event. Over 3,000 personalized items were distributed. The combination of craftsmanship and personalization created a memorable brand interaction, leaving attendees with a high-quality, customized takeaway tied directly to the Caterpillar experience.",
      },
    ],
    takeaways: [
      "Premium materials elevate the perceived value of branded giveaways",
      "Laser engraving scales well for high-volume multi-day events",
      "Personalization drives repeat booth visits and word-of-mouth",
      "Live craftsmanship creates a spectacle that attracts foot traffic",
      "International audiences respond strongly to hands-on experiences",
      "High-quality takeaways reinforce brand identity across cultures",
    ],
  },
  {
    slug: "caterpillar-houston",
    title: "Driving Engagement Through Hands-On Personalization",
    company: "Caterpillar",
    location: "Minute Maid Park",
    attendance: "~350 booth visitors",
    items: "~350",
    image: "/experiences/case-studies/caterpillar-houston.jpg",
    overview:
      "On-site laser engraving at Minute Maid Park where attendees personalized premium leather luggage tags and valet trays.",
    sections: [
      {
        title: "The Challenge",
        text: "Caterpillar wanted to create a memorable brand presence at an event at Minute Maid Park in Houston, Texas. They needed an activation that would draw attendees to their booth, create meaningful interactions, and leave visitors with a tangible reminder of the Caterpillar brand.",
      },
      {
        title: "The Strategy",
        text: "Brand Makers proposed an on-site laser engraving station featuring premium leather luggage tags and valet trays. The strategy was to offer a hands-on, interactive experience where attendees could personalize items with their own names, images, and Caterpillar branding \u2014 creating a unique, useful takeaway.",
      },
      {
        title: "The Execution",
        text: "The experience centered around on-site laser engraving, where attendees could personalize premium leather luggage tags and valet trays with names, images, and branded assets. This interactive element drew consistent traffic to the booth throughout the event, with attendees spending time watching their items being created.",
      },
      {
        title: "The Results",
        text: "Approximately 350 engaged visitors came through the booth. The personalization aspect not only created a memorable takeaway for attendees but also reinforced Caterpillar\u2019s brand in a unique, tangible way, driving meaningful engagement and lasting impressions throughout the event.",
      },
    ],
    takeaways: [
      "Interactive personalization keeps attendees at the booth longer",
      "Useful takeaways (luggage tags, valet trays) extend brand impressions",
      "Watching items being created adds to the experience",
      "Quality over quantity drives deeper brand connections",
      "Stadium venues amplify activation visibility and engagement",
      "Premium leather goods feel like gifts, not typical event swag",
    ],
  },
  {
    slug: "varonis-rsac",
    title: "Quality-First Giveaways That Drive Booth Traffic",
    company: "Varonis",
    location: "RSA Conference (RSAC)",
    attendance: "Not specified",
    items: "Custom-branded hats",
    image: "/experiences/case-studies/coca-cola.jpg",
    overview:
      "A high-touch, onsite custom activation designed to boost booth scan metrics by offering an item of genuine value.",
    sections: [
      {
        title: "The Challenge",
        text: "For major industry events like RSA Conference (RSAC), capturing attendee attention is a high-stakes competition. The client required a booth activation that checked three specific boxes: Stop Power \u2014 capturing attention from the aisle with a unique visual. Dwell Time \u2014 encouraging attendees to linger and engage within the booth. Brand Alignment \u2014 high-quality takeaways that reflect a premium brand standard.",
      },
      {
        title: "The Strategy",
        text: "The client partnered with our team to implement a high-touch, onsite custom activation. Moving beyond \"commodity swag,\" the focus was on a quality-first giveaway \u2014 onsite custom-branded hats \u2014 designed to boost booth scan metrics by offering an item of genuine value.",
      },
      {
        title: "The Execution",
        text: "Onsite Engagement: Our team worked alongside the client to maintain high energy and manage the \"curiosity factor\" that sparked lines and booth interest. Strategic Consulting: We provided guidance on scaling the activation to fit the booth footprint and budget while maximizing the impact for the specific RSAC audience. Quality Control: Every item was crafted with subtle, sophisticated branding to ensure the takeaway was something attendees would actually wear post-event.",
      },
      {
        title: "The Results",
        text: "Increased Lead Generation: The high-quality nature of the giveaway directly correlated to a boost in booth scans. The \"Procurement\" Litmus Test: The activation successfully converted internal skeptics. The client\u2019s Director of Procurement \u2014 notoriously difficult to impress \u2014 not only engaged with the activation but became a brand advocate, citing the superior quality and subtle branding as the deciding factors. Enhanced Brand Perception: The activation succeeded in making people \"wonder what was happening inside,\" driving organic traffic and dwell time.",
      },
    ],
    takeaways: [
      "Booth scans are important, but quality is what reflects the brand",
      "Uniqueness and attention to detail are the keys to a successful activation",
      "Quality-first giveaways convert even internal skeptics into advocates",
      "The curiosity factor drives organic booth traffic",
      "Subtle branding creates items people actually want to wear",
      "Strategic consulting maximizes activation impact within budget",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
