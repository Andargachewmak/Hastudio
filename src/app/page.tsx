// app/page.tsx (Next.js App Router)
"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import { FiMenu, FiX } from "react-icons/fi";
export default function Home() {
  const [fileName, setFileName] = useState("");
   const [isOpen, setIsOpen] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Show file name + type
      setFileName(`${file.name} (${file.type})`);
    }
  };

  return (
    <main className="bg-gray-100 text-black font-sans">
     
{/* Header */}

 <header className="flex items-center justify-between px-6 lg:px-40 py-6 relative">
      {/* Logo */}
      <div className="ml-2 lg:ml-14">
        <Image
          src="/Image/Artboard 1 copy 4.svg"
          alt="Ha Studio Logo"
          width={150}
          height={40}
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-1 justify-center gap-12 text-sm font-medium">
        <a href="#services" className="hover:text-[#F15B5F] transition">
          Services
        </a>
        <a
          href="/work"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F15B5F] transition"
        >
          Work
        </a>
        <a href="#about" className="hover:text-[#F15B5F] transition">
          About
        </a>
      </nav>

      {/* Contact - Desktop */}
      <div className="hidden md:flex text-sm font-medium mr-2 lg:mr-2">
        <a href="#contact" className="hover:text-[#F15B5F] transition">
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <nav className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F15B5F] transition"
            >
              Services
            </a>
            <a
              href="/work"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F15B5F] transition"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F15B5F] transition"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F15B5F] transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>    

      {/* Hero */}
<section className="px-[151px] py-20 text-center max-w-full mx-auto">
  {/* Heading with image behind "Results" */}
<h1 className="text-7xl md:text-[134.5px] font-medium leading-[0.96] tracking-[-16px]">
  Design Built for{" "}
  <span className="relative inline-block text-[#F15B5F] underline-offset-4 decoration-2 tracking-[-11px]  italic">
    Results
    <Image
      src="/Image/Vector 2.png"
      alt="Vector behind Results"
      width={550}
      height={120}
      className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 scale-111 opacity-90 pointer-events-none"
    />
    ,
  </span>{" "}
  <br /> Not Just Looks.
</h1>
  {/* Paragraph */}
  <p className="mt-9 text-sm md:text-sm text-[#000000] font-medium leading-relaxed uppercase">
    We partner with brands to solve real problems and bring clear,<br />
    standout identities to life. From the first idea to launch day,<br />
    we design with purpose and impact.
  </p>

  {/* Button */}
  <div className="mt-8 flex justify-start items-center gap-4">
    <a
      href="#projects"
      className="inline-flex items-center text-[#F15B5F] font-medium "
    >
      <div className="flex flex-col text-sm leading-tight mt-8 ml-16">
        <span className="text-[#000000]">EXPLORE OUR</span>
        <span>PROJECTS</span>
      </div>
      <Image
        src="/Image/Vector 1.png"
        alt="Arrow"
        width={39}
        height={39}
        className="ml-2 mt-12"
      />
    </a>
  </div>
  <div>
    <span className=" flex justify-end items-center text-sm uppercase font-medium  mr-4 -mt-8">(scroll)</span>
  </div>
</section>

      {/* Showreel */}


<section className="relative bg-black text-center py-62">
  {/* SVG centered and slightly lower from top */}
  <div className="absolute top-16 left-1/2 -translate-x-1/2">
    <Image
      src="/Image/Artboard 1 copy 5.svg"
      alt="Scroll Indicator"
      width={150}   // adjust size as needed
      height={120}  // adjust size as needed
    />
  </div>

  <h2 className="text-6xl md:text-[133px] font-medium -mt-8 text-[#F15B5F] tracking-[-11] relative">
    Show reel
  </h2>
</section>
      {/* Branding / Animation */}
<section className="px-12 lg:px-24 py-20 max-w-6xl ml-30 mx-auto space-y-16">
  {/* Branding Row */}
<div className="flex flex-col md:flex-row md:items-start  gap-36">
  {/* Title */}
  <div className="flex-shrink-0">
    <div className="h-0.5 bg-[#000000] mb-6 w-[990%]"></div>
    <h3 className="font-bold uppercase tracking-wide">
      Branding –
    </h3>
  </div>

  {/* Two-column Description (lowered from top) */}
  <div className="flex-1 font-medium grid grid-cols-1 md:grid-cols-2 gap-8 text-[#000000] mt-7.5">
    <p className="text-sm">
      Your <span className="text-[#F15B5F]">brand</span> is more than a<br /> logo, it’s your first impression,<br /> your <span className="text-[#F15B5F]">personality</span>, and your<br /> <span className="text-[#F15B5F]">promise</span>.
    </p>
    <p className="text-sm">
      We build brand <br /> identities that connect <br />instantly and <span className="text-[#F15B5F]">last</span>.
    </p>
  </div>
