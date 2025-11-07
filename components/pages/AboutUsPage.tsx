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
            
            {/* Map + info sidebar (responsive). On md+ screens this shows side-by-side. */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Map */}
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Our Location</h3>
                        <div className="w-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                title="QuickBite location map"
                                src="https://maps.google.com/maps?q=labin+Mall&z=15&output=embed"
                                className="w-full h-64 md:h-[480px] border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Sidebar with address, hours and actions */}
                    <aside className="bg-white rounded-lg p-6 shadow-lg border border-slate-100">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-xl font-semibold text-slate-800 mb-1 flex items-center gap-2">
                                    {/* small location pin svg */}
                                    <svg className="w-5 h-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                                    </svg>
                                    Visiting Info
                                </h4>
                                <p className="text-slate-600">Find us at:</p>
                            </div>
                        </div>

                        <address className="not-italic text-slate-700 mb-4 mt-4 leading-relaxed">
                            <strong className="block text-slate-800">Labin Mall</strong>
                            <span className="block">Near Central Plaza</span>
                            <span className="block">City, Country</span>
                        </address>

                        <div className="border-t border-slate-100 pt-4 mb-4">
                            <h5 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                                {/* clock svg */}
                                <svg className="w-4 h-4 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l2 2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                </svg>
                                Opening Hours
                            </h5>
                            <ul className="text-slate-700 text-sm leading-relaxed" aria-label="Opening hours list">
                                <li className="flex justify-between py-1">
                                    <span>Mon</span>
                                    <span className="font-medium">9:00 AM — 9:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Tue</span>
                                    <span className="font-medium">9:00 AM — 9:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Wed</span>
                                    <span className="font-medium">9:00 AM — 9:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Thu</span>
                                    <span className="font-medium">9:00 AM — 9:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Fri</span>
                                    <span className="font-medium">9:00 AM — 10:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Sat</span>
                                    <span className="font-medium">10:00 AM — 10:00 PM</span>
                                </li>
                                <li className="flex justify-between py-1">
                                    <span>Sun</span>
                                    <span className="font-medium">10:00 AM — 8:00 PM</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=labin+Mall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-shadow shadow"
                                aria-label="Get directions to Labin Mall"
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                Get directions
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-md hover:bg-slate-50 transition"
                                aria-label="Call QuickBite"
                            >
                                <svg className="w-4 h-4 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.38l.7 2.1a2 2 0 01-.45 2.09L8.91 10.91a16.01 16.01 0 006.18 6.18l2.34-1.82a2 2 0 012.09-.45l2.1.7A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z" />
                                </svg>
                                Call us
                            </a>
                        </div>

                        <p className="text-sm text-slate-500 mt-4">Parking available nearby. Wheelchair accessible entrance.</p>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;