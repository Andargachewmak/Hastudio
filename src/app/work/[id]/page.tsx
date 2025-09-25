"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

import Testimonials from "@/app/components/Testimonials";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

import { projects } from "../../data/data";
import { useState } from "react";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));
  const [fileName, setFileName] = useState<string>("");

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
            className={`relative   ${img.className || ""}`}
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
<div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-12 grid md:grid-col-1"></div>

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
<Testimonials />
      {/* === CONTACT FORM === */}
<ContactForm />
      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}

