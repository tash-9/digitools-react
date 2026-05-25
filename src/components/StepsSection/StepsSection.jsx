import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";

const steps = [
	{
		id: "01",
		title: "Create Account",
		desc: "Sign up for free in seconds. No credit card required to get started.",
		icon: userIcon,
	},
	{
		id: "02",
		title: "Choose Products",
		desc: "Browse our catalog and select the tools that fit your workflow.",
		icon: packageIcon,
	},
	{
		id: "03",
		title: "Start Creating",
		desc: "Download and start using your premium tools immediately.",
		icon: rocketIcon,
	},
];

const StepsSection = () => {
	return (
		<section className="bg-white py-20">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-black text-slate-900">Get Started In 3 Steps</h2>
					<p className="mt-3 text-slate-500">Start using premium digital tools in minutes, not hours.</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
					{steps.map((step) => (
						<article key={step.id} className="relative rounded-2xl border border-slate-200 p-8 text-center">
							<span className="absolute right-4 top-4 rounded-full bg-linear-to-r from-indigo-600 to-fuchsia-600 px-2 py-1 text-xs font-bold text-white">
								{step.id}
							</span>
							<img
								src={step.icon}
								alt="Step icon"
								className="mx-auto h-16 w-16 rounded-full border border-indigo-100 bg-indigo-50 p-3"
							/>
							<h3 className="mt-6 text-2xl font-extrabold text-slate-900">{step.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-slate-500">{step.desc}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default StepsSection;
