"use client";
export default function Testimonials() {
  const data = [
    {
      name: "John Doe",
      role: "CEO, Example Co.",
      text: "Ha Studio transformed our brand identity. The process was smooth and the results exceeded our expectations."
    },
    {
      name: "Jane Smith",
      role: "Marketing Head, Example Co.",
      text: "Their motion design work brought our campaigns to life and increased engagement significantly."
    },
    {
      name: "Mike Johnson",
      role: "CTO, TechCorp",
      text: "The team delivered outstanding creative solutions that helped us elevate our brand presence."
    }
  ];

  return (
    <section className="py-20 w-screen overflow-hidden">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-8 lg:px-12">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-10 md:p-14 rounded-2xl flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[25rem] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#000000]">{item.name}</p>
                <p className="text-[#AEACAC] font-medium text-sm">{item.role}</p>
              </div>
            </div>
            <p className="text-[#000000] font-medium text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
