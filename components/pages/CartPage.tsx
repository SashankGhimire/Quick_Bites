import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem';

const CartPage: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to remove all items from your cart?')) {
            clearCart();
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-lg shadow-md">
                    <p className="text-xl text-slate-600 mb-4">Your cart is empty.</p>
                    <Link to="/menu" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 transition-colors">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <aside className="lg:col-span-1 p-6 bg-white rounded-lg shadow-md sticky top-24 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-4">Order Summary</h2>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold text-slate-800">Total</h3>
                            <p className="text-2xl font-bold text-primary-600">${cartTotal.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <Link 
                                to="/checkout"
                                className="w-full text-center px-5 py-3 text-white font-semibold bg-primary-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>

                        <div className="mt-6 border-t pt-4">
                             <button
                                onClick={handleClearCart}
                                className="w-full px-6 py-3 text-sm text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default CartPage;