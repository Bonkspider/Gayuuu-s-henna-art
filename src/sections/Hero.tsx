"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="bg-[rgba(255,250,244,1)] py-16 sm:py-20 lg:py-24"
      aria-label="Hero - Elegant Bridal Mehendi"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left - editorial content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-[rgba(255,255,250,0.9)] border border-[rgba(59,41,33,0.04)] shadow-[0_18px_40px_rgba(22,12,8,0.06)]">
              {/* Ornamental subtitle */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(123,90,73,0.06)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12c4-6 14-6 18 0-4 6-14 6-18 0z" stroke="#7b5a49" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span className="text-xs tracking-widest text-[rgba(39,25,19,0.62)] uppercase">Gayuuu's Henna Art</span>
              </div>

              {/* Headline */}
              <h1 className="cinzel-display text-3xl sm:text-4xl md:text-5xl leading-tight text-[rgba(39,25,19,0.98)]">
                Thoughtfully crafted mehendi designs for every celebration.
              </h1>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-[rgba(61,44,38,0.88)] max-w-xl">
                Beautiful mehendi designs for weddings, festivals, and celebrations — crafted with detail, creativity, and care.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact"
                  onClick={handleScroll("contact")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-transform transform hover:-translate-y-0.5 shadow-sm"
                  style={{
                    background: "linear-gradient(90deg,#8b5a44 0%,#b08a6d 100%)",
                    color: "#2a150e",
                    boxShadow: "0 10px 30px rgba(176,138,109,0.10)",
                  }}
                >
                  Book Now
                </a>

                <a
                  href="#portfolio"
                  onClick={handleScroll("portfolio")}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium border transition-colors"
                  style={{
                    borderColor: "rgba(123,90,73,0.08)",
                    background: "rgba(255,250,244,0.02)",
                    color: "rgba(39,25,19,0.9)",
                  }}
                >
                  View Gallery
                </a>
              </div>

              {/* Availability note */}
              <p className="mt-6 text-xs text-[rgba(39,25,19,0.62)]">Available for bespoke weddings & destination events — travel upon request</p>
            </div>
          </div>

          {/* Right - elegant image pane */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rounded-[28px] overflow-hidden bg-[rgba(245,240,235,0.9)] border border-[rgba(59,41,33,0.04)] shadow-[0_24px_60px_rgba(22,12,8,0.08)]">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[5/6]">
                <Image
                  src="/images/henna.jpg"
                  alt="Bridal mehendi close up"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  priority
                />
                {/* subtle overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,250,244,0.02)] to-[rgba(86,52,39,0.06)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}