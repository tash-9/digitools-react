import facebookIcon from "../../assets/Facebook.png";
import instagramIcon from "../../assets/Instagram.png";
import twitterIcon from "../../assets/Twitter.png";

const Footer = () => {
	return (
		<footer className="bg-slate-950 text-slate-300">
			<div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-6">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
					<div className="lg:col-span-2">
						<h3 className="text-4xl font-black text-white">DigiTools</h3>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
							Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
						</p>
					</div>

					<div>
						<h4 className="text-sm font-bold uppercase tracking-wide text-white">Product</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li>Features</li>
							<li>Pricing</li>
							<li>Templates</li>
							<li>Integrations</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-bold uppercase tracking-wide text-white">Company</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li>About</li>
							<li>Blog</li>
							<li>Careers</li>
							<li>Press</li>
						</ul>
					</div>

						<div>
						<h4 className="text-sm font-bold uppercase tracking-wide text-white">Resources</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li>Documentation</li>
							<li>Help Center</li>
							<li>Community</li>
							<li>Contact</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-bold uppercase tracking-wide text-white">Social Links</h4>
						<div className="mt-4 flex gap-3">
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-slate-700"
								aria-label="Instagram"
							>
								<img src={instagramIcon} alt="Instagram" className="h-8 w-8 object-contain" />
							</a>

							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-slate-700"
								aria-label="Facebook"
							>
								<img src={facebookIcon} alt="Facebook" className="h-8 w-8 object-contain" />
							</a>
							
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-slate-700"
								aria-label="Twitter"
							>
								<img src={twitterIcon} alt="Twitter" className="h-8 w-8 object-contain" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
					<p>© 2026 DigiTools. All rights reserved.</p>
					<div className="flex gap-5">
						<p>Privacy Policy</p>
						<p>Terms of Service</p>
						<p>Cookies</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
