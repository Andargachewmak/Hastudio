export type ProjectTextPart = {
  text: string;
  className?: string; // optional Tailwind or custom class
};

export type ProjectImagePart = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export type Project = {
  id: number;
  category: "Branding" | "Visual Identity" | "Motion Design";
  title: string;
  description: string;
  image: string; // main project image
  overview: ProjectTextPart[];
  overviewImages?: ProjectImagePart[];
  problem: ProjectTextPart[];
  problemImages?: ProjectImagePart[];
  solution: ProjectTextPart[];
  solutionImages?: ProjectImagePart[];
  clientThought: ProjectTextPart[];
  clientImages?: ProjectImagePart[];
};

export const projects: Project[] = [
  {
    id: 1,
    category: "Branding",
    title: "Edemy",
    description: "A modern branding project for a startup.",
    image: "/Image/Rectangle 9.png",
    overview: [
      { text: "We created a full brand identity including logo, typography, and color palette.", className: "text-gray-700" },
      { text: "This helped unify the brand across all channels.", className: "text-gray-900 font-semibold" }
    ],
    overviewImages: [
      { src: "/Image/Rectangle 10.png", alt: "Overview Image", caption: "Project overview", className: "w-full md:w-3/4 rounded-xl shadow-md" }
    ],
    problem: [
      { text: "The client lacked a consistent visual identity across digital and print channels.", className: "text-gray-700" },
      { text: "Existing marketing materials were confusing and inconsistent.", className: "text-gray-800 italic" }
    ],
    problemImages: [
      { src: "/Image/Rectangle 10.png", alt: "Problem Image", caption: "Challenges faced", className: "w-full rounded-lg border border-gray-200" }
    ],
    solution: [
      { text: "Designed a scalable brand system with clear guidelines to unify all touchpoints.", className: "text-gray-700" },
      { text: "Created reusable templates for marketing materials.", className: "text-gray-900 font-medium" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "Proposed solution", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought: [
      { text: "The team delivered exactly what we envisioned.", className: "text-gray-700 font-semibold" },
      { text: "Our brand now feels professional and cohesive.", className: "text-gray-900 italic" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Client feedback", className: "w-32 h-32 rounded-full object-cover" },
      { src: "/Image/Rectangle 10.png", alt: "Client 2", caption: "Happy client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  },
  {
    id: 2,
    category: "Visual Identity",
    title: "Boom Bet",
    description: "Visual system design for a corporate client.",
    image: "/Image/Rectangle 11.png",
    overview: [
      { text: "Developed a modern visual identity for the corporate website and marketing materials.", className: "text-gray-700" },
      { text: "Focused on typography, color consistency, and iconography.", className: "text-gray-900 font-semibold" }
    ],
    overviewImages: [
      { src: "/Image/Rectangle 10.png", alt: "Overview Image", caption: "Corporate overview", className: "w-full md:w-3/4 rounded-xl shadow-md" }
    ],
    problem: [
      { text: "The old identity was outdated and inconsistent across platforms.", className: "text-gray-700" }
    ],
    problemImages: [
      { src: "/Image/Rectangle 10.png", alt: "Problem Image", caption: "Old identity issues", className: "w-full rounded-lg border border-gray-200" }
    ],
    solution: [
      { text: "Introduced a refreshed color palette, typography, and iconography to improve recognition.", className: "text-gray-700" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "New design system", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought: [
      { text: "We were impressed with how quickly they understood our vision and delivered outstanding results.", className: "text-gray-700 font-semibold" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Corporate client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  },
  {
    id: 3,
    category: "Motion Design",
    title: "Motion Project Three",
    description: "Animated identity for a product launch.",
    image: "/Image/Rectangle 10.png",
    overview: [
      { text: "Created animated logos, transitions, and promotional videos.", className: "text-gray-700" }
    ],
    overviewImages: [
      { src: "/Image/Rectangle 10.png", alt: "Overview Image", caption: "Animation overview", className: "w-full md:w-3/4 rounded-xl shadow-md" }
    ],
    problem: [
      { text: "The client needed engaging motion content to attract social media attention.", className: "text-gray-700" }
    ],
    problemImages: [
      { src: "/Image/Rectangle 10.png", alt: "Problem Image", caption: "Engagement issues", className: "w-full rounded-lg border border-gray-200" }
    ],
    solution: [
      { text: "Produced short, dynamic animations that maintained brand consistency.", className: "text-gray-700" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "Motion graphics", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought: [
      { text: "The animations boosted our engagement and really captured our audience’s attention.", className: "text-gray-700 font-semibold" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Happy client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  },
  {
    id: 4,
    category: "Branding",
    title: "Brand Identity Four",
    description: "Brand guidelines and logo refresh.",
    image: "/Image/Rectangle 10.png",
    overview: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love. Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    overviewImages: [
      { src: "/Image/Rectangle 10.png", alt: "Overview Image", caption: "Pub branding overview", className: "w-full md:w-3/4 rounded-xl shadow-md" }
    ],
    problem: [
      { text: "Outdated logo and inconsistent branding across media.", className: "text-gray-700" }
    ],
    problemImages: [
      { src: "/Image/Rectangle 10.png", alt: "Problem Image", caption: "Old branding issues", className: "w-full rounded-lg border border-gray-200" }
    ],
    solution: [
      { text: "Refreshed logo, typography, and design guidelines for consistency.", className: "text-gray-700" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "Brand refresh", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought: [
      { text: "Our brand now looks polished and professional across all channels.", className: "text-gray-700 font-semibold" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Pub client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  },
  {
    id: 5,
    category: "Motion Design",
    title: "Motion Project Five",
    description: "Social media animated content.",
    image: "/Image/Artboard 1 1.png",
    overview: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
   overviewImages: [
  {
    src: "/Image/Artboard 6 1.png",
    alt: "Overview Image",
    caption: "Motion branding overview",
    className: "w-370 h-150 rounded-xl shadow-md mt-22" // full width + spacing from top
  },
  {
    src: "/Image/Artboard 6 2.png",
    alt: "Overview Image",
    caption: "Motion branding overview",
    className: "w-370 h-150 rounded-xl shadow-md -mt-2" // full width + spacing from top
  }
],
    problem: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000]  text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Artboard 6 12.png", alt: "Problem Image", caption: "Low engagement", className: "w-370 h-150 rounded-lg border border-gray-200 mt-8" },
         { src: "/Image/Artboard 6 4 (1).png", alt: "Problem Image", caption: "Low engagement", className: "w-75 h-75 rounded-lg border border-gray-200 " }

    ],
    solution: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "Motion content", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought: [
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Social media client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  }
];
