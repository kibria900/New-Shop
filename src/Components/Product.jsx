import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import pic from "../assets/pic.png";
import pic1 from "../assets/pic1.PNG";
import pic2 from "../assets/pic.png";
import pic3 from "../assets/pic.png";
import pic4 from "../assets/pic.png";

const allProducts = [
  { id: 1, name: "Casual Shirt", price: 1200, discount: 999, img: pic },
  { id: 2, name: "Stylish Bag", price: 2500, discount: 1999, img: pic1 },
  { id: 3, name: "Modern Shoes", price: 3200, discount: 2799, img: pic2 },
  { id: 4, name: "Smart Watch", price: 5000, discount: 4499, img: pic3 },
  { id: 5, name: "Wireless Earbuds", price: 2200, discount: 1799, img: pic4 },
  { id: 6, name: "Leather Wallet", price: 1500, discount: 1199, img: pic },
  { id: 7, name: "Sunglasses", price: 1800, discount: 1499, img: pic1 },
  { id: 8, name: "Jeans Pant", price: 2100, discount: 1699, img: pic2 },
  { id: 9, name: "Bluetooth Speaker", price: 4000, discount: 3499, img: pic3 },
  { id: 10, name: "Sports T-Shirt", price: 1200, discount: 999, img: pic4 },
  { id: 11, name: "Cap", price: 700, discount: 499, img: pic },
  { id: 12, name: "Formal Shoes", price: 4200, discount: 3799, img: pic1 },
  { id: 13, name: "Headphones", price: 3300, discount: 2999, img: pic2 },
  { id: 14, name: "Travel Bag", price: 5200, discount: 4699, img: pic3 },
  { id: 15, name: "Winter Jacket", price: 6500, discount: 5999, img: pic4 },
  { id: 16, name: "Casual Pant", price: 2000, discount: 1699, img: pic },
  { id: 17, name: "Hand Watch", price: 2700, discount: 2299, img: pic1 },
  { id: 18, name: "Sports Shoes", price: 3500, discount: 3099, img: pic2 },
  { id: 19, name: "Laptop Bag", price: 2800, discount: 2499, img: pic3 },
  { id: 20, name: "Denim Jacket", price: 4500, discount: 3999, img: pic4 },
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // ৩টা রো, প্রতি রোতে ৪টা = ১২

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handleProductClick = (product) => {
    alert(`Details of ${product.name}`); // এখানে modal বা navigate করতে পারবেন
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="relative bg-white rounded-xl shadow hover:shadow-lg overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Wishlist button (top right) */}
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10">
              <FaHeart className="text-red-500 text-lg" />
            </button>

            {/* Add to Cart (bottom slide up) */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button className="w-full bg-green-500 text-white py-2 flex items-center justify-center gap-2 hover:bg-green-600">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>

            {/* Details */}
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <div className="flex justify-center items-center gap-2 text-sm">
                <p className="text-gray-500 line-through">৳ {product.price}</p>
                <p className="text-green-600 font-bold">
                  ৳ {product.discount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
