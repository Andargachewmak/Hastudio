"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "../../data/data";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTiktok, FaSquareInstagram } from "react-icons/fa6";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));
  const [fileName, setFileName] = useState("");

  if (!project) return <p className="p-6">Project not found</p>;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(`${file.name} (${file.type})`);
    }
  };

  // Section component: title left, text right
const SectionWithImages = ({
  title,
  text,
  images,
}: {
  title: React.ReactNode;
  text: React.ReactNode;
  images?: { 
    src: string; 
    alt?: string; 
    className?: string;        
    imgClassName?: string;     
    style?: React.CSSProperties; 
  }[];
}) => (
  <div className="space-y-6">
    {/* Title & Text */}
    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
      <div className="md:w-1/3">{title}</div>
      <div className="md:w-2/3 text-gray-700">{text}</div>
    </div>

    {/* Images stacked vertically */}
    {images && images.length > 0 && (
      <div className="flex flex-col gap-6 mt-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative  ${img.className || ""}`}
            style={{ minHeight: "200px", ...img.style }}
          >
            <Image
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              fill
              className={`object-cover ${img.imgClassName || ""}`}
            />
          </div>
        ))}
      </div>
    )}
  </div>
);
  return (
    <main className="bg-gray-100 text-black font-sans">
      {/* === HEADER === */}
      <header className="absolute top-0 left-12.5 w-full z-50 flex items-center justify-between px-24 lg:px-40 py-6 text-white">
        <div className="mr-16 lg:mr-32">
          <Image
            src="/Image/Artboard 1 copy 5.svg"
            alt="Ha studio Logo"
            width={150}
            height={40}
          />
        </div>
        <nav className="flex-1 flex justify-center gap-12 text-sm font-medium">
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
        <div className="hidden md:flex text-sm font-medium mr-16 lg:mr-24">
          <a href="#contact" className="hover:text-[#F15B5F] transition">
            Contact
          </a>
        </div>
      </header>

      {/* === PROJECT MAIN IMAGE === */}
      <div className="relative w-screen h-[500px] lg:h-[700px]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* === PROJECT DETAILS === */}
<section className=" mx-auto px-6 py-25 space-y-12">
   <div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-12"></div>

  {/* Overview */}
  <SectionWithImages
    title={
      <div className="ml-16">
        <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
          PROJECT
        </span>
        <br className="-mb-1 " />
        <span className="uppercase max-w-7xl ml-56 text-base font-medium leading-tight">
          OVERVIEW
        </span>
      </div>
    }
    text={
  project.overview.map((part, index) => (
    <p
      key={index}
      className={`max-w-6xl ml-45 ${part.className || ""}`}
    >
      {part.text}
    </p>
  ))
}

    images={project.overviewImages?.map(img => ({ src: img.src, alt: img.alt, className: img.className }))}
  />
  <div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-12"></div>

  {/* Problem */}
{/* Problems Section */}
<SectionWithImages
  title={
    <div className="ml-16">
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        Problems
      </span>
      <br className="-mb-1" />
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        we faced
      </span>
    </div>
  }
  text={
    project.problem.map((part, index) => (
      <p key={index} className={`max-w-6xl ml-45 ${part.className || ""}`}>
        {part.text}
      </p>
    ))
  }
  images={project.problemImages?.map(img => ({ src: img.src, alt: img.alt, className: img.className }))}
/>
<div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-12"></div>

{/* Solution Section */}
<SectionWithImages
  title={
    <div className="ml-16">
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        our
      </span>
      <br className="-mb-1" />
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        solution
      </span>
    </div>
  }
  text={
    project.solution.map((part, index) => (
      <p key={index} className={`max-w-6xl ml-45 ${part.className || ""}`}>
        {part.text}
      </p>
    ))
  }
  images={project.solutionImages?.map(img => ({ src: img.src, alt: img.alt, className: img.className }))}
/>
<div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-12"></div>

{/* Client Thoughts Section */}
<SectionWithImages
  title={
    <div className="ml-16">
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        client
      </span>
      <br className="-mb-1" />
      <span className="uppercase max-w-6xl ml-56 text-base font-medium leading-tight">
        thoughts
      </span>
    </div>
  }
  text={
    project.clientThought.map((part, index) => (
      <p key={index} className={`max-w-6xl ml-45 ${part.className || ""}`}>
        {part.text}
      </p>
    ))
  }
  images={project.clientImages?.map(img => ({ src: img.src, alt: img.alt, className: img.className }))}
/>
</section>
      {/* === TESTIMONIALS === */}
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

      {/* === CONTACT FORM === */}
<section
  id="contact"
  className="px-6 lg:px-15 py-20 max-w-[1227px] mx-auto"
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

      {/* === FOOTER === */}
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
