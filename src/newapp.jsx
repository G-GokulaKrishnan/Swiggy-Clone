import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import { IoSearchOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Header = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 drop-shadow-xl">
          <div className="flex flex-row justify-start items-start">
            <img
              src="https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Swiggy%20Logo.png?updatedAt=1710912670720"
              alt="Swiggy Logo"
              className="h-14"
            />
          </div>

          <div className="w-[90%] grid grid-cols-5 ">
            <button className="border-0 bg-none">Search</button>
            <button className="border-0">Offers</button>
            <button className="border-0">Help</button>
            <button className="border-0">Sign In</button>
            <button className="border-0">Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductCard = (prop) => {
  const { title, rating, time, description, location, img } = prop;
  return (
    <>
      <div className="flex flex-col mx-4">
        <div>
          <img
            src={img}
            alt="ProductImage"
            className="h-48 rounded-xl object-fill w-[100%]"
          />
        </div>

        <div className="productProperties">
          <h2 className="text-2xl truncate">{title}</h2>

          <div className="flex flex-wrap gap-4 ">
            <h4>{rating}</h4>
            <h4>{time}</h4>
          </div>

          <p>{description}</p>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

const WhatsOnYourMindProductCard = (prop) => {
  const { img } = prop;
  return (
    <>
      <div>
        <img src={img} alt="Item Image" className="h- object-fill w-[100%]" />
      </div>
    </>
  );
};

const TopRestaurantChainsInVelloreCard = (prop) => {
  const { title, rating, time, description, location, img } = prop;
  return (
    <>
      <div className=" mx-4">
        <div>
          <img
            src={img}
            alt="ProductImage"
            className="h-48 rounded-xl object-fill w-[100%]"
          />
        </div>

        <div className="productProperties">
          <h2 className="truncate">{title}</h2>

          <div className="flex flex-wrap gap-4 ">
            <h4>{rating}</h4>
            <h4>{time}</h4>
          </div>

          <p>{description}</p>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

const ProductLayout = () => {
  let [ProductDataSet] = useState([
    {
      title: "The Vellore Kitchen",
      rating: "4.4",
      time: "25-30mins",
      id: 1,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/swiggy.jpg?updatedAt=1710653975402",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Near Green Circle",
    },
    {
      title: "Domino's Pizza",
      rating: "4.5",
      time: "25mins",
      id: 2,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/092e58460657922e098a8afd5db838fe?updatedAt=1710679019501",
      description: "Pizzas, Italian, Pastas, Desserts",
      location: "Kosapet",
    },
    {
      title: "Urban Shakes",
      rating: "4.2",
      time: "35-40mins",
      id: 3,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Urban%20Shakes?updatedAt=1710681779829",
      description: "Continental, Desserts",
      location: "Saidapet",
    },
    {
      title: "Nellai Sakthivel Hotel",
      rating: "3.7",
      time: "35-40mins",
      id: 4,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Nellai%20Sakthivel%20Hotel?updatedAt=1710681815181",
      description: "South Indian, Snacks, Desserts",
      location: "Vellore Fort",
    },
    {
      title: "Brownie Station",
      rating: "4.3",
      time: "25-30mins",
      id: 5,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Brownie%20Station?updatedAt=1710681885034",
      description: "Desserts, Ice Cream",
      location: "Saidapet",
    },
    {
      title: "Spicycon",
      rating: "4",
      time: "50-55mins",
      id: 6,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/spicycon?updatedAt=1710681924836",
      description: "Continental, Indian, Snacks",
      location: "Sathuvachari",
    },
    {
      title: "Boba Drink",
      rating: "4",
      time: "25-30mins",
      id: 7,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Boba%20Drink?updatedAt=1710680880534",
      description: "Beverages, Juices",
      location: "Vellore Fort",
    },
    {
      title: "Bite Box Cafe",
      rating: "4",
      time: "30-35mins",
      id: 8,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Bite%20Box%20Cafe?updatedAt=1710681962863",
      description: "Fast Food, Chinese, Desserts",
      location: "Saidapet",
    },
    {
      title: "Ar Lounge",
      rating: "3.7",
      time: "25-30mins",
      id: 9,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Ar%20Lounge?updatedAt=1710682020374",
      description: "Chinese, Pastas, Burgers",
      location: "Near Vellore Kitchen, Green Circle",
    },
    {
      title: "Quick Cake Cold Cake",
      rating: "4.1",
      time: "55-60mins",
      id: 10,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Quick%20Cake%20Cold%20Cake?updatedAt=1710682453935",
      description: "Cakes and pastries, Ice Cream",
      location: "Viruthampet",
    },
    {
      title: "Cupcake Bliss Cake & Deserts",
      rating: "4.2",
      time: "45-50mins",
      id: 11,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Cupcake%20Bliss%20Cake%20&%20Desserts?updatedAt=1710682496853",
      description: "Bakery, Desserts, Ice Cream",
      location: "Katpadi",
    },
    {
      title: "Burger It Up",
      rating: "4.1",
      time: "40-45mins",
      id: 12,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Burger%20It%20Up?updatedAt=1710682530006",
      description: "Burgers, Beverages, Desserts",
      location: "Katpadi",
    },
    {
      title: "Seoul Fried Chicken",
      rating: "3.8",
      time: "40-45mins",
      id: 13,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Seoul%20Fried%20Chicken?updatedAt=1710682574422",
      description: "American, Fast Food, Snacks",
      location: "VIT-Katpadi",
    },
    {
      title: "Madno - House of Sundaes",
      rating: "4.5",
      time: "45-50mins",
      id: 14,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Madno?updatedAt=1710681391307",
      description: "Desserts, Ice Cream, Beverages",
      location: "Surya Complex",
    },
    {
      title: "Frozen Bottle - Milkshakes, Desserts & Ice Cream",
      rating: "4.4",
      time: "35-40mins",
      id: 15,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Frozen%20Bottle?updatedAt=1710681340969",
      description: "Beverages, Desserts, Ice Cream",
      location: "Surya Complex",
    },
    {
      title: "Kwality Walls Frozen Dessert & Ice Cream",
      rating: "4.6",
      time: "30-35mins",
      id: 16,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Kwality%20Walls?updatedAt=1710679492475",
      description: "Desserts, Ice Cream",
      location: "Thottapalayam",
    },
    {
      title: "China Town",
      rating: "4.5",
      time: "30-35mins",
      id: 17,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/China%20Town?updatedAt=1710679827807",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Susil Classic Upstair",
    },
    {
      title: "KFC",
      rating: "4.2",
      time: "30-35mins",
      id: 18,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/KFC?updatedAt=1710679885301",
      description: "Burgers, Biryani, American, Snacks",
      location: "Vasanthapuram",
    },
    {
      title: "Giani",
      rating: "4.5",
      time: "30-35mins",
      id: 19,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Giani?updatedAt=1710680171099",
      description: "Ice Cream",
      location: "Vellore Fort",
    },
    {
      title: "Meat and Eat",
      rating: "4.2",
      time: "30-35mins",
      id: 20,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Meat%20and%20Eat?updatedAt=1710680205459",
      description: "Chinese, Burgers, Ice Cream",
      location: "Kosapet",
    },
    {
      title: "Lassi Shop",
      rating: "4.2",
      time: "30-35mins",
      id: 21,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Lassi%20Shop?updatedAt=1710679700525",
      description: "Juice, Ice Cream, Desserts",
      location: "Toll Gate Signal",
    },
    {
      title: "UBQ by Barbeque Nation",
      rating: "4.2",
      time: "35-40mins",
      id: 22,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/dc1fzmuxs3hek5fo5dzj?updatedAt=1710678900327",
      description: "North Indian, Barbeque, Biryani",
      location: "Kosapet",
    },
    {
      title: "Pizza Hut",
      rating: "4.2",
      time: "40-45mins",
      id: 23,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Pizza%20Hut?updatedAt=1710681260599",
      description: "Pizzas",
      location: "Selvam Nagar",
    },
    {
      title: "Punjabi Rasoi",
      rating: "4.2",
      time: "40-45mins",
      id: 24,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Punjabi%20Rasoi?updatedAt=1710682615431",
      description: "Punjabi, North Indain, Healthy Meals",
      location: "Near VIT",
    },
    {
      title: "Hotel Surabi International",
      rating: "4.3",
      time: "25-30mins",
      id: 25,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Surabi%20International?updatedAt=1710682648989",
      description: "Biryani, Chinese, South Indian",
      location: "Zip by Spree Hotel",
    },
    {
      title: "Thambi Biryani Kadai",
      rating: "4.2",
      time: "20-25mins",
      id: 26,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Thambi%20Biryani?updatedAt=1710680672089",
      description: "Biryani, Chinese, Indian, Grill",
      location: "Velapadi",
    },
    {
      title: "Kari Soru",
      rating: "4.1",
      time: "20-25mins",
      id: 27,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Kari%20Soru?updatedAt=1710681751059",
      description: "Biryani, North Indian, South Indian",
      location: "Kosapet",
    },
    {
      title: "Baby Restaurant",
      rating: "4.3",
      time: "25-30mins",
      id: 28,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Baby%20Restaurant?updatedAt=1710682692862",
      description: "South Indian, Biryani, North Indian",
      location: "Baby Residency",
    },
    {
      title: "Yaa Mohaideen Biryani",
      rating: "4.1",
      time: "20-25mins",
      id: 29,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Yaa%20Mohideen?updatedAt=1710680247156",
      description: "Biryani, Tandoor, Chinese",
      location: "Green Circle",
    },
    {
      title: "Gyan Vaishanav Dhaba",
      rating: "4.3",
      time: "20-25mins",
      id: 30,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Gyan%20Vaishanav%20Dhaba?updatedAt=1710682739116",
      description: "North Indian, Chinese, Deserts",
      location: "Opposite CMC Front Gate",
    },
    {
      title: "Lalit Vihar",
      rating: "4.5",
      time: "25-30mins",
      id: 31,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Lalit%20Vihar?updatedAt=1710682768480",
      description: "North Indian, Chinese, Biryani",
      location: "Chetty Street",
    },
    {
      title: "Hotel Alankar",
      rating: "4.7",
      time: "20-25mins",
      id: 32,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Alankar?updatedAt=1710679277151",
      description: "South Indian, Biryani, Beverages",
      location: "OPP Chelliamman Kovil",
    },
    {
      title: "Fry Yo",
      rating: "4.3",
      time: "30-35mins",
      id: 33,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/kxjlw0vauz5rpxi3qgrg?updatedAt=1710679109598",
      description: "Burgers, Desserts, Fast Foods, Snacks",
      location: "Thottapalayam",
    },
    {
      title: "Jothie Biryani",
      rating: "4.2",
      time: "25-30mins",
      id: 34,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Jothie%20Biryani?updatedAt=1710680413037",
      description: "Biryani, South Indian",
      location: "Near CMC, Bangalore Road",
    },
    {
      title: "R K Tandoori",
      rating: "3.8",
      time: "25-30mins",
      id: 35,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/R%20K%20Tandoori?updatedAt=1710682875206",
      description: "South Indian, Biryani, Chinese",
      location: "Opposite CMC",
    },
    {
      title: "Manna biryani",
      rating: "4",
      time: "25-30mins",
      id: 36,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Manna%20biryani?updatedAt=1710682953451",
      description: "Biryani, Chinese, South Indian",
      location: "Saidapet",
    },
    {
      title: "Darling Bakery",
      rating: "4.4",
      time: "20-25mins",
      id: 37,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Darling%20bakery?updatedAt=1710679446626",
      description: "Bakery, Desserts, Sweets, Snacks",
      location: "Near Baby Mahal",
    },
    {
      title: "Harish Bakery",
      rating: "4.4",
      time: "20-25mins",
      id: 38,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Harish%20Bakery?updatedAt=1710683114246",
      description: "Bakery, Desserts, Sweets, Snacks",
      location: "Harish Food Zone",
    },
    {
      title: "Amirtha - Veg Treat From The House Of DARLING",
      rating: "4.4",
      time: "30-35mins",
      id: 39,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Amirtha%20-%20Veg%20Treat%20From%20The%20House%20Of%20DARLING?updatedAt=1710683115111",
      description: "South Indian",
      location: "Silk Mill",
    },
    {
      title: "Hotel Saravana Bhavan",
      rating: "4.4",
      time: "25-30mins",
      id: 40,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Saravana%20Bhavan?updatedAt=1710679525085",
      description: "South Indian",
      location: "Thottapalayam",
    },
    {
      title: "Lassi Shop",
      rating: "4.2",
      time: "25-30mins",
      id: 41,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Lassi%20Shop?updatedAt=1710679700525",
      description: "Juices, Ice Cream, Desserts",
      location: "Toll Gate Signal",
    },
    {
      title: "Dum Safar Biryani",
      rating: "4.2",
      time: "35-40mins",
      id: 42,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Dum%20Safar%20Biryani?updatedAt=1710683164361",
      description: "Biryani, Kebabs, Tandoor, Indian",
      location: "Kosapet",
    },
    {
      title: "Giani",
      rating: "4.5",
      time: "30-35mins",
      id: 43,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Giani?updatedAt=1710680171099",
      description: "Ice Cream",
      location: "Vellore Fort",
    },
    {
      title: "Khanna Veg Restaurant",
      rating: "4.3",
      time: "45-50mins",
      id: 44,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Khanna%20Veg%20Restaurant?updatedAt=1710683205018https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Khanna%20Veg%20Restaurant?updatedAt=1710683205018",
      description: "South Indian, North Indian, Biryani",
      location: "Kanna Feasta, Anna Salai",
    },
    {
      title: "Limra Garden Restaurant",
      rating: "4.2",
      time: "35-40mins",
      id: 45,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Limra%20Garden%20Restaurant?updatedAt=1710679249708",
      description: "Chinese, Burgers, Pastas",
      location: "Opposite to Netaji Stadium",
    },
    {
      title: "Visesham Restaurant",
      rating: "4.7",
      time: "35-40mins",
      id: 46,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Visesham%20Restaurant?updatedAt=1710683510156",
      description: "South Indian",
      location: "Vellore Fort",
    },
    {
      title: "D Lassi Box",
      rating: "4.6",
      time: "35-40mins",
      id: 47,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/D%20Lassi%20Box?updatedAt=1710680645656",
      description: "Beverages, Fast Food, Burgers",
      location: "Kosapet",
    },
    {
      title: "Bandhi Biriyani",
      rating: "4.2",
      time: "20-25mins",
      id: 48,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Bandhi%20Biriyani?updatedAt=1710683549679",
      description: "Biryani, North Indian",
      location: "Near CMC Out Gate",
    },
    {
      title: "Hotel Arthy",
      rating: "4.4",
      time: "25-30mins",
      id: 49,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Arthy?updatedAt=1710683580811",
      description: "South Indian, Biryani, North Indian",
      location: "Opposite to CMC Main Gate",
    },
    {
      title: "Gurunanak Punjabi Dhaba",
      rating: "4.3",
      time: "25-30mins",
      id: 50,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Gurunanak%20Punjabi%20Dhaba?updatedAt=1710683672205",
      description: "North Indian, Beverages, Desserts",
      location: "Near CMC Front Gate",
    },
    {
      title: "Minerva Sweets & Bakery",
      rating: "4.1",
      time: "20-25mins",
      id: 51,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Minerva%20Sweet%20and%20Bakery?updatedAt=1710680611324",
      description: "Bakery, Snacks",
      location: "Vellore Fort",
    },
    {
      title: "Hotel S.B.R",
      rating: "4.4",
      time: "50-55mins",
      id: 52,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20S.B.R?updatedAt=1710683672946",
      description: "Biryani, Chinese, South Indian",
      location: "Katpadi",
    },
    {
      title: "Fortune Deli by Fortune Park",
      rating: "4.2",
      time: "40-45mins",
      id: 53,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Fortune%20Deli?updatedAt=1710680820940",
      description: "Biryani, Indian, Continental",
      location: "Gandhi Nagar",
    },
    {
      title: "Sivam Sweets",
      rating: "4.6",
      time: "20-25mins",
      id: 54,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Sivam%20Sweets?updatedAt=1710683711163",
      description: "Sweets, Desserts",
      location: "Kosapet",
    },
    {
      title: "Darling Roof Top",
      rating: "4.5",
      time: "40-45mins",
      id: 55,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Darling%20Roof%20Top?updatedAt=1710680958512",
      description: "Biryani, South Indian, Chinese",
      location: "Kosapet",
    },
  ]);

  let [WhatsOnYourMindDataSet] = useState([
    {
      id: 1,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Burger.png?updatedAt=1710769256375",
    },
    {
      id: 2,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Noodles.png?updatedAt=1710769269285",
    },
    {
      id: 3,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Samosas.png?updatedAt=1710769280395",
    },
    {
      id: 4,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Momos.png?updatedAt=1710769292066",
    },
    {
      id: 5,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Pizza.png?updatedAt=1710769333258",
    },
    {
      id: 6,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Rolls.png?updatedAt=1710769340221",
    },
    {
      id: 7,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Biryani_2.png?updatedAt=1710769353813",
    },
    {
      id: 8,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Chinese.png?updatedAt=1710769375153",
    },
    {
      id: 9,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Shawarma.png?updatedAt=1710769395042",
    },
    {
      id: 10,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Cakes.png?updatedAt=1710769395793",
    },
    {
      id: 11,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Bonda.png?updatedAt=1710769409128",
    },
    {
      id: 12,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Pav_Bhaji.png?updatedAt=1710769424011",
    },
    {
      id: 13,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Sandwich.png?updatedAt=1710769447196",
    },
    {
      id: 14,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Parotta.png?updatedAt=1710769471141",
    },
    {
      id: 15,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Paniyaram.png?updatedAt=1710769481450",
    },
    {
      id: 16,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Shakes.png?updatedAt=1710769489977",
    },
    {
      id: 17,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/South_Indian_4.png?updatedAt=1710769498464",
    },
    {
      id: 18,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Dosa.png?updatedAt=1710769511332",
    },
    {
      id: 19,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Asset%20what/Juice.png?updatedAt=1710769522005",
    },
  ]);

  let [TopRestaurantChainsInVelloreCardDataSet] = useState([
    {
      title: "UBQ by Barbeque Nation",
      rating: "4.2",
      time: "35-40mins",
      id: 1,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Barbeque%20Nation?updatedAt=1710679321112",
      description: "North Indian, Barbeque, Biryani",
      location: "Kosapet",
    },
    {
      title: "McDonald's",
      rating: "4.4",
      time: "40-45mins",
      id: 2,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/McDonalds's?updatedAt=1710869522987",
      description: "Burgers, Beverages, Cafe, Desserts",
      location: "Katpadi",
    },

    {
      title: "Zufruita",
      rating: "4.4",
      time: "25-30mins",
      id: 3,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Zufrutia?updatedAt=1710869985497",
      description: "Biryani, Arabian, South Indian, North Indian",
      location: "Opposite Daily Thanthi",
    },
    {
      title: "Domino's Pizza",
      rating: "4.5",
      time: "25mins",
      id: 4,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Dominos?updatedAt=1710679298278",
      description: "Pizzas, Italian, Pastas, Desserts",
      location: "Kosapet",
    },
    {
      title: "The Vellore Kitchen",
      rating: "4.4",
      time: "25-30mins",
      id: 5,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/The%20Vellore%20Kitchen?updatedAt=1710679365610",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Near Green Circle",
    },
    {
      title: "Fry Yo",
      rating: "4.3",
      time: "30-35mins",
      id: 6,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Fry%20Yo?updatedAt=1710679341579",
      description: "Burgers, Desserts, Fast Foods, Snacks",
      location: "Thottapalayam",
    },
    {
      title: "Hotel Alankar",
      rating: "4.7",
      time: "20-25mins",
      id: 7,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Alankar?updatedAt=1710679277151",
      description: "South Indian, Biryani, Beverages",
      location: "OPP Chelliamman Kovil",
    },
    {
      title: "Madurai Pandiyan Hotel",
      rating: "4.1",
      time: "20-25mins",
      id: 8,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Madurai%20Pandian%20Hotel?updatedAt=17108704967182",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Near Green Circle",
    },
    {
      title: "Kanpur Chaat Corner",
      rating: "4.2",
      time: "15-20mins",
      id: 9,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Madurai%20Pandian%20Hotel?updatedAt=1710870496718",
      description: "Snacks",
      location: "Opp. CMC Eye Hospital",
    },
    {
      title: "Darling Bakery",
      rating: "4.4",
      time: "20-25mins",
      id: 10,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Darling%20bakery?updatedAt=1710679446626",
      description: "Bakery, Desserts, Sweets, Snacks",
      location: "Near Baby Mahal",
    },
    {
      title: "Hotel Aryaas",
      rating: "4.4",
      time: "20-25mins",
      id: 11,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Aryaas?updatedAt=1710870991253",
      description: "South Indian, Biryani, North Indian, Desserts",
      location: "Green Circle",
    },
    {
      title: "Hundreds Heritage",
      rating: "4.4",
      time: "35-40mins",
      id: 12,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hundreds%20Heritage?updatedAt=1710871142975",
      description: "Biryani, Tandoor, Chinese, Pastas",
      location: "Gandhi Nagar",
    },
    {
      title: "Dum Safar Biryani",
      rating: "4.2",
      time: "35-40mins",
      id: 13,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Dum%20Safar%20Biryani?updatedAt=1710683164361",
      description: "Biryani, Kebabs, Tandoor, Indian",
      location: "Kosapet",
    },
    {
      title: "China Town",
      rating: "4.5",
      time: "30-35mins",
      id: 14,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/China%20Town?updatedAt=1710679827807",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Susil Classic Upstair",
    },
    {
      title: "KFC",
      rating: "4.3",
      time: "30-35mins",
      id: 15,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/KFC?updatedAt=1710679885301",
      description: "Burgers, Biryani, American, Snacks",
      location: "Katpadi",
    },
    {
      title: "Burger King",
      rating: "4.4",
      time: "35-40mins",
      id: 16,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Burger%20King?updatedAt=1710871860804",
      description: "Burgers, American",
      location: "Vellore",
    },
    {
      title: "Kwality Walls Frozen Desserta & Ice Cream",
      rating: "4.6",
      time: "30-35mins",
      id: 17,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Kwality%20Walls?updatedAt=1710679492475",
      description: "Desserts, Ice Cream",
      location: "Thottapalayam",
    },
    {
      title: "Abhiruchi Restaurant",
      rating: "4.4",
      time: "30-35mins",
      id: 18,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Abhiruchi%20?updatedAt=1710871103858",
      description: "Biryani, South Indian, Chinese, North Indian",
      location: "Gandhinagar",
    },
    {
      title: "Meat and Eat",
      rating: "4.2",
      time: "30-35mins",
      id: 19,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Meat%20and%20Eat?updatedAt=1710680205459",
      description: "Chinese, Burgers, Ice Cream",
      location: "Kosapet",
    },
    {
      title: "Hotel Saravana Bhavan",
      rating: "4.4",
      time: "25-30mins",
      id: 20,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Hotel%20Saravana%20Bhavan?updatedAt=1710679525085",
      description: "South Indian",
      location: "Thottapalayam",
    },
  ]);

  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto max-h-50 mb-6">
          <h1 className="py-2">What's on your mind?</h1>
          <div className="max-h-44 grid grid-cols-7 overflow-auto gap-2">
            {WhatsOnYourMindDataSet.map((e) => {
              return (
                <WhatsOnYourMindProductCard key={e.id} img={e.image_url} />
              );
            })}
          </div>
        </div>

        <div className="w-[90%] mx-auto max-h-72 shadow-2xl  ">
          <h1 className="py-2">Top restaurant chains in Vellore</h1>
        </div>

        <div className="w-[90%] mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-auto max-h-72">
          {TopRestaurantChainsInVelloreCardDataSet.map((e) => {
            return (
                
              <TopRestaurantChainsInVelloreCard
                key={e.id}
                title={e.title}
                rating={e.rating}
                time={e.time}
                description={e.description}
                location={e.location}
                img={e.image_url}
              />
            );
          })}
        </div>

        <div className="w-[90%] mx-auto  ">
          <h1 className="py-2">
            Restaurants with online food delivery in Vellore
          </h1>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-12 gap-2  ">
          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">Filter</button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">Sort By</button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">
              Fast Delivery
            </button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">
              New on Swiggy
            </button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">
              Ratings 4.0+
            </button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">Pure Veg</button>
          </div>

          <div className="flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">Offers</button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">
              Rs.300-Rs.600
            </button>
          </div>

          <div className=" flex justify-center items-center">
            <button className="border-2 rounded-xl py-1 px-2">
              Less than Rs.300
            </button>
          </div>
        </div>

        <div className="w-[90%] mx-auto grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
          {ProductDataSet.map((e) => {
            return (
              <ProductCard
                key={e.id}
                title={e.title}
                rating={e.rating}
                time={e.time}
                description={e.description}
                location={e.location}
                img={e.image_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="2xl:container bg-black">
        
        <div className="w-[90%] mx-auto grid lg:grid-cols-4 footer pt-6 ">
          <div>
            <img
              src="https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/swiggyB&G?updatedAt=1710999774407"
              alt="Swiggy B&G"
              className="h-8"
            />
            <p className="text-white">
              &#169; 2023 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div className="text-white flex flex-col">
              <h3>Company</h3>
              <button>About</button>
              <button>Careers</button>
              <button>Team</button>
              <button>Swiggy One</button>
              <button>Swiggy Instamart</button>
              <button>Swiggy Genie</button>
          </div>

          <div className="text-white flex flex-col">
            <div className="flex flex-col">
              <h3>Contact us</h3>
              <button>Help & Support</button>
              <button>Partner with us</button>
              <button>Ride with us</button>
            </div>

            <div className="flex flex-col">
              <h3>Legal</h3>
              <button>Terms & Conditions</button>
              <button>Cookie Policy</button>
              <button>Privacy Policy</button>
            </div>
          </div>

          <div className="text-white flex flex-col">
              <h3>We deliver to:</h3>
              <button>Bangalore</button>
              <button>Gurgaon</button>
              <button>Hyderabad</button>
              <button>Delhi</button>
              <button>Mumbai</button>
              <button>Pune</button>
          </div>
        </div>
      </div>
    </>
  );
};

//Root
const AppLayout = () => {
  return (
    <>
      <Header />
      <ProductLayout />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
