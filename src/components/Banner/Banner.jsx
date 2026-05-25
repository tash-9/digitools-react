import bannerImage from "../../assets/banner.png";
import circle from "../../assets/circle.png";
import Play from "../../assets/Play.png";

const Banner = () => {
	return (
		<section className="bg-white">
			<div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-8 md:px-6 md:pb-20 lg:grid-cols-2 lg:gap-20">
				<div className="space-y-6 text-center lg:text-left">
					<p className="mx-auto inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-indigo-600 lg:mx-0">
						<img src={circle} alt="Circle icon" />&nbsp; New AI-powered tools available
					</p>
					<h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
						Supercharge Your
						<br />
						<span className="bg-linear-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
							Digital Workflow
						</span>
					</h2>
					<p className="mx-auto max-w-xl text-base text-slate-500 lg:mx-0">
						Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br></br> Explore Products
					</p>
					<div className="flex flex-wrap justify-center gap-3 lg:justify-start">
						<button
							type="button"
							className="btn rounded-full border-0 bg-linear-to-r from-indigo-600 to-fuchsia-600 px-7 text-white"
						>
							Explore Products
						</button>
						<button
							type="button"
							className="btn rounded-full border border-indigo-200 bg-white px-7 text-indigo-600"
						>
							<img src={Play} alt="Play icon" className="h-4 w-4" /> Watch Demo
						</button>
					</div>
				</div>

				<div className="mx-auto w-full max-w-md rounded-3xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70">
					<img
						src={bannerImage}
						alt="Digital workflow preview"
						className="h-full w-full rounded-2xl object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
