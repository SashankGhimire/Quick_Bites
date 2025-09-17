import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">About QuickBite</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Delivering happiness, one meal at a time.
                        </p>
                    </div>
                
                
                
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974" 
                                alt="Our cozy restaurant kitchen" 
                                className="rounded-lg shadow-xl w-full h-auto object-cover transition-shadow hover:shadow-2xl duration-500"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Story</h2>
                            <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                                Founded in 2024, QuickBite was born from a simple yet powerful idea: that great food should be easy to get. In a fast-paced world, we wanted to create a space where quality, taste, and convenience converge. Our founders, a team of passionate foodies and tech enthusiasts, envisioned a service that brings restaurant-quality meals to your doorstep without compromise.
                            </p>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-6">Our Mission</h2>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Our mission is to craft delicious, memorable meals using only the freshest, locally-sourced ingredients. We're committed to culinary excellence, speedy delivery, and creating a seamless ordering experience that makes your life a little bit easier and a whole lot tastier.
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default AboutUsPage;