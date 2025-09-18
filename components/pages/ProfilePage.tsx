import React, { useState, useEffect } from 'react';
import { fetchOrders, removeOrder } from '../../services/orderService';
import { Order } from '../../types';

const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-slate-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const OrderHistoryItem: React.FC<{ order: Order; onRemove: (id: string) => void }> = ({ order, onRemove }) => {
    const [isOpen, setIsOpen] = useState(false);
    const statusClasses = {
        Delivered: 'bg-green-100 text-green-800',
        Processing: 'bg-yellow-100 text-yellow-800',
        Shipped: 'bg-blue-100 text-blue-800',
    };
    return (
        <div className="border border-slate-200 rounded-lg mb-4">
            <div className="flex justify-between items-center p-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex-1 text-left hover:bg-slate-50"
                >
                    <div>
                        <p className="font-semibold text-slate-800">Order #{order.id}</p>
                        <p className="text-sm text-slate-500">{order.date}</p>
                    </div>
                </button>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[order.status]}`}>{order.status}</span>
                <p className="font-semibold text-slate-800 ml-4">${order.total.toFixed(2)}</p>
                <button
                    onClick={() => onRemove(order.id)}
                    className="ml-4 px-3 py-1 text-xs font-semibold rounded bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                    Remove
                </button>
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}> 
                <div className="p-4 border-t border-slate-200 bg-slate-50">
                    <h4 className="font-semibold mb-2">Items:</h4>
                    <ul>
                        {order.items.map(item => (
                            <li key={item.id} className="flex justify-between text-sm text-slate-700 py-1">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    
    // Mock user data
    const user = {
        name: 'Admin User',
        email: 'admin@quickbite.com',
    };

    const loadOrders = async () => {
        const userOrders = await fetchOrders();
        setOrders(userOrders);
    };
    useEffect(() => {
        loadOrders();
    }, []);

    const handleRemoveOrder = async (orderId: string) => {
        await removeOrder(orderId);
        await loadOrders();
    };

    return (
        <div className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Profile Card */}
                        <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                             <div className="p-10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center border-4 border-primary-500 shadow-lg mb-4">
                                        <UserCircleIcon />
                                    </div>
                                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{user.name}</h1>
                                    <p className="text-md text-slate-500 mb-2">{user.email}</p>
                                </div>
                                <div className="mt-8 text-center">
                                    <button className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 transition-colors">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order History */}
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Order History</h2>
                            {orders.length > 0 ? (
                                <div className="space-y-6">
                                    {orders.map(order => (
                                        <OrderHistoryItem key={order.id} order={order} onRemove={handleRemoveOrder} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-500">No orders yet.</p>
                            )}
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default ProfilePage;