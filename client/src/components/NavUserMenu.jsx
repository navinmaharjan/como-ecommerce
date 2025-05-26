"use client";

import { Search, User, ShoppingCart, X, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const NavUserMenu = ({
  isCartOpen,
  setIsCartOpen,
  isSearchBarOpen,
  setIsSearchBarOpen,
}) => {
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchBarOpen(false);
      }
    };
    if (isCartOpen || isSearchBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, isSearchBarOpen]);

  return (
    <div>
      <ul className="flex text-white">
        <li
          onClick={() => setIsSearchBarOpen(true)}
          className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer"
        >
          <Search size={"20"} />
        </li>
        <li className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer">
          <User size={"20"} />
        </li>
        <li
          onClick={() => setIsCartOpen(true)}
          className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer relative"
        >
          <ShoppingCart size={"20"} />
          <div className="absolute -top-1 right-0 w-4 h-4 bg-black rounded-full flex justify-center items-center">
            <span className="text-xs">0</span>
          </div>
        </li>
      </ul>

      {/* Background Overlay when cart or search is true */}
      {(isCartOpen || isSearchBarOpen) && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300" />
      )}

      {/* Sliding Cart Section */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-1/4 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold font-serif">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 cursor-pointer group"
            >
              <X
                size={20}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-auto p-4">
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center gap-3 py-3">
                <div className="w-16 h-16 bg-primary relative rounded-lg overflow-hidden">
                  <Image
                    src="/product_photo/pant.webp"
                    alt="Women's Flaux Leather Pocket Molly Tote Bag"
                    width={100}
                    height={100}
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-16 flex flex-col justify-center gap-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Women's Flaux Leather Pocket Molly Tote Bag
                    </p>
                    {/* <FiTrash2 className="text-lg text-gray-600 cursor-pointer" /> */}
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">$ 290</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex justify-center items-center bg-gray-200 cursor-pointer">
                        {" "}
                        -{" "}
                      </div>
                      <p className="font-semibold">1</p>
                      <div className="w-5 h-5 flex justify-center items-center bg-gray-200 cursor-pointer">
                        {" "}
                        +{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black opacity-10"></div>
            </div>
          </div>

          {/* Cart Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between mb-2">
              <span className="font-serif text-xl">Estimated Total</span>
              <span className="font-serif text-xl font-semibold">$290.00</span>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/checkout">
                <Button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-xs uppercase"
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Search Section */}
      <div
        ref={searchRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isSearchBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Search Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold font-serif">Search</h2>
            <button
              onClick={() => setIsSearchBarOpen(false)}
              className="w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 cursor-pointer group"
            >
              <X
                size={20}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 focus:outline-none rounded-lg"
                autoFocus
              />
            </div>
          </div>

          {/* Search Content */}
          <div className="flex-grow overflow-auto">
            {/* Most Searched Products */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                Most Searched
              </h3>
              <div className="space-y-3">
               
                <div className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 relative rounded-lg overflow-hidden">
                    <Image
                      src="/product_photo/pant.webp"
                      alt="Leather Jacket"
                      width={48}
                      height={48}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Leather Jacket
                    </p>
                    <p className="text-xs text-gray-500">1,234 searches</p>
                  </div>
                  <TrendingUp className="text-green-500" size={16} />
                </div>

              
                <div className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 relative rounded-lg overflow-hidden">
                    <Image
                      src="/product_photo/pant.webp"
                      alt="Denim Jeans"
                      width={48}
                      height={48}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Denim Jeans
                    </p>
                    <p className="text-xs text-gray-500">987 searches</p>
                  </div>
                  <TrendingUp className="text-green-500" size={16} />
                </div>

               
                <div className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 relative rounded-lg overflow-hidden">
                    <Image
                      src="/product_photo/pant.webp"
                      alt="Summer Dress"
                      width={48}
                      height={48}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Summer Dress
                    </p>
                    <p className="text-xs text-gray-500">756 searches</p>
                  </div>
                  <TrendingUp className="text-green-500" size={16} />
                </div>

               
                <div className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 relative rounded-lg overflow-hidden">
                    <Image
                      src="/product_photo/pant.webp"
                      alt="Sneakers"
                      width={48}
                      height={48}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      White Sneakers
                    </p>
                    <p className="text-xs text-gray-500">654 searches</p>
                  </div>
                  <TrendingUp className="text-green-500" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavUserMenu;
