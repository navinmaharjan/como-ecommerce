import Image from "next/image";
import { Button } from "./ui/button";

const ProductCard = ({ item }) => {
  return (
    <div className=" flex flex-col group cursor-pointer relative">
      <div className="relative w-full h-[450px] overflow-hidden rounded-lg ">
        <Image
          width={2000}
          height={2000}
          src={item.image}
          alt={item.name}
          className="absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute w-full -bottom-16 group-hover:bottom-4 left-0 p-4 transition-all duration-500 ease-in-out">
          <Button className="w-full rounded-md py-6">
            <span className="uppercase tracking-wider font-semibold">
              ADD TO CART
            </span>
          </Button>
        </div>
      </div>
      <h3 className="text-medium font-serif pt-2 text-sm text-gray-500">
        {item.brand}
      </h3>
      <h3 className="text-medium font-bold font-serif">{item.name}</h3>
      <p className="mb-8 text-gray-500 text-sm font-semibold">
        {item.price}.00
      </p>
    </div>
  );
};

export default ProductCard;
