"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const NavMenu = () => {
  const [shopScroll, setShopScroll] = useState(false);
  const [brandScroll, setBrandScroll] = useState(false);

  return (
    <nav className="">
      <ul className="flex gap-12 text-xs text-white font-medium tracking-widest uppercase cursor-pointer ">
        <li
          className="py-6 "
          onMouseEnter={() => setShopScroll(true)}
          onMouseLeave={() => setShopScroll(false)}
        >
          <Link href="#" className="block">
            Shop
          </Link>

          <div
            className={`absolute w-full top-full left-0 right-0 flex items-start justify-center gap-24 bg-white text-black overflow-hidden transition-all duration-300 ease-linear ${shopScroll ? "h-60" : "h-0"
              }`}
          ></div>
        </li>
        <li
          className="py-6"
          onMouseEnter={() => setBrandScroll(true)}
          onMouseLeave={() => setBrandScroll(false)}
        >
          <Link href="#">Brands</Link>
          <div
            className={`absolute w-full top-full left-0 right-0 flex items-start justify-center gap-24 bg-white text-black overflow-hidden transition-all duration-300 ease-linear ${brandScroll ? "h-60" : "h-0"
              }`}
          ></div>
        </li>
        <li className="py-6">
          <Link href="#">Sale</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
