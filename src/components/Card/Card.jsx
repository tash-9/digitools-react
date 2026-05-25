const tagStyleMap = {
	popular: "bg-amber-100 text-amber-700",
	new: "bg-emerald-100 text-emerald-700",
	"best-seller": "bg-fuchsia-100 text-fuchsia-700",
};

const Card = ({ product, onBuyNow, isAdded }) => {
	return (
		<article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
			<div className="mb-5 flex items-center justify-between">
				<img
					src={product.icon}
					alt={`${product.name} icon`}
					className="h-12 w-12 rounded-xl border border-slate-100 bg-slate-50 p-2"
				/>
				<span
					className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
						tagStyleMap[product.tagType] ?? "bg-slate-100 text-slate-700"
					}`}
				>
					{product.tag}
				</span>
			</div>

			<h3 className="text-2xl font-extrabold text-slate-900">{product.name}</h3>
			<p className="mt-3 min-h-16 text-sm leading-relaxed text-slate-500">{product.description}</p>

			<p className="mt-4 text-3xl font-black text-slate-900">
				${product.price}
				<span className="ml-1 text-sm font-semibold lowercase text-slate-500">/{product.period}</span>
			</p>

			<ul className="mt-4 space-y-2">
				{product.features.map((feature) => (
					<li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
						<span className="mt-0.5 text-emerald-500">✓</span>
						<span>{feature}</span>
					</li>
				))}
			</ul>

			<button
				type="button"
				onClick={() => onBuyNow(product)}
				className="btn mt-6 w-full rounded-full border-0 bg-linear-to-r from-indigo-600 to-fuchsia-600 text-white"
			>
				{isAdded ? "Added to cart" : "Buy Now"}
			</button>
		</article>
	);
};

export default Card;
