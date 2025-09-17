import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { saveOrder } from '../../services/orderService';

const CheckoutPage: React.FC = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    
    const [formData, setFormData] = useState({
        name: 'Admin User',
        address: '123 Food Street, Gourmet City',
        phone: '123-456-7890',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        try {
            await saveOrder(cartItems, cartTotal);
            addToast('Order placed successfully!', 'success');
            clearCart();
            navigate('/profile');
        } catch (error) {
            addToast('Failed to place order. Please try again.', 'error');
            setIsProcessing(false);
        }
    };
    
    if (cartItems.length === 0 && !isProcessing) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="text-2xl">Your cart is empty.</h1>
                <p>You cannot proceed to checkout without items.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start">
                    {/* Delivery Details */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Delivery Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                            </div>
                             <div>
                                <label htmlFor="address" className="block text-sm font-medium text-slate-700">Delivery Address</label>
                                <input type="text" name="address" id="address" value={formData.address} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <aside className="lg:col-span-1 p-6 bg-white rounded-lg shadow-md sticky top-24 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-slate-600">{item.name} x{item.quantity}</span>
                                    <span className="font-medium text-slate-800">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center border-t pt-4">
                            <h3 className="text-xl font-semibold text-slate-800">Total</h3>
                            <p className="text-2xl font-bold text-primary-600">${cartTotal.toFixed(2)}</p>
                        </div>
                        <div className="mt-6 flex flex-col gap-3">
                             <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full px-5 py-3 text-white font-semibold bg-primary-600 rounded-lg shadow-md transition-colors hover:bg-primary-700 disabled:bg-primary-300"
                            >
                                {isProcessing ? 'Placing Order...' : 'Place Order & Pay'}
                            </button>
                        </div>
                    </aside>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;