import { FoodItem } from "../types";

const menuData: FoodItem[] = [
  // Pizzas
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza.",
    price: 12.99,
    category: "Pizzas",
    imageUrl:
      "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Pizza with spicy pepperoni slices.",
    price: 15.99,
    category: "Pizzas",
    imageUrl:
      "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
  },
  {
    id: 3,
    name: "Veggie Supreme Pizza",
    description: "Loaded with fresh vegetables.",
    price: 13.99,
    category: "Pizzas",
    imageUrl:
      "https://img.freepik.com/free-photo/meat-pizza-bell-pepper-basil-arugula-tomato-cheese-onion-top-view_141793-2772.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    description: "Pizza with tangy BBQ sauce, chicken, and onions.",
    price: 16.99,
    category: "Pizzas",
    imageUrl:
      "https://thevirtualcaterer.com/wp-content/uploads/2024/05/BBQ-Chicken-Pizza-2-500x500.jpg",
  },
  {
    id: 5,
    name: "Four Cheese Pizza",
    description: "Mozzarella, cheddar, parmesan and gorgonzola.",
    price: 17.49,
    category: "Pizzas",
    imageUrl: "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
  },

  // Burgers
  {
    id: 6,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with lettuce and tomato.",
    price: 9.99,
    category: "Burgers",
    imageUrl:
      "https://api.photon.aremedia.net.au/wp-content/uploads/sites/11/food/2014/11/28/AustralianWomensWeeklyBR116498/classic-beef-burger.jpg?fit=2048%2C1536",
  },
  {
    id: 7,
    name: "Chicken Burger",
    description: "Grilled chicken breast with mayo.",
    price: 8.99,
    category: "Burgers",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*",
  },
  {
    id: 8,
    name: "Mushroom Swiss Burger",
    description: "Beef patty with sautéed mushrooms and Swiss cheese.",
    price: 11.99,
    category: "Burgers",
    imageUrl: "https://sweetsavoryandsteph.com/wp-content/uploads/2020/09/IMG_2461-scaled.jpg",
  },
  {
    id: 9,
    name: "Spicy Chicken Burger",
    description: "Crispy chicken fillet with a spicy kick and coleslaw.",
    price: 9.49,
    category: "Burgers",
    imageUrl:
      "https://thebigmansworld.com/wp-content/uploads/2024/11/spicy-chicken-sandwich-recipe.jpg",
  },
  {
    id: 10,
    name: "Double Cheeseburger",
    description: "Two beef patties with double cheese and pickles.",
    price: 12.99,
    category: "Burgers",
    imageUrl:
      "https://www.shutterstock.com/image-photo/double-patty-burger-marbled-beef-600nw-2144739373.jpg",
  },
  {
    id: 11,
    name: "Veggie Burger",
    description: "Plant-based patty with fresh greens and avocado.",
    price: 10.99,
    category: "Burgers",
    imageUrl:
      "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
  },

  // Salads
  {
    id: 12,
    name: "Caesar Salad",
    description: "Crisp romaine with Caesar dressing.",
    price: 7.99,
    category: "Salads",
    imageUrl:
      "https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg",
  },
  {
    id: 13,
    name: "Greek Salad",
    description: "Feta cheese, olives, and fresh vegetables.",
    price: 8.49,
    category: "Salads",
    imageUrl:
      "https://www.rachelphipps.com/wp-content/uploads/2020/06/How-To-Make-A-Perfect-Greek-Salad.jpg",
  },
  {
    id: 14,
    name: "Cobb Salad",
    description: "Mixed greens with chicken, bacon, egg, and avocado.",
    price: 10.99,
    category: "Salads",
    imageUrl:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1974",
  },

  // Pasta
  {
    id: 15,
    name: "Spaghetti Carbonara",
    description: "Classic pasta with eggs, cheese, pancetta, and pepper.",
    price: 14.5,
    category: "Pasta",
    imageUrl:
      "https://www.marthastewart.com/thmb/S9xVtnWSHldvxPHKOxEq0bALG-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg",
  },
  {
    id: 16,
    name: "Fettuccine Alfredo",
    description: "Creamy Alfredo sauce with fettuccine pasta.",
    price: 13.99,
    category: "Pasta",
    imageUrl: "https://midwestfoodieblog.com/wp-content/uploads/2023/07/chicken-alfredo-1.jpg",
  },
  {
    id: 17,
    name: "Pesto Pasta",
    description: "Pasta in a vibrant basil pesto sauce with cherry tomatoes.",
    price: 12.99,
    category: "Pasta",
    imageUrl:
      "https://www.foodandwine.com/thmb/E_HnIOZhTcYeB6cf4FSie8vpyHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Panko-pesto-pasta-FT-RECIPE-0625-86b09a6f6cb341ccab83acb264e88a82.jpg",
  },
  {
    id: 18,
    name: "Lasagna",
    description: "Layered pasta with beef ragu and béchamel sauce.",
    price: 15.99,
    category: "Pasta",
    imageUrl:
      "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/4:3/w_4172,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
  },
  {
    id: 19,
    name: "Mac and Cheese",
    description: "Creamy baked macaroni and cheese with cheddar.",
    price: 11.5,
    category: "Pasta",
    imageUrl:
      "https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg",
  },

  // Sides
  {
    id: 20,
    name: "Garlic Bread",
    description: "Toasted bread with garlic, butter, and herbs.",
    price: 4.99,
    category: "Sides",
    imageUrl: "https://assets-jpcust.jwpsrv.com/thumbnails/rkiijkuj-720.jpg",
  },
  {
    id: 21,
    name: "French Fries",
    description: "Crispy golden french fries.",
    price: 3.99,
    category: "Sides",
    imageUrl:
      "https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1-500x375.jpg",
  },
  {
    id: 22,
    name: "Onion Rings",
    description: "Crispy beer-battered onion rings.",
    price: 4.49,
    category: "Sides",
    imageUrl: "https://www.recipeworkbook.com/wp-content/uploads/2021/09/onion-rings3.jpg",
  },

  // Desserts
  {
    id: 23,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey molten center.",
    price: 6.99,
    category: "Desserts",
    imageUrl:
      "https://bluebowlrecipes.com/wp-content/uploads/2022/01/molten-chocolate-lava-cakes-for-two-7641.jpg",
  },
  {
    id: 24,
    name: "New York Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust.",
    price: 5.99,
    category: "Desserts",
    imageUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2021/10/new-york-cheesecake-21-square.jpg",
  },
  {
    id: 25,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert.",
    price: 6.49,
    category: "Desserts",
    imageUrl: "https://www.kingarthurbaking.com/sites/default/files/2023-03/Tiramisu_1426.jpg",
  },
  {
    id: 26,
    name: "Apple Pie",
    description: "Warm apple pie with cinnamon and flaky crust.",
    price: 4.99,
    category: "Desserts",
    imageUrl:
      "https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg",
  },

  // Drinks
  {
    id: 27,
    name: "Coca-Cola",
    description: "Chilled soft drink.",
    price: 1.99,
    category: "Drinks",
    imageUrl: "https://cdnimg.webstaurantstore.com/images/products/large/473849/1928114.jpg",
  },
  {
    id: 28,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    price: 2.49,
    category: "Drinks",
    imageUrl:
      "https://img.freepik.com/premium-photo/still-life-with-fresh-orange-juice-glass-with-splashes-drops-juice-is-pouring-from-decanter-into-glass-background-there-is-monstera-sunny-glare-set-3-juices_372268-3.jpg",
  },
  {
    id: 29,
    name: "Iced Tea",
    description: "Refreshing sweet iced tea.",
    price: 2.29,
    category: "Drinks",
    imageUrl: "https://www.thedinnerbite.com/wp-content/uploads/2021/05/iced-tea-recipe-img-4.jpg",
  },
  {
    id: 30,
    name: "Lemonade",
    description: "Classic homemade lemonade.",
    price: 2.29,
    category: "Drinks",
    imageUrl:
      "https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Sparkling-Lemonade-1-2.jpg?resize=740%2C793&ssl=1",
  },
  {
    id: 31,
    name: "Iced Coffee",
    description: "Cold-brewed coffee served over ice.",
    price: 2.99,
    category: "Drinks",
    imageUrl: "https://www.gerbes.com/content/v2/binary/image/vanilla.png",
  },
  {
    id: 32,
    name: "Mango Smoothie",
    description: "Creamy mango smoothie with yogurt.",
    price: 3.99,
    category: "Drinks",
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
  },
];

export const fetchMenuItems = (): Promise<FoodItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuData);
    }, 500); // Simulate network delay
  });
};
