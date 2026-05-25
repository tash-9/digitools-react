const stats = [
	{ value: "50K+", label: "Active Users" },
	{ value: "200+", label: "Premium Tools" },
	{ value: "4.9", label: "Rating" },
];

const StatsSection = () => {
	return (
		<section className="bg-linear-to-r from-indigo-700 via-violet-600 to-fuchsia-600 py-10 text-white">
			<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 md:px-6">
				{stats.map((stat, index) => (
					<div
						key={stat.label}
						className={`space-y-1 ${index !== 0 ? "sm:border-l sm:border-white/30" : ""}`}
					>
						<p className="text-4xl font-black">{stat.value}</p>
						<p className="text-lg font-semibold text-violet-100">{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsSection;
