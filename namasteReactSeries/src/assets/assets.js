import KFC from "./KFC.jpg";
import BurgerKing from "./BurgerKing.jpg";
import McDonals from "./McDonals.jpg";
import Dominols from "./Dominols.jpg";
import Subways from "./Subways.jpg";
import Starbucks from "./Starbucks.jpg";
import Pizzahut from "./Pizzahut.jpg";
import Dunkin from "./Dunkin.jpg";
import Tacobells from "./Tacobells.jpg";

export const dummyRestaurantList = [
  {
    restaruantId:1, 
    name: "KFC",
    cusines: ["Burger", "Biryani", "Beverages"],
    rating: 4.2,
    deliveryTime: "38 mins",
    price: 500,
    image: KFC
  },
  
  {
    restaruantId:2,
    name: "Burger King",
    cusines: ["Burger", "Biryani", "Beverages"],
    rating: 4.0,
    deliveryTime: "45 mins",
    price: 600,
    image: BurgerKing
  },
  {
    restaruantId:3,
    name: "McDonald's",
    cusines: ["Burger", "Biryani", "Beverages"],
    rating: 4.5,
    deliveryTime: "30 mins",
    price: 400,
    image: McDonals
  },
  {
    restaruantId:4,
    name: "Domino's Pizza",
    cusines: ["Pizza", "Pasta", "Beverages"],
    rating: 4.3,
    deliveryTime: "40 mins",
    price: 700,
    image: Dominols
  },
  {
    restaruantId:5,
    name: "Subway",
    cusines: ["Sandwich", "Salads", "Beverages"],
    rating: 4.1,
    deliveryTime: "35 mins",
    price: 450,
    image: Subways
  },
  {
    restaruantId:6,
    name: "Starbucks",
    cusines: ["Coffee", "Pastries", "Beverages"],
    rating: 4.4,
    deliveryTime: "25 mins",
    price: 550,
    image: Starbucks
  },
  {
    restaruantId:7,
    name: "Pizza Hut",
    cusines: ["Pizza", "Pasta", "Beverages"],
    rating: 4.0,
    deliveryTime: "42 mins",
    price: 650,
    image: Pizzahut
  },
  {
    restaruantId:8,
    name: "Dunkin' Donuts",
    cusines: ["Donuts", "Coffee", "Beverages"],
    rating: 4.2,
    deliveryTime: "28 mins",
    price: 300,
    image: Dunkin
  },
  {
    restaruantId:9,
    name: "Taco Bell",
    cusines: ["Tacos", "Burritos", "Beverages"],
    rating: 4.1,
    deliveryTime: "33 mins",
    price: 400,
    image: Tacobells
  }
]