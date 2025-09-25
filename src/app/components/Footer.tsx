"use client";
import { FaFacebook, FaLinkedin, FaTiktok, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F15B5F] text-[#000000] px-16 lg:px-12 py-38">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src="/Image/Artboard 1 copy 5.svg"
            alt="Ha studio logo"
            className="w-122 md:w-129"
          />
        </div>
        <nav className="flex flex-col gap-1 text-sm font-medium">
          <a href="#">Company</a>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="max-w-[1120px] mx-auto border-1 border-black mt-12 mb-3"></div>

      <div className="max-w-[1120px] mx-auto mt-6 flex items-center justify-between gap-6">
        <p className="text-sm font-medium opacity-80">
          © Ha studio - all rights reserved
        </p>
        <div className="flex items-center gap-4 text-xl">
          <FaSquareInstagram className="hover:text-pink-500 transition" />
          <FaTiktok className="hover:text-black transition-colors" />
          <FaFacebook className="hover:text-blue-600 transition-colors" />
          <FaLinkedin className="hover:text-blue-700 transition-colors" />
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1 font-medium text-sm hover:underline"
        >
          Back to top
        </button>
      </div>

      <p className="mt-28 text-center text-sm text-[#000000] tracking-wide uppercase font-medium">
        Designed by Andargachew Mekonnen
      </p>
    </footer>
  );
}
