import React, { useState, useEffect, useMemo } from 'react';
import { fetchMenuItems } from '../../services/foodService';
import { FoodItem } from '../../types';
import MenuItem from '../MenuItem';

const MenuPage: React.FC = () => {
    const [menu, setMenu] = useState<FoodItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const loadMenu = async () => {
            try {
                const items = await fetchMenuItems();
                setMenu(items);
            } catch (error) {
                console.error("Failed to fetch menu items", error);
            } finally {
                setLoading(false);
            }
        };

        loadMenu();
    }, []);
    
    const categories = useMemo(() => ['All', ...new Set(menu.map(item => item.category))], [menu]);

    const filteredMenu = useMemo(() => {
        return menu.filter(item => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [menu, activeCategory, searchQuery]);

    const groupedMenu = filteredMenu.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {} as Record<string, FoodItem[]>);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Menu</h1>
                <div className="relative max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search for dishes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-5 py-3 text-lg border-2 border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition"
                        aria-label="Search menu items"
                    />
                    <div className="absolute top-0 right-0 mt-4 mr-5">
                        <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 border ${
                            activeCategory === category 
                            ? 'bg-primary-500 text-white border-primary-500 shadow' 
                            : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-300'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {Object.keys(groupedMenu).length > 0 ? (
                 Object.entries(groupedMenu).map(([category, items]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-primary-300 pb-2 mb-6">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {(items as FoodItem[]).map((item) => (
                                <MenuItem 
                                    key={item.id} 
                                    item={item} 
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-slate-800">No Dishes Found</h3>
                    <p className="text-slate-600 mt-2">Your search for "{searchQuery}" did not match any dishes in the "{activeCategory}" category.</p>
                </div>
            )}
        </div>
    );
};

export default MenuPage;