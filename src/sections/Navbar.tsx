"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Gallery" },
  { id: "services", label: "Services" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // close menu on resize to desktop and manage body scroll when menu open
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const baseText = scrolled ? "text-[#422a20]" : "text-[rgba(39,25,19,0.96)]";
  const linkHover = "hover:text-[rgba(123,90,73,0.95)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50"> 
      <div className={`w-full transition-colors duration-300 ${scrolled ? 'backdrop-blur-sm bg-[rgba(255,250,244,0.94)] border-b border-[rgba(59,41,33,0.06)] shadow-sm' : 'bg-transparent'}`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={handleNavClick("home")}
              className="flex items-center gap-3"
              aria-label="Hennart Mehendi - Home"
            >
              <Image
                src="/logo/logo.jpg"
                alt="Gayu's Logo"
                width={48}
                height={48}
                className="rounded-md object-cover shadow-sm"
              />
              <div>
                <div className={`brand-logo text-sm leading-tight ${baseText}`}>Gayuuu's Henna Art</div>
                <div className={`text-xs text-muted -mt-0.5 ${baseText}`}>Mehendi Artist</div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className={`text-sm font-medium ${baseText} ${linkHover} transition-colors`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={handleNavClick("contact")}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full font-semibold text-sm btn-primary"
                aria-label="Book Now"
                style={{ boxShadow: '0 10px 30px rgba(169,139,111,0.12)' }}
              >
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className={`p-2 rounded-md icon-btn ${baseText}`}
              >
                {!open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu panel - placed after nav to avoid overlapping content */}
        <div className={`md:hidden w-full origin-top transition-all duration-200 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="mx-4 my-3 rounded-xl overflow-hidden border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.98)] backdrop-blur-sm shadow-lg">
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className="block px-3 py-2 rounded-md text-[#422a20] hover:bg-[rgba(191,164,105,0.06)] transition"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleNavClick("contact")}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-sm btn-primary w-full text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
