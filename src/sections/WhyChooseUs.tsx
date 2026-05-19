"use client";
import React from "react";

const FEATURES = [
	{
		id: "experience",
		title: "Experienced Artist",
		desc: "Years of bridal mehendi expertise — confident, delicate strokes with an artisan touch.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z"
				/>
			</svg>
		),
	},
	{
		id: "custom",
		title: "Bespoke Designs",
		desc: "Custom motifs tailored to your culture, story and wedding aesthetic.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 15a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v8z"
				/>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 10h8"
				/>
			</svg>
		),
	},
	{
		id: "bridal",
		title: "Bridal Focus",
		desc: "Full bridal compositions — intricate portraits, fills and flowing Arabic compositions.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3c1.38 0 2.5 1.12 2.5 2.5S13.38 8 12 8s-2.5-1.12-2.5-2.5S10.62 3 12 3z"
				/>
				<path
					strokeWidth="1.2"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4 21v-2a6 6 0 016-6h4a6 6 0 016 6v2"
				/>
			</svg>
		),
	},
	{
		id: "lasting",
		title: "Long‑lasting Stain",
		desc: "Proven pastes and aftercare guidance to ensure a deep, enduring color.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2v6"
				/>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 10a7 7 0 0014 0"
				/>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4 20h16"
				/>
			</svg>
		),
	},
	{
		id: "ingredients",
		title: "Natural Ingredients",
		desc: "Skin‑friendly natural cones and carefully prepared pastes for safety and richness.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2l4 7-4 13-4-13 4-7z"
				/>
			</svg>
		),
	},
	{
		id: "onsite",
		title: "On‑site Service",
		desc: "Comfortable on‑location service for weddings and events with professional setup.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-5 h-5 text-[#7b5a49]"
			>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 10h18"
				/>
				<path
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 10v6a2 2 0 002 2h10a2 2 0 002-2v-6"
				/>
			</svg>
		),
	},
];

export default function WhyChooseUs() {
	return (
		<section
			id="why-choose-us"
			className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(255,250,244,1)]"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8">
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#422a20]">
						Why Choose Gayu's Henna art
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[#6b554c] max-w-2xl mx-auto">
						Artisanal mehendi crafted with care — a warm, handcrafted approach to
						bridal and ceremonial designs.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURES.map((f) => (
						<article
							key={f.id}
							className="flex items-start gap-4 rounded-2xl p-5 bg-[rgba(255,250,244,0.98)] border border-[rgba(59,41,33,0.04)] shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
						>
							<div
								className="flex-none w-12 h-12 rounded-lg flex items-center justify-center"
								aria-hidden
								style={{ background: "rgba(123,90,73,0.06)" }}
							>
								{f.icon}
							</div>

							<div className="min-w-0">
								<h3 className="text-sm font-semibold text-[#3b2a24]">
									{f.title}
								</h3>
								<p className="mt-1 text-sm text-[#5b4339]">{f.desc}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}