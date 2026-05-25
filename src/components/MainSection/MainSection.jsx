import Card from "../Card/Card";

const MainSection = ({
	products,
	cartItems,
	activeView,
	onViewChange,
	onBuyNow,
	onRemove,
	onCheckout,
	cartTotal,
	recentlyAddedId,
}) => {
	return (
		<section id="products" className="bg-slate-50 py-20">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
				<div className="mx-auto mb-8 max-w-3xl text-center">
					<h2 className="text-4xl font-black text-slate-900">Premium Digital Tools</h2>
					<p className="mt-4 text-slate-500">
						Choose from our curated collection of premium digital products
						designed to boost your productivity and creativity.
					</p>
					<div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
						<button
							type="button"
							onClick={() => onViewChange("products")}
							className={`rounded-full px-6 py-2 text-sm font-bold transition ${
								activeView === "products"
									? "bg-linear-to-r from-indigo-600 to-fuchsia-600 text-white"
									: "text-slate-600"
							}`}
						>
							Products
						</button>
						<button
							type="button"
							onClick={() => onViewChange("cart")}
							className={`rounded-full px-6 py-2 text-sm font-bold transition ${
								activeView === "cart"
									? "bg-linear-to-r from-indigo-600 to-fuchsia-600 text-white"
									: "text-slate-600"
							}`}
						>
							Cart ({cartItems.length})
						</button>
					</div>
				</div>

				{activeView === "products" ? (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
						{products.map((product) => (
							<Card
								key={product.id}
								product={product}
								onBuyNow={onBuyNow}
								isAdded={recentlyAddedId === product.id}
							/>
						))}
					</div>
				) : (
					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
						<h3 className="mb-6 text-3xl font-black text-slate-900">Your Cart</h3>

						{cartItems.length === 0 ? (
							<div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
								<p className="text-lg font-semibold text-slate-600">Your cart is currently empty.</p>
								<p className="mt-2 text-sm text-slate-500">Click the Products tab and add tools to continue.</p>
							</div>
						) : (
							<>
								<div className="space-y-4">
									{cartItems.map((item) => (
										<div
											key={item.cartItemId}
											className="flex flex-col gap-4 rounded-2xl bg-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between"
										>
											<div className="flex items-center gap-4">
												<img
													src={item.icon}
													alt={`${item.name} icon`}
													className="h-12 w-12 rounded-xl bg-white p-2"
												/>
												<div>
													<p className="text-xl font-bold text-slate-800">{item.name}</p>
													<p className="text-base text-slate-500">${item.price}</p>
												</div>
											</div>
											<button
												type="button"
												onClick={() => onRemove(item.cartItemId)}
												className="text-left font-bold text-rose-500 transition hover:text-rose-600 sm:text-right"
											>
												Remove
											</button>
										</div>
									))}
								</div>

								<div className="mt-8 flex items-center justify-between">
									<p className="text-2xl font-bold text-slate-500">Total:</p>
									<p className="text-4xl font-black text-slate-900">${cartTotal}</p>
								</div>

								<button
									type="button"
									onClick={onCheckout}
									className="btn mt-6 w-full rounded-full border-0 bg-linear-to-r from-indigo-600 to-fuchsia-600 text-white"
								>
									Proceed to Checkout
								</button>
							</>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default MainSection;
