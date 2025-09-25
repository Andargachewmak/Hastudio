"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "../data/data"; // import projects

export default function Work() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string>("Show All");
  const [fileName, setFileName] = useState("");
  const [loadingProjectId, setLoadingProjectId] = useState<number | null>(null);

  const filteredProjects =
    selectedFilter === "Show All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(`${file.name} (${file.type})`);
    }
  };

  const handleProjectClick = (id: number) => {
    setLoadingProjectId(id); // Show overlay
    setTimeout(() => {
      router.push(`/work/${id}`);
    }, 500); // Optional delay for demo
  };

  return (
    <main className="bg-gray-100 text-black font-sans">
      {/* === HEADER === */}
      <header className="flex items-center justify-between px-24 lg:px-40 py-6 ">
        <div className="ml-4 lg:ml-14">
          <Image
            src="/Image/Artboard 1 copy 4.svg"
            alt="Ha studio Logo"
            width={150}
            height={40}
          />
        </div>

        <nav className="flex-1 flex justify-center gap-12 text-sm font-medium">
          <a href="#services" className="hover:text-[#F15B5F] transition">
            Services
          </a>
          <Link href="/work" className="hover:text-[#F15B5F] transition font-bold">
            Work
          </Link>
          <a href="#about" className="hover:text-[#F15B5F] transition">
            About
          </a>
        </nav>

        <div className="hidden md:flex text-sm font-medium mr-2 lg:mr-2">
          <a href="#contact" className="hover:text-[#F15B5F] transition">
            Contact
          </a>
        </div>
      </header>

      {/* === OUR WORKS SECTION === */}
      <section className="px-6 lg:px-8 py-20 max-w-6xl mx-auto space-y-6 -mt-5">
        <h1 className="text-6xl md:text-[97px] font-medium leading-[0.96] text-center tracking-[-9px]">
          Our Works
        </h1>
        <p className="text-center text-sm font-medium text-[#000000] uppercase max-w-3xl mx-auto leading-relaxed">
          Discover how we collaborate with visionary <br /> teams to create brands
          that stand out and <br /> redefine what’s possible.
        </p>

        <div className="border-t border-[#000000] w-283.5 mt-24 mb-6"></div>

        {/* Filter Bar */}
        <div className="flex justify-start gap-6 mt-8">
          {["Branding", "Visual Identity", "Motion Design", "Show All"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 font-medium text-xs uppercase transition ${
                  filter === "Show All"
                    ? selectedFilter === filter
                      ? "text-black underline"
                      : "text-black hover:underline"
                    : selectedFilter === filter
                    ? "bg-black text-white rounded-3xl border-2"
                    : "bg-[#F3F4F6] text-black rounded-3xl border-2 hover:bg-black hover:text-white"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
{/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-4">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="flex flex-col items-start cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={() => handleProjectClick(project.id)}
    >
      {/* Image Box */}
      <div className="w-138 h-124 bg-white overflow-hidden relative rounded-lg">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover w-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}

        {/* Overlay */}
        {loadingProjectId === project.id && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg z-20">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-white font-semibold text-sm">
              Opening Project...
            </span>
          </div>
        )}
      </div>

      {/* Title, Description, and Category */}
      <div className="mt-4 w-124 flex justify-between items-start">
        <div className="text-left">
          <h3 className="font-bold text-xl mb-2">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
        <span className="text-sm font-medium text-[#000000] uppercase">
          {project.category}
        </span>
      </div>
    </div>
  ))}
</div>
      </section>
      {/* === TESTIMONIALS SECTION === */}

<Testimonials />
      {/* === CONTACT / MESSAGE FORM === */}
<ContactForm />
      {/* === FOOTER === */}
<Footer />
    </main>
  );
}
