import { FoodItem } from '../types';

const menuData: FoodItem[] = [
  // Pizzas
  { id: 1, name: 'Margherita Pizza', description: 'Classic cheese and tomato pizza.', price: 12.99, category: 'Pizzas', imageUrl: 'https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg' },
  { id: 2, name: 'Pepperoni Pizza', description: 'Pizza with spicy pepperoni slices.', price: 15.99, category: 'Pizzas', imageUrl: 'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA' },
  { id: 3, name: 'Veggie Supreme Pizza', description: 'Loaded with fresh vegetables.', price: 13.99, category: 'Pizzas', imageUrl: 'https://img.freepik.com/free-photo/meat-pizza-bell-pepper-basil-arugula-tomato-cheese-onion-top-view_141793-2772.jpg?semt=ais_incoming&w=740&q=80' },
  { id: 10, name: 'BBQ Chicken Pizza', description: 'Pizza with tangy BBQ sauce, chicken, and onions.', price: 16.99, category: 'Pizzas', imageUrl: 'https://www.allrecipes.com/thmb/m_L18Cv-8TLi41o_32oBLg2Fm3g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24039-BBQ-Chicken-Pizza-DDMFS-4x3-2195-5872848227e748809470921161d9a2d6.jpg' },
  
  // Burgers
  { id: 4, name: 'Classic Beef Burger', description: 'Juicy beef patty with lettuce and tomato.', price: 9.99, category: 'Burgers', imageUrl: 'https://api.photon.aremedia.net.au/wp-content/uploads/sites/11/food/2014/11/28/AustralianWomensWeeklyBR116498/classic-beef-burger.jpg?fit=2048%2C1536' },
  { id: 5, name: 'Chicken Burger', description: 'Grilled chicken breast with mayo.', price: 8.99, category: 'Burgers', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*' },
  { id: 11, name: 'Mushroom Swiss Burger', description: 'Beef patty with sautéed mushrooms and Swiss cheese.', price: 11.99, category: 'Burgers', imageUrl: 'https://images.unsplash.com/photo-1605789534042-3f8ab385b56a?auto=format&fit=crop&q=80&w=1974' },
  { id: 12, name: 'Spicy Chicken Burger', description: 'Crispy chicken fillet with a spicy kick and coleslaw.', price: 9.49, category: 'Burgers', imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Spicy-Chicken-Sandwich-square-FS-36.jpg' },

  // Salads
  { id: 6, name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing.', price: 7.99, category: 'Salads', imageUrl: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw92573286/images/recipe-Images/classic-caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit' },
  { id: 7, name: 'Greek Salad', description: 'Feta cheese, olives, and fresh vegetables.', price: 8.49, category: 'Salads', imageUrl: 'https://www.rachelphipps.com/wp-content/uploads/2020/06/How-To-Make-A-Perfect-Greek-Salad.jpg' },
  { id: 13, name: 'Cobb Salad', description: 'Mixed greens with chicken, bacon, egg, and avocado.', price: 10.99, category: 'Salads', imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1974' },
  
  // Pasta
  { id: 16, name: 'Spaghetti Carbonara', description: 'Classic pasta with eggs, cheese, pancetta, and pepper.', price: 14.50, category: 'Pasta', imageUrl: 'https://images.unsplash.com/photo-1608796837873-518dec398939?auto=format&fit=crop&q=80&w=1974' },
  { id: 17, name: 'Fettuccine Alfredo', description: 'Creamy Alfredo sauce with fettuccine pasta.', price: 13.99, category: 'Pasta', imageUrl: 'https://www.allrecipes.com/thmb/AT18Bvs_jMAbO5i_ds35s2pS_j0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19402-fettuccine-alfredo-i-DDMFS-4x3-3392-f0a53163e77a488992e5977926189914.jpg' },
  { id: 18, name: 'Pesto Pasta', description: 'Pasta in a vibrant basil pesto sauce with cherry tomatoes.', price: 12.99, category: 'Pasta', imageUrl: 'https://images.unsplash.com/photo-1598866594243-52f64c6a6a1e?auto=format&fit=crop&q=80&w=1974' },

  // Sides
  { id: 19, name: 'Garlic Bread', description: 'Toasted bread with garlic, butter, and herbs.', price: 4.99, category: 'Sides', imageUrl: 'https://www.allrecipes.com/thmb/h33LRyze2gut90ro5L2Y5-A-16k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14238-garlic-bread-spread-ddmfs-4x3-0182-132b355a297e4aa4b61972683935393d.jpg' },
  { id: 20, name: 'French Fries', description: 'Crispy golden french fries.', price: 3.99, category: 'Sides', imageUrl: 'https://images.unsplash.com/photo-1576107232684-c7be35d03f8a?auto=format&fit=crop&q=80&w=1974' },
  
  // Desserts
  { id: 21, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center.', price: 6.99, category: 'Desserts', imageUrl: 'https://images.unsplash.com/photo-1579116669512-a6a9b4447cca?auto=format&fit=crop&q=80&w=1974' },
  { id: 22, name: 'New York Cheesecake', description: 'Creamy cheesecake with a graham cracker crust.', price: 5.99, category: 'Desserts', imageUrl: 'https://images.unsplash.com/photo-1543599723-8eac931213f0?auto=format&fit=crop&q=80&w=1974' },
  
  // Drinks
  { id: 8, name: 'Coca-Cola', description: 'Chilled soft drink.', price: 1.99, category: 'Drinks', imageUrl: 'https://images.unsplash.com/photo-1554866585-CD94860890b7?auto=format&fit=crop&q=80&w=1287' },
  { id: 9, name: 'Orange Juice', description: 'Freshly squeezed orange juice.', price: 2.49, category: 'Drinks', imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd452bba?auto=format&fit=crop&q=80&w=1287' },
  { id: 14, name: 'Iced Tea', description: 'Refreshing sweet iced tea.', price: 2.29, category: 'Drinks', imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c19761a?auto=format&fit=crop&q=80&w=1974' },
  { id: 15, name: 'Lemonade', description: 'Classic homemade lemonade.', price: 2.29, category: 'Drinks', imageUrl: 'https://images.unsplash.com/photo-1596597950983-505844a49c95?auto=format&fit=crop&q=80&w=1974' },
];

export const fetchMenuItems = (): Promise<FoodItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuData);
    }, 500); // Simulate network delay
  });
};