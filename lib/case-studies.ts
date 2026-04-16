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
    slug: "securonix-rsa-2026",
    title: "Driving Lead Generation at RSA 2026",
    company: "Securonix",
    location: "RSA Conference 2026",
    attendance: "500+ lead scans",
    items: "Custom hats",
    image: "/experiences/case-studies/securonix.jpg",
    overview:
      "At RSA 2026, Securonix needed a magnetic booth attraction to cut through the noise and drive meaningful conversations with their sales team.",
    sections: [
      {
        title: "The Challenge",
        text: "At RSA 2026, the client faced the standard but difficult challenge of cutting through the noise on a highly competitive show floor. They needed a magnetic booth attraction that would not only capture attention but also draw attendees deep enough into the space to facilitate meaningful, high-quality conversations with their sales team.",
      },
      {
        title: "The Strategy",
        text: "To naturally draw people into the booth, the client partnered with Brand Makers to introduce a live hat press activation. The strategy was to use the visual appeal and exclusivity of custom headwear to create a steady, organic line of attendees, thereby lowering the barrier to entry for booth staff to initiate stronger engagements.",
      },
      {
        title: "The Execution",
        text: "Welcoming Environment: The activation was spearheaded by an on-site Brand Makers specialist, whose friendly, approachable demeanor set a welcoming tone for the entire booth. Live Customization: The active, ongoing nature of the hat press created a constant buzz. By managing the queue with high energy and excellent customer service, the Brand Makers team ensured the experience remained memorable and positive. Seamless Integration: The activation was positioned to naturally funnel the crowd\u2019s energy into the rest of the booth, seamlessly bridging the gap between an experiential giveaway and professional networking.",
      },
      {
        title: "The Results",
        text: "Massive Lead Generation: The activation proved to be a major driver of measurable success, directly resulting in more than 500 lead scans. Continuous Traffic: The hat press successfully generated a steady, ongoing line throughout the entirety of the event, ensuring the booth was never empty. Quality Conversations: By creating a relaxed and engaging atmosphere, the activation provided the client\u2019s team with significantly more opportunities to connect with prospects and build stronger relationships on the show floor.",
      },
    ],
    takeaways: [
      "Energy and execution matter just as much as the giveaway itself",
      "A welcoming live activation fosters approachable environments",
      "Live customization creates constant buzz and foot traffic",
      "Quality giveaways drive measurable lead generation",
      "Seamless booth integration bridges experiential and professional networking",
      "Well-managed queues turn wait time into engagement time",
    ],
  },
  {
    slug: "shell-eastern-energy-expo",
    title: "Elevating Engagement at the Eastern Energy Expo 2025",
    company: "Shell",
    location: "Eastern Energy Expo 2025",
    attendance: "Trade show attendees",
    items: "Custom headwear",
    image: "/experiences/case-studies/shell.jpg",
    overview:
      "Shell needed a strategy to capture attendee attention and elevate engagement beyond standard trade show interactions while strictly adhering to corporate safety and compliance standards.",
    sections: [
      {
        title: "The Challenge",
        text: "At the Eastern Energy Expo 2025, Shell needed a strategy to capture attendee attention and elevate engagement beyond standard trade show interactions. The goal was to pivot away from traditional, forgettable event swag and instead deliver a memorable, experiential brand interaction that also strictly adhered to rigorous corporate safety and compliance standards.",
      },
      {
        title: "The Strategy",
        text: "To transform the standard promotional giveaway into an engaging brand experience, Shell partnered with our team to design and deliver a fully interactive HatBar activation. The strategy focused on real-time product customization, offering a modern, premium aesthetic that aligned perfectly with Shell\u2019s brand standards while actively encouraging attendees to spend more time at the booth.",
      },
      {
        title: "The Execution",
        text: "Interactive \u201CBuild-Your-Own\u201D Experience: Attendees were invited to participate in a hands-on curation process, selecting their base from a thoughtfully curated assortment of premium headwear. Live, On-Site Production: Guests customized their chosen hats by selecting from multiple patch styles and placement options. The final product was then produced live on-site using a heat press, creating a dynamic focal point for the booth. Agile & Safe Delivery: The full project was completed in under three months, securing first-pass approval on creative concepts. Crucially, the activation achieved 100% compliance across brand, HSSE (Health, Safety, Security, and Environment), ethics, and regulatory standards, with zero safety incidents recorded during the event.",
      },
      {
        title: "The Results",
        text: "Measurable ROI & Cost Savings: Through strategic sourcing, targeted negotiation, and material repurposing, the activation achieved $22,375.20 in total cost savings and avoidance. Surge in Dwell Time: The live production element successfully drew attendees in, significantly increasing booth traffic, dwell time, and direct interaction with the Shell team. Elevated Brand Perception: The shift from standard promo to experiential branding resonated strongly, resulting in a premium, personalized takeaway for attendees and securing highly positive feedback from Shell\u2019s senior leadership.",
      },
    ],
    takeaways: [
      "Experiential value drives measurable success at trade shows",
      "Live customization increases dwell time and direct interaction",
      "Premium giveaways elevate brand perception with senior leadership",
      "Compliance and creativity can coexist with proper planning",
      "Strategic sourcing can deliver significant cost savings",
      "First-pass creative approval accelerates project delivery",
    ],
  },
  {
    slug: "coca-cola-atlanta",
    title: "Elevating Fan Experience Through Real-Time Customization",
    company: "Coca-Cola",
    location: "Atlanta, Georgia",
    attendance: "3,000+",
    items: "~400 custom hats",
    image: "/experiences/case-studies/coca-cola.jpg",
    overview:
      "At a high-energy college football tailgate, Coca-Cola needed an activation that could cut through the noise and offer a highly coveted \u201Cstatus\u201D item that fans would be proud to wear immediately.",
    sections: [
      {
        title: "The Challenge",
        text: "At a high-energy college football tailgate in Atlanta, Coca-Cola needed an activation that could cut through the noise of a 3,000+ person crowd. The goal was to move beyond standard promotional handouts and offer a highly coveted, \u201Cstatus\u201D item that fans would be proud to wear immediately. The challenge was to create a \u201CVIP feel\u201D within a high-traffic, outdoor fan zone, ensuring the brand stood out as a highlight of the pre-game experience.",
      },
      {
        title: "The Strategy",
        text: "We implemented an Interactive Hat Decoration Station, specifically designed to tap into the passion of college football culture. By offering a limited run of approximately 400 premium hats, we created a sense of exclusivity and \u201Cmust-have\u201D urgency. The strategy relied on real-time customization, allowing fans to watch their gear being transformed on-site, which served as both entertainment and a powerful brand-building moment.",
      },
      {
        title: "The Execution",
        text: "Live Personalization: Fans were given the creative reins, customizing their hats in real-time. This interactive element turned a simple giveaway into a memorable event highlight. Steady Engagement Flow: The \u201Cmade-to-order\u201D nature of the activation created a consistent, visible buzz. The sight of fans designing their headwear drew a steady stream of curious attendees to the Coca-Cola footprint. Strategic Scarcity: By distributing ~400 high-quality units to an audience of 3,000+, the hats became the \u201Cgold standard\u201D of the tailgate, driving high engagement and ensuring the Coca-Cola/Team presence was the most talked-about activation on-site.",
      },
      {
        title: "The Results",
        text: "High Perceived Value: Because the items were customized and limited, they felt personal and premium, far exceeding the impact of traditional \u201Cswag.\u201D Enhanced Brand Presence: The hats acted as walking billboards throughout the stadium and during the televised game, reinforcing the partnership between Coca-Cola and the team in a visually striking way. Fan Connection: The activation succeeded in creating an emotional \u201Cwin\u201D for fans before the game even started, linking the Coca-Cola brand to the excitement and community of the tailgate.",
      },
    ],
    takeaways: [
      "Real-time customization creates excitement and sustained engagement",
      "Strategic scarcity drives perceived value and urgency",
      "Interactive activations turn attendees into walking brand ambassadors",
      "Live decoration serves as both entertainment and brand-building",
      "Premium limited items outperform standard giveaways",
      "Emotional connections link brands to community experiences",
    ],
  },
  {
    slug: "caterpillar-abu-dhabi",
    title: "Scaling Premium Personalization on a Global Stage",
    company: "Caterpillar",
    location: "Abu Dhabi, UAE",
    attendance: "239,000",
    items: "3,000+ over 4 days",
    image: "/experiences/case-studies/caterpillar-abu-dhabi.jpg",
    overview:
      "Operating within a massive international event, Caterpillar faced the challenge of maintaining premium brand standards while managing extreme foot traffic over four days.",
    sections: [
      {
        title: "The Challenge",
        text: "Operating within a massive international event in Abu Dhabi, Caterpillar faced the ultimate logistical hurdle: maintaining premium brand standards while managing extreme foot traffic. With nearly a quarter-million attendees on-site, the objective was to create an activation that felt exclusive and high-end, yet was efficient enough to handle a continuous, high-volume flow of participants over a grueling four-day schedule.",
      },
      {
        title: "The Strategy",
        text: "To match the scale of the event, we deployed a high-capacity laser engraving suite focused on two sophisticated gift options: premium leather luggage tags and leather coasters. This strategy allowed us to bridge the gap between \u201Cmass distribution\u201D and \u201Cbespoke luxury.\u201D By offering personalization (names, custom imagery, and branding), we ensured that even in a crowd of thousands, every recipient felt they were receiving a one-of-a-kind Caterpillar artifact.",
      },
      {
        title: "The Execution",
        text: "High-Volume Efficiency: Our team engineered a workflow that allowed for the production of 3,000+ items without sacrificing the intricate detail of the laser engraving. Dynamic Customization: Attendees weren\u2019t just passive recipients; they actively participated in the design, choosing between names and specific branded elements to be etched into the leather. Sustained Engagement: Over the course of four days, the booth remained a high-traffic destination. The \u201Cspectacle\u201D of the live engraving process acted as a natural magnet, drawing attendees in and keeping them engaged as they watched their custom items come to life.",
      },
      {
        title: "The Results",
        text: "Massive Reach: Successfully distributed over 3,000 customized premium goods, ensuring a high density of Caterpillar branding across the 239,000-person event. Operational Excellence: Maintained steady, organized traffic flow and high-quality output despite the high-pressure, multi-day environment. Lasting Brand Impression: By moving away from disposable plastic giveaways in favor of durable leather, Caterpillar reinforced its image of strength and craftsmanship in the Middle Eastern market.",
      },
    ],
    takeaways: [
      "Scale should never come at the expense of quality",
      "Premium materials reinforce brand identity across cultures",
      "Live engraving creates a spectacle that attracts foot traffic",
      "High-volume efficiency and personalization can coexist",
      "Durable takeaways extend brand impressions beyond the event",
      "Four-day activations require engineered workflows for consistency",
    ],
  },
  {
    slug: "varonis-rsac",
    title: "Driving RSAC Success Through Premium Activations",
    company: "Varonis",
    location: "RSA Conference (RSAC)",
    attendance: "Industry event",
    items: "Custom-branded hats",
    image: "/experiences/case-studies/varonis.jpg",
    overview:
      "For RSAC, Varonis needed a booth activation with stop power, dwell time, and brand alignment through quality-first giveaways.",
    sections: [
      {
        title: "The Challenge",
        text: "For major industry events like RSA Conference (RSAC), capturing attendee attention is a high-stakes competition. The client required a booth activation that checked three specific boxes: 1. Stop Power: Capturing attention from the aisle with a unique visual. 2. Dwell Time: Encouraging attendees to linger and engage within the booth. 3. Brand Alignment: High-quality takeaways that reflect a premium brand standard.",
      },
      {
        title: "The Strategy",
        text: "The client partnered with our team to implement a high-touch, onsite custom activation. Moving beyond \u201Ccommodity swag,\u201D the focus was on a quality-first giveaway\u2014onsite custom-branded hats\u2014designed to boost booth scan metrics by offering an item of genuine value.",
      },
      {
        title: "The Execution",
        text: "Onsite Engagement: Our team worked alongside the client to maintain high energy and manage the \u201Ccuriosity factor\u201D that sparked lines and booth interest. Strategic Consulting: We provided guidance on scaling the activation to fit the booth footprint and budget while maximizing the impact for the specific RSAC audience. Quality Control: Every item was crafted with subtle, sophisticated branding to ensure the takeaway was something attendees would actually wear post-event.",
      },
      {
        title: "The Results",
        text: "Increased Lead Generation: The high-quality nature of the giveaway directly correlated to a boost in booth scans. The \u201CProcurement\u201D Litmus Test: The activation successfully converted internal skeptics. The client\u2019s Director of Procurement\u2014notoriously difficult to impress\u2014not only engaged with the activation but became a brand advocate, citing the superior quality and subtle branding as the deciding factors. Enhanced Brand Perception: The activation succeeded in making people \u201Cwonder what was happening inside,\u201D driving organic traffic and dwell time.",
      },
    ],
    takeaways: [
      "Booth scans are important, but quality reflects the brand",
      "Uniqueness and attention to detail drive successful activations",
      "Quality-first giveaways convert even internal skeptics",
      "The curiosity factor drives organic booth traffic",
      "Subtle branding creates items people actually wear post-event",
      "Strategic consulting maximizes activation impact within budget",
    ],
  },
  {
    slug: "paycor-hr-tech",
    title: "Maximizing Engagement at HR Tech 2025",
    company: "Paycor",
    location: "HR Tech 2025",
    attendance: "Trade show attendees",
    items: "700 custom hats",
    image: "/experiences/case-studies/paycor.jpg",
    overview:
      "Paycor needed a booth experience that went beyond the standard trade show approach, driving significant traffic and offering a memorable, high-quality takeaway.",
    sections: [
      {
        title: "The Challenge",
        text: "To stand out in a crowded exhibition hall at HR Tech 2025, Paycor needed a booth experience that went beyond the standard trade show approach. The goal was to drive significant booth traffic and offer a memorable, high-quality takeaway, all while being able to efficiently manage and fulfill high-volume attendee demand.",
      },
      {
        title: "The Strategy",
        text: "To create a magnetic booth environment, Paycor opted for an interactive, live-action experience rather than a static giveaway. The strategy centered on an on-site hat decoration activation, designed to be highly visible and engaging. By offering a personalized, premium product in real-time, the activation aimed to transform passive attendees into active participants.",
      },
      {
        title: "The Execution",
        text: "Live Customization: The decoration process was intentionally positioned to be highly visible to passing traffic. The dynamic, live-action nature of the customization served as a visual anchor, drawing attendees into the booth. High-Energy Environment: The interactive process of personalizing the hats naturally generated high energy and excitement around the Paycor booth, creating a fear of missing out (FOMO) for those walking the aisles. Premium Personalization: Rather than handing out uniform promotional items, the activation focused on delivering a tailored, high-quality experience for each individual guest.",
      },
      {
        title: "The Results",
        text: "High-Volume Production: The activation successfully scaled to meet immense demand, producing a staggering 700 custom hats over the course of the event. Surge in Booth Traffic: The visibility and appeal of the live customization process directly resulted in increased foot traffic and strong, sustained attendee engagement. Memorable Brand Impact: The activation successfully bridged the gap between scale and quality. Guests walked away with a premium, personalized item, leaving a lasting and positive impression of the Paycor brand.",
      },
    ],
    takeaways: [
      "Visibility and personalization drive high-volume success",
      "Live-action customization creates FOMO for passersby",
      "Premium giveaways leave lasting positive brand impressions",
      "Interactive experiences transform passive attendees into participants",
      "High-energy environments generate organic booth traffic",
      "Scalable activations can maintain quality at 700+ units",
    ],
  },
  {
    slug: "elavon-savannah",
    title: "Delivering a Premium \u201CBoutique\u201D Experience for Executive Attendees",
    company: "US Bank | Elavon",
    location: "Savannah, Georgia",
    attendance: "500 top VPs & executives",
    items: "1,500+ custom items",
    image: "/experiences/case-studies/elavon.jpg",
    overview:
      "US Bank | Elavon needed a gifting solution that matched the prestige of 500 top VPs, C-level executives, and key sales personnel at an exclusive event.",
    sections: [
      {
        title: "The Challenge",
        text: "When hosting an exclusive event in Savannah, Georgia, for 500 top VPs, C-level executives, and key sales personnel, US Bank | Elavon needed a gifting solution that matched the prestige of the audience. The challenge was to move away from standard, pre-printed event swag and instead provide an engaging, high-end experience that would resonate with a highly professional demographic while reflecting the company\u2019s own brand values.",
      },
      {
        title: "The Strategy",
        text: "To elevate the standard giveaway, the strategy centered on creating a custom swag store activation. Instead of handing out predetermined items, the goal was to build an interactive, \u201Cboutique\u201D brand experience where attendees could browse, choose, and customize their gifts in real-time. This approach was designed to directly mirror Elavon\u2019s core business philosophy: delivering tailored, high-quality solutions.",
      },
      {
        title: "The Execution",
        text: "Curated Premium Selection: Attendees were invited to physically browse and select their preferred merchandise from a high-quality, diverse lineup that included polos, quarter zips, hoodies, puffer jackets, and laptop sleeves. Live Personalization: Guests were able to witness the customization process firsthand, transforming a simple transaction into an engaging, high-touch brand interaction. VIP-Level Service: The activation was scaled to handle high demand while maintaining a premium, personalized feel, perfectly suited for an executive-level audience.",
      },
      {
        title: "The Results",
        text: "High-Volume Success: The \u201Cboutique\u201D store successfully fulfilled and distributed over 1,500 items to the 500 attendees, ensuring guests walked away with multiple pieces of premium, customized gear. Deepened Engagement: By putting the power of choice in the attendees\u2019 hands and showcasing the live production, the activation fostered a significantly deeper level of engagement than traditional swag ever could. Strong Brand Alignment: The interactive, premium nature of the activation successfully resonated with the elite audience, perfectly reflecting Elavon\u2019s commitment to sophisticated, tailored experiences.",
      },
    ],
    takeaways: [
      "VIP audiences require VIP experiences",
      "Boutique-style activations mirror high-end brand values",
      "Choice and customization deepen attendee engagement",
      "Live production transforms transactions into brand interactions",
      "Premium merchandise lineups drive multiple-item takeaways",
      "Executive events demand tailored, high-touch service delivery",
    ],
  },
  {
    slug: "caterpillar-san-antonio",
    title: "Crafting Connection Through Personalized Artistry",
    company: "Caterpillar",
    location: "San Antonio, Texas",
    attendance: "~150 guests",
    items: "~150 custom items",
    image: "/experiences/case-studies/caterpillar-san-antonio.jpg",
    overview:
      "Caterpillar sought to create a high-touch environment that prioritized individual guest appreciation over sheer foot traffic for an intimate gathering.",
    sections: [
      {
        title: "The Challenge",
        text: "Caterpillar sought to move away from high-volume, \u201Cone-size-fits-all\u201D event tactics for an intimate gathering in San Antonio. The goal was to create a high-touch environment that prioritized individual guest appreciation over sheer foot traffic. The challenge lay in providing a premium, branded experience that felt personal rather than promotional, ensuring each of the 150 guests felt uniquely valued.",
      },
      {
        title: "The Strategy",
        text: "We pivoted from broad booth activations to a bespoke personalization station. By focusing on tactile, high-end materials\u2014specifically leather luggage tags and journals\u2014we aimed to provide utility and sophistication. The strategy centered on On-Site Laser Engraving, allowing guests to witness the transformation of a raw product into a personalized keepsake in real-time.",
      },
      {
        title: "The Execution",
        text: "Precision Customization: Attendees collaborated with our team to select specific design elements and add their names, turning a simple giveaway into a co-creation process. Interactive Atmosphere: The laser engraving process served as a focal point of curiosity, providing a \u201Chigh-tech meets high-craft\u201D spectacle that fit the Caterpillar brand ethos of durability and precision. Meaningful Engagement: Because the event was capped at 150 guests, our team was able to facilitate longer, one-on-one interactions, ensuring every guest received a seamless and premium service experience without the rush of a massive trade show floor.",
      },
      {
        title: "The Results",
        text: "100% Engagement Rate: With ~150 items distributed to ~150 guests, the activation achieved total saturation, ensuring every attendee left with a tangible reminder of the event. Reinforced Brand Loyalty: By choosing premium leather goods over standard trinkets, Caterpillar successfully aligned their brand with quality and longevity. Memorability: The personalized nature of the luggage tags and journals ensured the \u201CCaterpillar experience\u201D traveled home with the guests, extending the brand\u2019s reach far beyond the San Antonio event space.",
      },
    ],
    takeaways: [
      "In smaller settings, depth of interaction trumps breadth of reach",
      "Premium leather goods align brands with quality and longevity",
      "Co-creation processes make giveaways feel personal, not promotional",
      "High-tech meets high-craft creates memorable spectacles",
      "100% engagement rates are achievable at intimate events",
      "Personalized keepsakes extend brand reach beyond the event",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
