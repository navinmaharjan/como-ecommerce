"use client";

import {
  Search,
  User,
  ShoppingCart,
  X,
  TrendingUp,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NavUserMenu = ({
  isCartOpen,
  setIsCartOpen,
  isSearchBarOpen,
  setIsSearchBarOpen,
}) => {
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login attempt:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log("Sign up attempt:", formData);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    });
  };

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
      <ul className="flex text-white gap-1">
        <li
          onClick={() => setIsSearchBarOpen(true)}
          className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer"
        >
          <Search size={"20"} />
        </li>

        <li
          onClick={() => setIsCartOpen(true)}
          className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer relative"
        >
          <ShoppingCart size={"20"} />
          {/* <div className="absolute -top-1 right-0 w-4 h-4 bg-black rounded-full flex justify-center items-center">
            <span className="text-xs">0</span>
          </div> */}
        </li>

        <Dialog>
          <DialogTrigger asChild>
            <Link href="#">
              <li className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-black/10 transition-all duration-300 cursor-pointer">
                <User size={"20"} />
              </li>
            </Link>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {isLogin ? "Welcome back" : "Create account"}
              </DialogTitle>
              <DialogDescription>
                {isLogin
                  ? "Enter your credentials to access your account."
                  : "Fill in your details to create a new account."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 py-4">
                {!isLogin && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    {/* <Label htmlFor="name" className="text-right">
                      Name
                    </Label> */}
                    <div className="col-span-4 relative">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="pl-10"
                      />
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-4 items-center gap-4">
                  {/* <Label htmlFor="email" className="text-right">
                    Email
                  </Label> */}
                  <div className="col-span-4 relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                    />
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  {/* <Label htmlFor="password" className="text-right">
                    Password
                  </Label> */}
                  <div className="col-span-4 relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="pl-10 pr-10"
                    />
                    <Lock
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    {/* <Label htmlFor="confirmPassword" className="text-right">
                      Confirm
                    </Label> */}
                    <div className="col-span-4 relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="pl-10"
                      />
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isLogin ? "Sign in" : "Create account"}
                </Button>

                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    {isLogin
                      ? "Don't have an account? "
                      : "Already have an account? "}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </div>

                {isLogin && (
                  <div className="text-center">
                    <button
                      type="button"
                      className="text-sm text-gray-600 hover:text-gray-800"
                    >
                      Forgot your password?
                    </button>
                  </div>
                )}
              </div>
            </form>
          </DialogContent>
        </Dialog>
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
