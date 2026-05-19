"use client";
import React, { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  eventType: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    eventType: "Wedding",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {});
      setStatus("Message sent. We will contact you shortly.");
      setForm({ name: "", phone: "", eventType: "Wedding", message: "" });
    } catch {
      setStatus("Unable to send. Please try WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappNumber = "917299162838"; // replace with country code + number
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, I'm ${form.name || "interested"} — I'd like to book for a ${form.eventType}.`
  )}`;

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(255,250,244,1)]">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Info / contact methods */}
        <div className="pr-0 md:pr-8">
          <h2 className="text-3xl font-semibold text-[#422a20]">Book & Enquiries</h2>
          <p className="mt-3 text-sm text-[#6b554c] max-w-md">
            For bridal bookings, trials and bespoke requests — share a few details and we will tailor a plan for your celebration.
          </p>

          <div className="mt-6 space-y-5 text-sm text-[#5b4339]">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg surface flex items-center justify-center">
                <svg className="w-5 h-5 text-[#7b5a49]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#836a5f]">Service area</div>
                <div className="text-sm font-medium text-[#422a20]">Chennai & surrounding regions · Travel on request</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg surface flex items-center justify-center">
                <svg className="w-5 h-5 text-[#7b5a49]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8v8a2 2 0 002 2h4l3 3 3-3h4a2 2 0 002-2V8" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#836a5f]">Follow</div>
                <a
                  href="https://instagram.com/gayuuu_artsssof"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#7b5a49] hover:text-[#5b4339] transition-colors"
                >
                  @gayuuu_artsssof
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg surface flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2f6a47]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2h-3l-3 3-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#836a5f]">WhatsApp</div>
                <a href={waLink} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#2f6a47] hover:text-[#1f4f36] transition-colors">
                  +91 72991 62838
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 btn btn-ghost"
              style={{
                borderColor: "rgba(123,90,73,0.08)",
                background: "linear-gradient(90deg, rgba(255,250,244,0.02), rgba(255,250,244,0.01))",
                color: "#2f6a47",
              }}
              aria-label="Start booking on WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5A9.5 9.5 0 1111.5 2 9.5 9.5 0 0121 11.5z" />
                <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M17 13.5c-.5 1-1.5 2-3 2-1 0-2-.5-3-1.5l-1-1C8 12 7 11.5 6 11.5" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[rgba(255,250,244,0.98)] rounded-2xl p-6 shadow-md border border-[rgba(59,41,33,0.06)]">
          <div className="grid gap-4">
            <label className="flex flex-col">
              <span className="text-xs text-[#836a5f] mb-2">Name</span>
              <input
                required
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Your Full Name"
                aria-label="Name"
                className="px-4 py-3 rounded-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.02)] focus:ring-2 focus:ring-[rgba(191,164,105,0.08)]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-[#836a5f] mb-2">Phone</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder="+91 98765 43210"
                aria-label="Phone"
                className="px-4 py-3 rounded-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.02)] focus:ring-2 focus:ring-[rgba(191,164,105,0.08)]"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-[#836a5f] mb-2">Event Type</span>
              <select
                value={form.eventType}
                onChange={handleChange("eventType")}
                aria-label="Event Type"
                className="px-4 py-3 rounded-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.02)] focus:ring-2 focus:ring-[rgba(191,164,105,0.08)]"
              >
                <option>Wedding</option>
                <option>Mehendi Party</option>
                <option>Engagement</option>
                <option>Other</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-[#836a5f] mb-2">Message</span>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                rows={5}
                placeholder="Date, venue and any special requests"
                aria-label="Message"
                className="px-4 py-3 rounded-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.02)] focus:ring-2 focus:ring-[rgba(191,164,105,0.08)]"
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 inline-flex items-center justify-center btn btn-primary"
                style={{
                  background: "linear-gradient(90deg,#7b513f 0%, #a67a5f 85%)",
                  color: "#24160e",
                  boxShadow: "0 10px 30px rgba(166,122,84,0.12)",
                }}
                aria-label="Send enquiry"
              >
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.02)] text-[#2f6a47] font-medium"
                aria-label="Contact via WhatsApp"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5A9.5 9.5 0 1111.5 2 9.5 9.5 0 0121 11.5z" />
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M17 13.5c-.5 1-1.5 2-3 2-1 0-2-.5-3-1.5l-1-1C8 12 7 11.5 6 11.5" />
                </svg>
                WhatsApp
              </a>
            </div>

            {status && <div className="text-sm text-[#5b4339] mt-2">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}