</div>

  {/* Animation Row */}
  <div className="flex flex-col md:flex-row md:items-start gap-34">
    {/* Title */}
    <div className="flex-shrink-0">
      <h3 className="font-bold uppercase tracking-wide">
        Animation –
      </h3>
    </div>

    {/* Two-column Description (lowered from top) */}
    <div className="flex-1 font-medium grid grid-cols-1 md:grid-cols-2 gap-8 text-[#000000] mt-0.5">
      <p className="text-sm">
        Motion makes <br /> your brand <br /><span className="text-[#F15B5F]">unforgettable.</span>
      </p>
      <p className="text-sm">
        From sleek logo <br />animations to scroll-<br />stopping ads, we turn<br />static ideas into <span className="text-[#F15B5F]">living</span> <br /> <span className="text-[#F15B5F]">stories.</span>
      </p>   

    </div>
  </div>
</section>

      {/* Brand strategy */}
<section className="py-20 text-left">
   <h2 className="text-7xl md:text-[97px] font-medium leading-[0.96] tracking-[-2px]">
    <span className="ml-[206px]">Brand strategy and</span>
    <br />
    <span className="ml-[425px]">brand systems</span>
  </h2>
  <p className="mt-14 text-left ml-53 text-lg font-medium uppercase">
    Trusted by -
  </p>

  {/* Line aligned with "Trusted by -" */}
  <div className="h-0.5 bg-gray-400 mt-4 mb-6 w-318 ml-47"></div>

  <div className="grayscale opacity-50">
    <Image
      src="/Image/image 1.png"
      alt="Brand logo"
      width={1920} // big enough for large screens
      height={100}
      className="w-full h-auto object-contain"
    />
  </div>
    <h2 className="mt-8 text-left ml-53 text-lg font-medium uppercase">
    (What We Do)
  </h2>

  {/* Line below the title, similar to "Trusted by -" */}
  <div className="h-0.5 bg-gray-400 mt-4 mb-6 w-318 ml-47"></div>
</section>
      {/* What We Do */}
<section
  id="services"
  className="px-6 lg:px-23 py-20 max-w-7xl mx-auto space-y-16"
>
  {[
    {
      title: ["BRAND", "IDENTITY"],
      desc: "Bring your brand to life with adaptable, scalable design systems that connect strategy to visuals with clarity and impact.",
      shortDesc: [
        "Flexible brand guidelines for consistency.",
        "Customizable assets that scale with your business.",
      ],
    },
    {
      title: ["VISUAL", "IDENTITY"],
      desc: "Bring your existing logo to life with an adaptable, scalable system that transforms it into a complete brand identity.",
      shortDesc: [
        "Logo usage rules and color palettes.",
        "Typography and iconography systems.",
      ],
    },
    {
      title: ["MOTION", "DESIGN"],
      desc: "Transform your brand into a living, breathing experience with motion design that captures attention and tells your story.",
      shortDesc: [
        "Animated elements to strengthen storytelling.",
        "Consistent motion style across platforms.",
      ],
    },
  ].map((item, i) => (
    <div key={i}>
      <div
        className={`grid md:grid-cols-2 gap-8 items-start ${
          i % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* LEFT SIDE — Title + Description */}
        <div className="flex flex-col">
          <div className="inline-block max-w-[clamp(12rem,18vw,20rem)]">
            <h3
              className="font-medium mb-4 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {item.title[0]} <br /> {item.title[1]}
            </h3>

            <p className="text-[#000000] text-lg font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — Image + Short Description + Button */}
        <div className="flex flex-col w-full">
          {/* Image box */}
          <div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>

          {/* Short description + button on same line */}
          <div className="flex justify-between items-center">
            {/* Short description — uppercase and #000 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">
              {item.shortDesc.map((text, idx) => (
                <p
                  key={idx}
                  className="leading-relaxed text-xs font-medium uppercase"
                  style={{ color: "#000000" }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Button */}
            <a
              href="#"
              className="inline-block bg-[#F15B5F] font-medium text-[#000000] px-6 py-3 rounded hover:bg-[#e14c4f] transition"
            >
              Inquire now
            </a>
          </div>
        </div>
      </div>

      {/* Divider line at the end of each section */}
      <div className="h-0.5 bg-gray-400 mt-22 mb-6 w-280 -ml-8"></div>
    </div>
  ))}
</section>
{/* Testimonials Section */}
<Testimonials />

      {/* Contact */}
      <ContactForm />
      {/* Footer */}
<Footer />
        </main>
  );
}


