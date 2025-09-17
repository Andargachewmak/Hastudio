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
    image: "/Image/Artboard 1 1 (5).png",
    overview: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    overviewImages: [
      { src: "/Image/Artboard 6 1 (7).png", alt: "Overview Image", caption: "Project overview", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 2 (6).png", alt: "Overview Image", caption: "Project overview", className: "w-full aspect-[28/19] rounded-lg -mt-6 shadow-md" }

    ],
    problem: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Artboard 6 12 (4).png", alt: "Overview Image", caption: "Project overview", className: "w-full aspect-[28/19] rounded-lg -mt-6 shadow-md" },
                     { src: "/Image/Artboard 6 4 (5).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5 (4).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

    ],
    solution: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Artboard 6 6 (4).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 7 (4).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" },
      { src: "/Image/Artboard 6 13 (4).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2 mb-8" }

    ],
    clientThought: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Artboard 6 14 (4).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2 mb-8" },
                     { src: "/Image/Artboard 6 1 (11).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 12 (4).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-148" }
    ]
  },
  {
    id: 2,
    category: "Visual Identity",
    title: "Boom Bet",
    description: "Visual system design for a corporate client.",
    image: "/Image/Rectangle 11.png",
    overview: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    overviewImages: [
      { src: "/Image/Artboard 6 1 (14).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 2 (10).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" }
    ],
    problem: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Artboard 6 12 (6).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
                     { src: "/Image/Artboard 6 4 (7).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5 (6).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

    ],
    solution: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Artboard 6 6 (6).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 7 (6).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" },
          { src: "/Image/Artboard 6 13 (6).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },

    ],
    clientThought:[
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Artboard 6 14 (6).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
                           { src: "/Image/Artboard 6 12 (6).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 13 (6).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

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
        { src: "/Image/Artboard 6 1.png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
       { src: "/Image/Artboard 6 2.png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },

],
    problem: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000]  text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Artboard 6 12.png", alt: "Problem Image", caption: "Low engagement", className: "w-full aspect-[28/19] rounded-lg  mt-8" },
         { src: "/Image/Artboard 6 4 (1).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5.png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

    ],
    solution: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Artboard 6 6.png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 7.png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" },
      { src: "/Image/Artboard 6 13.png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2 mb-8" }

    ],
    clientThought: [
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Artboard 6 14.png", alt: "Client 1", caption: "Social media client", className: "w-full aspect-[28/19] rounded-lg object-cover" },
               { src: "/Image/Artboard 6 4 (1).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5.png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

    ]
  },

  {
    id: 3,
    category: "Motion Design",
    title: "Motion Project Three",
    description: "Animated identity for a product launch.",
    image: "/Image/Rectangle 10.png",
    overview:[
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    overviewImages: [
      { src: "/Image/Artboard 1 1 (7).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 1 (13).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" }
    ],
    problem: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Artboard 6 13 (5).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" },
                     { src: "/Image/Artboard 6 4 (6).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5 (5).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

    ],
    solution: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Artboard 6 12 (5).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
      { src: "/Image/Artboard 6 7 (5).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2" },
      { src: "/Image/Artboard 6 6 (5).png", alt: "Solution Image", caption: "Motion content", className: "w-full  aspect-[28/19] rounded-lg shadow-md -mt-2 mb-8" }
    ],
    clientThought: [
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Artboard 6 2 (9).png", alt: "Solution Image", caption: "Motion content", className: "w-full aspect-[28/19] rounded-lg shadow-md" },
                           { src: "/Image/Artboard 6 1 (13).png", alt: "Problem Image", caption: "Low engagement", className: "w-180 h-135 rounded-lg border border-gray-200 " },
                   { src: "/Image/Artboard 6 5 (5).png", alt: "Problem Image", caption: "Low engagement", className: "w-185 h-135 rounded-lg border border-gray-200 ml-185 -mt-141" }

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
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    problemImages: [
      { src: "/Image/Rectangle 10.png", alt: "Problem Image", caption: "Old branding issues", className: "w-full rounded-lg border border-gray-200" }
    ],
    solution:[
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    solutionImages: [
      { src: "/Image/Rectangle 10.png", alt: "Solution Image", caption: "Brand refresh", className: "w-full rounded-lg shadow-md" }
    ],
    clientThought:[
      { text: "Supporting the best of British farmers and producers by creating menus with seasonal and sustainable ingredients.", className: "text-[#000000] text-base font-bold uppercase  leading-snug max-w-[20rem]" },
      { text: "From creative cocktails to low and no-alcohol drinks, elevated gastropub classics to vegan dishes, after-work socials to birthday parties, Mr Fox help you celebrate life’s best moments.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" },
      { text: "The design goal was to elevate the British Pub into something more experiential but still keep the comfort factor we know and love.Our creative team developed a design system with a custom-drawn mark of the three foxes, inspired by traditional pub signage but redrawn to scale for digital platforms.", className: "text-[#000000] text-sm font-medium mt-3 leading-snug max-w-[23rem]" }
    ],
    clientImages: [
      { src: "/Image/Rectangle 10.png", alt: "Client 1", caption: "Pub client", className: "w-32 h-32 rounded-full object-cover" }
    ]
  },
];
