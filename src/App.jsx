import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import StatsSection from "./components/StatsSection/StatsSection";
import MainSection from "./components/MainSection/MainSection";
import StepsSection from "./components/StepsSection/StepsSection";
import PricingSection from "./components/PricingSection/PricingSection";
import Footer from "./components/Footer/Footer";
import products from "./data/products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeView, setActiveView] = useState("products");
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);

  useEffect(() => {
    if (!recentlyAddedId) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1200);

    return () => clearTimeout(timer);
  }, [recentlyAddedId]);

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  const handleAddToCart = (product) => {
    const cartEntry = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    };

    setCartItems((prev) => [...prev, cartEntry]);
    setRecentlyAddedId(product.id);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (cartItemId) => {
    const targetItem = cartItems.find((item) => item.cartItemId === cartItemId);
    if (!targetItem) {
      return;
    }

    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    toast.info(`${targetItem.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is already empty");
      return;
    }

    setCartItems([]);
    setActiveView("cart");
    toast.success("Checkout complete. Cart has been cleared.");
  };

  const handleOpenCart = () => {
    setActiveView("cart");
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar cartCount={cartItems.length} onCartOpen={handleOpenCart} />
      <Banner />
      <StatsSection />
      <MainSection
        products={products}
        cartItems={cartItems}
        activeView={activeView}
        onViewChange={setActiveView}
        onBuyNow={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
        cartTotal={cartTotal}
        recentlyAddedId={recentlyAddedId}
      />
      <StepsSection />
      <PricingSection />

      <section className="bg-linear-to-r from-indigo-700 via-violet-600 to-fuchsia-600 py-20 text-center text-white">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="text-4xl font-black">Ready To Transform Your Workflow?</h2>
          <p className="mt-4 text-violet-100">Join thousands of professionals who are already using Digitools to work smarter.<br/> Start your free trial today.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" className="btn rounded-full border-0 bg-white text-indigo-700 transition-all duration-200 hover:scale-110 hover:bg-green-400 hover:text-white active:scale-95 active:bg-green-500">
              Explore Products
            </button>
            <button type="button" className="btn rounded-full border border-violet-200 bg-transparent text-white transition-all duration-200 hover:scale-110 hover:bg-green-400 hover:border-green-400 active:scale-95 active:bg-green-500">
              View Pricing
              </button>
          </div>
          <p className="mt-4 text-violet-100">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;