import { FoodItem } from '../types';

const menuData: FoodItem[] = [
  // Pizzas
  { id: 1, name: 'Margherita Pizza', description: 'Classic cheese and tomato pizza.', price: 12.99, category: 'Pizzas', imageUrl: 'https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg' },
  { id: 2, name: 'Pepperoni Pizza', description: 'Pizza with spicy pepperoni slices.', price: 15.99, category: 'Pizzas', imageUrl: 'https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA' },
  { id: 3, name: 'Veggie Supreme Pizza', description: 'Loaded with fresh vegetables.', price: 13.99, category: 'Pizzas', imageUrl: 'https://img.freepik.com/free-photo/meat-pizza-bell-pepper-basil-arugula-tomato-cheese-onion-top-view_141793-2772.jpg?semt=ais_incoming&w=740&q=80' },
  { id: 4, name: 'BBQ Chicken Pizza', description: 'Pizza with tangy BBQ sauce, chicken, and onions.', price: 16.99, category: 'Pizzas', imageUrl: 'https://thevirtualcaterer.com/wp-content/uploads/2024/05/BBQ-Chicken-Pizza-2-500x500.jpg' },
  { id: 5, name: 'Four Cheese Pizza', description: 'Mozzarella, cheddar, parmesan and gorgonzola.', price: 17.49, category: 'Pizzas', imageUrl: 'https://www.seriouseats.com/thmb/7cGZzv1L8r6rIu0f3wqP8G0gJ0Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Four-Cheese-Pizza-LEAD-2-c1c1b6a7a2b44f3bb3d6f9f0e1f9e9e3.jpg' },

  // Burgers
  { id: 6, name: 'Classic Beef Burger', description: 'Juicy beef patty with lettuce and tomato.', price: 9.99, category: 'Burgers', imageUrl: 'https://api.photon.aremedia.net.au/wp-content/uploads/sites/11/food/2014/11/28/AustralianWomensWeeklyBR116498/classic-beef-burger.jpg?fit=2048%2C1536' },
  { id: 7, name: 'Chicken Burger', description: 'Grilled chicken breast with mayo.', price: 8.99, category: 'Burgers', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*' },
  { id: 8, name: 'Mushroom Swiss Burger', description: 'Beef patty with sautéed mushrooms and Swiss cheese.', price: 11.99, category: 'Burgers', imageUrl: 'https://sweetsavoryandsteph.com/wp-content/uploads/2020/09/IMG_2461-scaled.jpg' },
  { id: 9, name: 'Spicy Chicken Burger', description: 'Crispy chicken fillet with a spicy kick and coleslaw.', price: 9.49, category: 'Burgers', imageUrl: 'https://thebigmansworld.com/wp-content/uploads/2024/11/spicy-chicken-sandwich-recipe.jpg' },
  { id: 10, name: 'Double Cheeseburger', description: 'Two beef patties with double cheese and pickles.', price: 12.99, category: 'Burgers', imageUrl: 'https://assets.bonappetit.com/photos/5c3b7d4c3f7f5e0f6cdea60d/1:1/w_1200,h_1200,c_limit/double-cheeseburger.jpg' },
  { id: 11, name: 'Veggie Burger', description: 'Plant-based patty with fresh greens and avocado.', price: 10.99, category: 'Burgers', imageUrl: 'https://minimalistbaker.com/wp-content/uploads/2021/07/Plant-Based-Veggie-Burger-7.jpg' },

  // Salads
  { id: 12, name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing.', price: 7.99, category: 'Salads', imageUrl: 'https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg' },
  { id: 13, name: 'Greek Salad', description: 'Feta cheese, olives, and fresh vegetables.', price: 8.49, category: 'Salads', imageUrl: 'https://www.rachelphipps.com/wp-content/uploads/2020/06/How-To-Make-A-Perfect-Greek-Salad.jpg' },
  { id: 14, name: 'Cobb Salad', description: 'Mixed greens with chicken, bacon, egg, and avocado.', price: 10.99, category: 'Salads', imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1974' },

  // Pasta
  { id: 15, name: 'Spaghetti Carbonara', description: 'Classic pasta with eggs, cheese, pancetta, and pepper.', price: 14.50, category: 'Pasta', imageUrl: 'https://www.marthastewart.com/thmb/S9xVtnWSHldvxPHKOxEq0bALG-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg' },
  { id: 16, name: 'Fettuccine Alfredo', description: 'Creamy Alfredo sauce with fettuccine pasta.', price: 13.99, category: 'Pasta', imageUrl: 'https://midwestfoodieblog.com/wp-content/uploads/2023/07/chicken-alfredo-1.jpg' },
  { id: 17, name: 'Pesto Pasta', description: 'Pasta in a vibrant basil pesto sauce with cherry tomatoes.', price: 12.99, category: 'Pasta', imageUrl: 'https://www.foodandwine.com/thmb/E_HnIOZhTcYeB6cf4FSie8vpyHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Panko-pesto-pasta-FT-RECIPE-0625-86b09a6f6cb341ccab83acb264e88a82.jpg' },
  { id: 18, name: 'Lasagna', description: 'Layered pasta with beef ragu and béchamel sauce.', price: 15.99, category: 'Pasta', imageUrl: 'https://cookieandkate.com/images/2018/12/lasagna-recipe-1.jpg' },
  { id: 19, name: 'Mac and Cheese', description: 'Creamy baked macaroni and cheese with cheddar.', price: 11.50, category: 'Pasta', imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2020/06/mac-and-cheese-9.jpg' },

  // Sides
  { id: 20, name: 'Garlic Bread', description: 'Toasted bread with garlic, butter, and herbs.', price: 4.99, category: 'Sides', imageUrl: 'https://assets-jpcust.jwpsrv.com/thumbnails/rkiijkuj-720.jpg' },
  { id: 21, name: 'French Fries', description: 'Crispy golden french fries.', price: 3.99, category: 'Sides', imageUrl: 'https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1-500x375.jpg' },
  { id: 22, name: 'Onion Rings', description: 'Crispy beer-battered onion rings.', price: 4.49, category: 'Sides', imageUrl: 'https://www.simplyrecipes.com/thmb/3X3q3R7YJf9z0o3j4K7FW6rF1sI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-onion-rings-hero-2-2b2f8c2b6d3e42b09e5d5f9d9d7bd8f8.jpg' },

  // Desserts
  { id: 23, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a gooey molten center.', price: 6.99, category: 'Desserts', imageUrl: 'https://bluebowlrecipes.com/wp-content/uploads/2022/01/molten-chocolate-lava-cakes-for-two-7641.jpg' },
  { id: 24, name: 'New York Cheesecake', description: 'Creamy cheesecake with a graham cracker crust.', price: 5.99, category: 'Desserts', imageUrl: 'https://www.browneyedbaker.com/wp-content/uploads/2021/10/new-york-cheesecake-21-square.jpg' },
  { id: 25, name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert.', price: 6.49, category: 'Desserts', imageUrl: 'https://www.simplyrecipes.com/thmb/X1YF6cX6xj6rjR8v3Y42l9k8t2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Tiramisu-LEAD-2-0f1f0b0613384ff1a2b5d3d3d1eae3df.jpg' },
  { id: 26, name: 'Apple Pie', description: 'Warm apple pie with cinnamon and flaky crust.', price: 4.99, category: 'Desserts', imageUrl: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2019/10/apple-pie-3.jpg' },

  // Drinks
  { id: 27, name: 'Coca-Cola', description: 'Chilled soft drink.', price: 1.99, category: 'Drinks', imageUrl: 'https://cdnimg.webstaurantstore.com/images/products/large/473849/1928114.jpg' },
  { id: 28, name: 'Orange Juice', description: 'Freshly squeezed orange juice.', price: 2.49, category: 'Drinks', imageUrl: 'https://img.freepik.com/premium-photo/still-life-with-fresh-orange-juice-glass-with-splashes-drops-juice-is-pouring-from-decanter-into-glass-background-there-is-monstera-sunny-glare-set-3-juices_372268-3.jpg' },
  { id: 29, name: 'Iced Tea', description: 'Refreshing sweet iced tea.', price: 2.29, category: 'Drinks', imageUrl: 'https://www.thedinnerbite.com/wp-content/uploads/2021/05/iced-tea-recipe-img-4.jpg' },
  { id: 30, name: 'Lemonade', description: 'Classic homemade lemonade.', price: 2.29, category: 'Drinks', imageUrl: 'https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Sparkling-Lemonade-1-2.jpg?resize=740%2C793&ssl=1' },
  { id: 31, name: 'Iced Coffee', description: 'Cold-brewed coffee served over ice.', price: 2.99, category: 'Drinks', imageUrl: 'https://www.thespruceeats.com/thmb/1Qkq0Yooe8bXr9Y1Yw8r2nZB2T0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iced-coffee-5181583-hero-01-70f77b66b5bf445b8878b8d5f0c56c2b.jpg' },
  { id: 32, name: 'Mango Smoothie', description: 'Creamy mango smoothie with yogurt.', price: 3.99, category: 'Drinks', imageUrl: 'https://www.simplyrecipes.com/thmb/2O6k5Q8M4nH4pWQ3j6CINXwKJZk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Mango-Lassi-LEAD-1-39df2d8f4a6a4c39b9c6f7f9d0d9e8a1.jpg' },
];

export const fetchMenuItems = (): Promise<FoodItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuData);
    }, 500); // Simulate network delay
  });
};