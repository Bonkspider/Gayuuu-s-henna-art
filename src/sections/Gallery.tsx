"use client";
import React, { useState } from "react";
import Image from "next/image";

const CATEGORIES = ["All", "Bridal", "Arabic", "Minimal", "Traditional"] as const;

const IMAGES: { id: number; src: string; alt: string; category: (typeof CATEGORIES)[number] }[] = [
	{ id: 1, src: "/images/henna.jpg", alt: "Bridal mehendi design 1", category: "Bridal" },
	{ id: 2, src: "/images/henna2.jpg", alt: "Bridal mehendi design 2", category: "Bridal" },
	{ id: 3, src: "/images/henna3.jpg", alt: "Arabic mehendi design 1", category: "Arabic" },
	{ id: 4, src: "/images/henna4.jpg", alt: "Minimal mehendi design 1", category: "Minimal" },
	{ id: 5, src: "/images/henna5.jpg", alt: "Traditional mehendi design 1", category: "Traditional" },
	{ id: 6, src: "/images/henna6.jpg", alt: "Arabic mehendi design 2", category: "Arabic" },
	{ id: 7, src: "/images/henna7.jpg", alt: "Minimal mehendi design 2", category: "Minimal" },
	{ id: 8, src: "/images/henna8.jpg", alt: "Traditional mehendi design 2", category: "Traditional" },
	{ id: 9, src: "/images/henna9.jpg", alt: "Traditional mehendi design 2", category: "Traditional" },
	{ id: 10, src: "/images/henna10.jpg", alt: "Traditional mehendi design 2", category: "Traditional" },
	{ id: 11, src: "/images/henna11.jpg", alt: "Traditional mehendi design 2", category: "Traditional" },
	{ id: 12, src: "/images/henna12.jpg", alt: "Traditional mehendi design 2", category: "Traditional" },
];

export default function Gallery() {
	const [selected, setSelected] = useState<(typeof CATEGORIES)[number]>("All");
	const filtered = selected === "All" ? IMAGES : IMAGES.filter((i) => i.category === selected);

	return (
		<section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(255,250,244,1)]">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8">
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#4a362f]">Portfolio</h2>
					<p className="mt-2 text-sm sm:text-base text-[#6b554c] max-w-2xl mx-auto">
						Curated mehendi work — refined bridal compositions and elegant Arabic-inspired motifs with a handcrafted, warm aesthetic.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-3 mb-8">
					{CATEGORIES.map((cat) => {
						const active = cat === selected;
						return (
							<button
								key={cat}
								onClick={() => setSelected(cat)}
								aria-pressed={active}
								className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 font-medium
                  ${active
                    ? "bg-[#7b5a49] text-[rgba(255,250,244,0.98)] shadow-sm"
                    : "bg-[rgba(59,41,33,0.04)] text-[#63463d] hover:bg-[rgba(59,41,33,0.08)]"}
                `}
							>
								{cat}
							</button>
						);
					})}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filtered.map((img) => (
						<div
							key={img.id}
							className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[rgba(250,244,239,0.9)] border border-[rgba(59,41,33,0.06)] shadow-sm"
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-[rgba(59,41,33,0.32)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-350" />

							<div className="absolute left-4 bottom-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-350">
								<div className="backdrop-blur-sm bg-[rgba(255,250,244,0.06)] px-3 py-1 rounded-md">
									<div className="text-xs text-[rgba(255,250,244,0.92)] font-semibold">{img.category}</div>
								</div>
								<div className="text-xs text-[rgba(255,250,244,0.88)] bg-[rgba(0,0,0,0.08)] px-2 py-1 rounded-md">
									View
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}