"use client";

import { useState } from "react";
import products from "../../public/data/productData";
import Container from "./Container";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = products.reduce(
    (acc, item) => {
      if (item.category && !acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    },
    ["All"]
  );

  const filteredProducts =
    activeCategory === "All"
      ? products.slice(0, 8)
      : products
        .filter(
          (product) =>
            product.category?.toLowerCase() === activeCategory.toLowerCase()
        )
        .slice(0, 8);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="pt-12 pb-8">
      <Container>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-serif font-semibold">New Arrivals</h2>
          <div className="flex gap-4 text-sm uppercase">
            {categories.slice(0, 4).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`transition-colors duration-200 hover:text-gray-600 cursor-pointer ${activeCategory === category
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">
                No products found in {activeCategory} category
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
