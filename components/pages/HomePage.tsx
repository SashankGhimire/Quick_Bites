import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FoodItem } from "../../types";
import { fetchMenuItems } from "../../services/foodService";

// Icons
const DeliveryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-primary-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9h9.75a1.125 1.125 0 011.125 1.125v9.75m0-9.75h-9.75m17.25-9v9.75"
    />
  </svg>
);
const QualityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-primary-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const TasteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-primary-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75S9.75 9.336 9.75 9.75zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z"
    />
  </svg>
);
const BrowseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-primary-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
    />
  </svg>
);
const OrderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-primary-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.344 1.087-.835l.383-1.437M7.5 14.25L5.106 5.165A1.125 1.125 0 016.21 3.84h11.58a1.125 1.125 0 011.104 1.325L18 14.25M7.5 14.25"
    />
  </svg>
);
const EnjoyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-primary-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const HomePage: React.FC = () => {
  const [featuredItems, setFeaturedItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        const items = await fetchMenuItems();
        setFeaturedItems(items.slice(0, 3)); // Show first 3 items as featured
      } catch (error) {
        console.error("Failed to fetch featured menu items", error);
      }
    };
    loadFeaturedItems();
  }, []);

  const testimonials = [
    {
      quote:
        "QuickBite has the best burgers in town! The delivery is always super fast and the food arrives hot. Highly recommended!",
      name: "Jessica Miller",
      title: "Food Blogger",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "I order the Veggie Supreme Pizza at least once a week. The ingredients are so fresh and the crust is perfect every time. A lifesaver on busy nights!",
      name: "David Chen",
      title: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The customer service is outstanding. I had a small issue with my order once, and they resolved it immediately. Great food and great people.",
      name: "Sarah Johnson",
      title: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center pt-20 pb-12"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg')",
          backgroundAttachment: "fixed",
        }}
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-500/20 border border-primary-400/50 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary-200">
              🚀 Fast Delivery Available Now
            </span>
          </div>
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-2xl mb-6 leading-tight tracking-tight"
          >
            Welcome to QuickBite
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light">
            Delicious food delivered right to your door. Fresh, fast, and absolutely unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-primary-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:bg-primary-600 active:scale-95 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black/20"
            >
              Explore Our Menu
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-xl border-2 border-white/40 shadow-lg hover:bg-white/30 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}

      <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="mb-6 p-4 bg-primary-50 rounded-2xl group-hover:bg-primary-100 transition-colors duration-300">
                <BrowseIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Browse Menu</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore our diverse menu of pizzas, burgers, salads, and more.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="mb-6 p-4 bg-primary-50 rounded-2xl group-hover:bg-primary-100 transition-colors duration-300">
                <OrderIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Place Your Order</h3>
              <p className="text-slate-600 leading-relaxed">
                Add your favorite items to the cart and checkout in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="mb-6 p-4 bg-primary-50 rounded-2xl group-hover:bg-primary-100 transition-colors duration-300">
                <EnjoyIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Enjoy Your Meal</h3>
              <p className="text-slate-600 leading-relaxed">
                Get your delicious food delivered hot and fresh to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      {featuredItems.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Featured Dishes
              </h2>
              <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
                Handpicked selections from our kitchen
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl duration-300 flex flex-col group"
                  >
                    <div className="overflow-hidden h-56 bg-slate-100">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-slate-800">{item.name}</h3>
                      <p className="text-slate-600 mt-2 flex-grow">{item.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-primary-600">
                          ${item.price.toFixed(2)}
                        </span>
                        <Link
                          to="/menu"
                          className="text-primary-500 hover:text-primary-700 font-semibold"
                        >
                          Order Now &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="text-center mt-16">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary-500 text-white font-bold rounded-xl shadow-lg hover:bg-primary-600 active:scale-95 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                View Full Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Customer Feedback Section */}

      <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="absolute top-4 right-4 text-4xl text-primary-200 opacity-40">"</div>
                <p className="text-slate-600 italic mt-8 leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-center flex-col">
                  <p className="font-bold text-lg text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600 font-semibold">{testimonial.title}</p>
                  <div className="flex gap-1 mt-3 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
              We're committed to delivering excellence in every order
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-300 border border-primary-200 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <QualityIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Quality Ingredients</h3>
              <p className="text-slate-600 leading-relaxed">
                We use only the freshest and highest quality ingredients for our dishes.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-300 border border-primary-200 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DeliveryIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Our delivery team is committed to getting your food to you quickly.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-300 border border-primary-200 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TasteIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Unforgettable Taste</h3>
              <p className="text-slate-600 leading-relaxed">
                Our chefs are passionate about creating delicious and memorable meals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
