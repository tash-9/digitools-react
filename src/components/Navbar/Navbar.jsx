const navItems = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#" },
  { label: "FAQ", href: "#" },
];

const Navbar = ({ cartCount, onCartOpen }) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm">
      <nav className="navbar mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-sm border border-slate-200"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-20 mt-2 w-48 rounded-box border border-slate-200 bg-white p-2 shadow-lg"
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-transparent bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text">
            DigiTools
          </h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm font-semibold text-slate-600">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-indigo-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onCartOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM9 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" className="btn btn-ghost btn-sm hidden text-slate-700 sm:inline-flex">
            Login
          </button>
          <button
            type="button"
            className="btn btn-sm rounded-full border-0 bg-linear-to-r from-indigo-600 to-fuchsia-600 px-5 text-white shadow-lg shadow-indigo-200"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;