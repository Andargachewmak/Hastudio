"use client";
import { useState } from "react";

export default function ContactForm() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setFileName(`${file.name} (${file.type})`);
    }
  };

  return (
    <section id="contact" className="px-6 lg:px-15 py-20 max-w-[1215px] mx-auto">
      <h2 className="text-5xl md:text-7xl font-semibold mb-8 text-left">
        say <span className="italic text-[#F15B5F]">hi</span>
      </h2>
      <form className="grid gap-6">
        {/* First row */}
        <div className="grid md:grid-cols-3 gap-6">
          <input className="border-b-2 border-black py-2 px-3 focus:outline-none" placeholder="First name*" />
          <input className="border-b-2 border-black py-2 px-3 focus:outline-none" placeholder="Last name*" />
          <input type="email" className="border-b-2 border-black py-2 px-3 focus:outline-none" placeholder="Email*" />
        </div>

        {/* Attachments + Message */}
        <div className="grid md:grid-cols-3 gap-6">
          <label className="flex items-center gap-2 border-b-2 border-black py-2 px-3 cursor-pointer hover:bg-gray-50 transition">
            <span className="text-gray-700">{fileName || "Attachments"}</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          <textarea
            className="border-b-2 border-black py-1.5 px-3 focus:outline-none min-h-[40px] md:col-span-2 resize-none"
            placeholder="Message"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end mt-6 -mb-6">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Send →
          </button>
        </div>
      </form>
    </section>
  );
}
