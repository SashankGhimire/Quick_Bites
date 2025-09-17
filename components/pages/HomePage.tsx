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
        className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg')",
        }}
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 text-center p-4">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4"
          >
            Welcome to QuickBite
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
            Delicious food delivered right to your door. Fresh, fast, and
            unforgettable.
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-4 bg-primary-500 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-primary-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>

      {/* How It Works Section */}

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300">
              <BrowseIcon />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                1. Browse Menu
              </h3>
              <p className="text-slate-600">
                Explore our diverse menu of pizzas, burgers, salads, and more.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300">
              <OrderIcon />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                2. Place Your Order
              </h3>
              <p className="text-slate-600">
                Add your favorite items to the cart and checkout in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300">
              <EnjoyIcon />
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                3. Enjoy Your Meal
              </h3>
              <p className="text-slate-600">
                Get your delicious food delivered hot and fresh to your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      {featuredItems.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
              Featured Dishes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl duration-300 flex flex-col"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 mt-2 flex-grow">
                      {item.description}
                    </p>
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
            <div className="text-center mt-12">
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Customer Feedback Section */}

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md transition-shadow hover:shadow-xl duration-300"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full -mt-16 border-4 border-white shadow-md"
                />
                <p className="text-slate-600 italic mt-6">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 font-bold text-lg text-slate-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-500 font-semibold">
                  {testimonial.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <QualityIcon />
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Quality Ingredients
              </h3>
              <p className="text-slate-600">
                We use only the freshest and highest quality ingredients for our
                dishes.
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <DeliveryIcon />
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-slate-600">
                Our delivery team is committed to getting your food to you
                quickly.
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <TasteIcon />
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                Unforgettable Taste
              </h3>
              <p className="text-slate-600">
                Our chefs are passionate about creating delicious and memorable
                meals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
