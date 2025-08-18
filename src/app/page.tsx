// app/page.tsx (Next.js App Router)
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTiktok, FaSquareInstagram } from "react-icons/fa6";
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
<h1 className="text-7xl md:text-[133px] font-medium leading-[0.96] tracking-[-16px]">
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
  <p className="mt-9 text-sm md:text-sm text-[#000000] font-semibold leading-relaxed uppercase">
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
      <div className="flex flex-col text-sm leading-tight mt-8">
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
<section className="py-20 w-screen overflow-hidden">
  <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-8 lg:px-12">
    {[ 
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
      },
      {
        name: "Anna Lee",
        role: "Creative Director, DesignCo",
        text: "Working with Ha Studio was a fantastic experience. The results speak for themselves."
      },
      {
        name: "Anna Lee",
        role: "Creative Director, DesignCo",
        text: "Working with Ha Studio was a fantastic experience. The results speak for themselves."
      },
      {
        name: "Anna Lee",
        role: "Creative Director, DesignCo",
        text: "Working with Ha Studio was a fantastic experience. The results speak for themselves."
      }
    ].map((item, i) => (
      <div
        key={i}
        className={`bg-white p-10 md:p-14 rounded-2xl flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[25rem] flex flex-col
          ${i === 0 ? 'ml-0' : ''} 
          ${i === 3 ? 'mr-0' : ''}`}
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

      {/* Contact */}
<section
  id="contact"
  className="px-6 lg:px-15 py-20 max-w-[1215px] mx-auto"
>
  <h2 className="text-7xl font-semibold mb-8 text-left">
    say <span className="italic text-[#F15B5F]">hi</span>
  </h2>
  <form className="grid gap-6">
    {/* First row: First Name, Last Name, Email */}
    <div className="grid md:grid-cols-3 gap-6">
      <input
        className="border-b-2 border-black py-2 px-3 focus:outline-none"
        placeholder="First name*"
      />
      <input
        className="border-b-2 border-black py-2 px-3 focus:outline-none"
        placeholder="Last name*"
      />
      <input
        type="email"
        className="border-b-2 border-black py-2 px-3 focus:outline-none"
        placeholder="Email*"
      />
    </div>

    {/* Attachments + Message row */}
    <div className="grid md:grid-cols-3 gap-6">
      <label className="flex items-center gap-2 border-b-2 border-black py-2 px-3 cursor-pointer hover:bg-gray-50 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828a4 4 0 10-5.656-5.656l-6.586 6.586a6 6 0 108.486 8.486L21 11.828"
          />
        </svg>
        <span className="text-gray-700">{fileName || "Attachments"}</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

     <textarea
  className="border-b-2 border-black py-1.5 px-3 focus:outline-none min-h-[40px] md:col-span-2 resize-none"
  placeholder="Message"
></textarea>
    </div>
    <div className="flex justify-end mt-6 -mb-6">
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
        Send →
      </button>
    </div>
  </form>
</section>
      {/* Footer */}
 <footer className="bg-[#F15B5F] text-[#000000] px-16 lg:px-12 py-38">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img
            src="/Image/Artboard 1 copy 5.svg"
            alt="Ha studio logo"
            className="w-122 md:w-129"
          />
        </div>

        {/* Navigation links on the right */}
        <nav className="flex flex-col gap-1 text-sm font-medium">
          <a href="#">Company</a>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Divider line */}
      <div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-3"></div>

      <div className="max-w-[1120px] mx-auto mt-6 flex items-center justify-between gap-6">
        {/* Left - Copyright */}
        <p className="text-sm font-medium opacity-80">
          © Ha studio - all rights reserved
        </p>

        {/* Center - Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaSquareInstagram className="hover:text-pink-500 transition" />
      </a>
          <a href="#" aria-label="TikTok">
            <FaTiktok className="hover:text-black transition-colors" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook className="hover:text-blue-600 transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-700 transition-colors" />
          </a>
        </div>

        {/* Right - Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 font-medium text-sm hover:underline"
        >
          Back to top
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <p className="mt-28 text-center text-sm text-[#000000] tracking-wide uppercase font-medium">
        Designed by Andargachew Mekonnen
      </p>
    </footer>
        </main>
  );
}
    

