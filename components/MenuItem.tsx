import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodItem } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface MenuItemProps {
    item: FoodItem;
}

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const { addToCart } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            addToCart(item);
        }
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
        >
            <div className="overflow-hidden">
                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-800">{item.name}</h3>
                <p className="text-slate-600 mt-2 flex-grow">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-primary-600">${item.price.toFixed(2)}</span>
                    <button
                        onClick={handleAddToCart}
                        className="flex items-center px-4 py-2 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-75 transition-colors duration-300"
                    >
                        <PlusIcon />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;