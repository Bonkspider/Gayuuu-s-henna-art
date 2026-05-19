"use client";
import React from "react";

const PACKAGES = [
	{
		id: "bridal",
		title: "Bridal Package",
		price: "Starting ₹12,000",
		features: [
			"Full bridal composition",
			"Pre-consultation & trial",
			"Intricate motifs & portraits",
			"On-site application & touch-up",
		],
		highlight: true,
	},
	{
		id: "deluxe",
		title: "Deluxe Package",
		price: "₹6,500",
		features: ["Half-arm or full-feet set", "Custom motifs", "Light touch-up"],
		highlight: false,
	},
	{
		id: "minimal",
		title: "Minimal Package",
		price: "₹3,000",
		features: ["Wrist or ankle sets", "Quick & modern motifs", "Clean finishing"],
		highlight: false,
	},
	{
		id: "traditional",
		title: "Traditional Set",
		price: "From ₹4,500",
		features: [
			"Classic fills & paisleys",
			"Cultural motifs",
			"Event-ready styling",
		],
		highlight: false,
	},
];

export default function Services() {
	const handleScroll = (id: string) => (e?: React.MouseEvent) => {
		e?.preventDefault();
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<section
			id="services"
			className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(255,250,244,1)]"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-10">
					<h2 className="text-3xl sm:text-4xl font-semibold text-[#422a20]">
						Packages & Services
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[#6b554c] max-w-2xl mx-auto">
						Handcrafted mehendi packages tailored for brides and celebrations —
						warm, refined and thoughtfully composed.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{PACKAGES.map((pkg) => (
						<article
							key={pkg.id}
							className={`relative rounded-2xl p-6 shadow-lg border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.96)] transition-transform ${
								pkg.highlight
									? "scale-[1.01] ring-1 ring-[rgba(123,90,73,0.06)]"
									: "hover:-translate-y-1"
							}`}
						>
							{pkg.highlight && (
								<div className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#7b5a49] text-[rgba(255,250,244,0.96)] shadow-sm">
									Bridal favourite
								</div>
							)}

							<header className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-lg font-semibold text-[#3b2a24]">
										{pkg.title}
									</h3>
									<div className="mt-2 flex items-baseline gap-3">
										<div className="text-2xl font-bold text-[#422a20]">
											{pkg.price.split(" ")[0]}
										</div>
										<div className="text-sm text-[#836a5f]">
											{pkg.price.replace(pkg.price.split(" ")[0], "").trim()}
										</div>
									</div>
								</div>

								<div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-md bg-[rgba(123,90,73,0.06)]">
									<svg
										className="w-6 h-6 text-[#7b5a49]"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
									>
										<path
											strokeWidth="1.6"
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3v18M3 12h18"
										/>
									</svg>
								</div>
							</header>

							<ul className="mt-5 space-y-3 text-sm text-[#5b4339]">
								{pkg.features.map((f, i) => (
									<li key={i} className="flex items-start gap-3">
										<span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-sm bg-[rgba(59,41,33,0.06)] text-[#7b5a49]">
											<svg
												className="w-3 h-3"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
											>
												<path
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</span>
										<span>{f}</span>
									</li>
								))}
							</ul>

							<div className="mt-6 flex gap-3">
								<a
									href="#contact"
									onClick={handleScroll("contact")}
									className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-sm"
									style={{
										background:
											"linear-gradient(90deg,#7b513f 0%, #a67a5f 85%)",
										color: "#24160e",
										boxShadow: "0 10px 30px rgba(166,122,84,0.10)",
									}}
									aria-label={`Book ${pkg.title}`}
								>
									Book Now
								</a>

								<a
									href="#portfolio"
									onClick={handleScroll("portfolio")}
									className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-[rgba(59,41,33,0.06)] bg-[rgba(255,250,244,0.98)] text-[#5b4339]"
								>
									View Gallery
								</a>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 text-center text-sm text-[#6b554c]">
					Custom quotations and travel available for destination weddings —
					reach out for a tailored plan.
				</div>
			</div>
		</section>
	);
}