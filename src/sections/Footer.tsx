"use client";
import React from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Gallery" },
  { id: "services", label: "Services" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const instagram = "https://instagram.com/gayuuu_artsssof";
  const whatsappNumber = "917299162838";
  const whatsapp = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-[rgba(255,250,244,1)] border-t border-[rgba(59,41,33,0.04)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[rgba(123,90,73,0.08)] border border-[rgba(59,41,33,0.04)]">
              {/* subtle artisan mark */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z" stroke="#7b5a49" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="1.2" fill="#7b5a49" />
              </svg>
            </div>

            <div>
              <div className="brand-logo text-[#422a20]">Gayuuu's Henna Art</div>
              <div className="text-sm text-[#836a5f] mt-0.5"> Mehendi Artist — handcrafted</div>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-4">
            {NAV.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-[#63463d] hover:text-[#7b5a49] px-2 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(123,90,73,0.04)] text-[#63463d] hover:bg-[rgba(123,90,73,0.08)] transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#63463d" strokeWidth="1.2" />
                <path d="M16 11.4A4 4 0 1112.6 8 4 4 0 0116 11.4z" stroke="#63463d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.6 6.4h.01" stroke="#63463d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm hidden sm:inline">@gayuuu_artsssof</span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(47,106,71,0.06)] text-[#2f6a47] hover:bg-[rgba(47,106,71,0.10)] transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 11.5A9.5 9.5 0 1111.5 2 9.5 9.5 0 0121 11.5z" stroke="#2f6a47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 13.5c-.5 1-1.5 2-3 2-1 0-2-.5-3-1.5l-1-1" stroke="#2f6a47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#6b554c]">
          © {year} Gayuuu's Henna Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
}