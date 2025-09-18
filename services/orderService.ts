// Function to remove an order by id
export const removeOrder = (orderId: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getStoredOrders();
            const updatedOrders = orders.filter(order => order.id !== orderId);
            saveStoredOrders(updatedOrders);
            resolve();
        }, 300);
    });
};
import { Order, CartItem } from '../types';

const STORAGE_KEY = 'quickbite_orders';

// Function to get orders from localStorage
const getStoredOrders = (): Order[] => {
    try {
        const storedOrders = localStorage.getItem(STORAGE_KEY);
        return storedOrders ? JSON.parse(storedOrders) : [];
    } catch (error) {
        console.error("Could not parse stored orders", error);
        return [];
    }
};

// Function to save orders to localStorage
const saveStoredOrders = (orders: Order[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
        console.error("Could not save orders", error);
    }
};

// Mock function to fetch past orders
export const fetchOrders = (): Promise<Order[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const orders = getStoredOrders();
             // Sort orders by date, newest first
            orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            resolve(orders);
        }, 500);
    });
};

// Mock function to save a new order
export const saveOrder = (cartItems: CartItem[], total: number): Promise<Order> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newOrder: Order = {
                id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                date: new Date().toISOString(),
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: total,
                status: 'Processing',
            };

            const existingOrders = getStoredOrders();
            const updatedOrders = [...existingOrders, newOrder];
            saveStoredOrders(updatedOrders);
            
            resolve(newOrder);
        }, 500);
    });
};
