const plans = [
	{
		name: "Starter",
		subtitle: "Perfect for getting started",
		price: 0,
		action: "Get Started Free",
		featured: false,
		features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
	},
	{
		name: "Pro",
		subtitle: "Best for professionals",
		price: 29,
		action: "Start Pro Trial",
		featured: true,
		features: [
			"Access to all premium tools",
			"Unlimited templates",
			"Priority support",
			"Advanced analytics",
		],
	},
	{
		name: "Enterprise",
		subtitle: "For teams and businesses",
		price: 99,
		action: "Contact Sales",
		featured: false,
		features: [
			"Everything in Pro",
			"Team collaboration",
			"Dedicated support",
			"Custom branding",
		],
	},
];

const PricingSection = () => {
	return (
		<section id="pricing" className="bg-slate-50 py-20">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-black text-slate-900">Simple, Transparent Pricing</h2>
					<p className="mt-3 text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
					{plans.map((plan) => (
						<article
							key={plan.name}
							className={`rounded-2xl border p-7 ${
								plan.featured
									? "border-transparent bg-linear-to-b from-indigo-600 to-fuchsia-600 text-white shadow-xl"
									: "border-slate-200 bg-white"
							}`}
						>
							{plan.featured && (
								<span className="mb-3 inline-flex rounded-full bg-amber-200 px-3 py-1 text-xs font-extrabold uppercase text-amber-700">
									Most Popular
								</span>
							)}
							<h3 className="text-2xl font-extrabold">{plan.name}</h3>
							<p className={`mt-1 text-sm ${plan.featured ? "text-violet-100" : "text-slate-500"}`}>{plan.subtitle}</p>
							<p className="mt-6 text-5xl font-black">
								${plan.price}
								<span className={`text-base font-semibold ${plan.featured ? "text-violet-100" : "text-slate-500"}`}>
									/month
								</span>
							</p>

							<ul className="mt-6 space-y-2">
								{plan.features.map((feature) => (
									<li key={feature} className="flex gap-2 text-sm">
										<span className={plan.featured ? "text-violet-100" : "text-emerald-500"}>✓</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<button
								type="button"
								className={`btn mt-7 w-full rounded-full border-0 ${
									plan.featured
										? "bg-white text-indigo-700"
										: "bg-linear-to-r from-indigo-600 to-fuchsia-600 text-white"
								}`}
							>
								{plan.action}
							</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
