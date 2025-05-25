import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <div className=" flex flex-col">
      <div className="relative w-full h-[450px] overflow-hidden rounded-lg">
        <Image
          width={2000}
          height={2000}
          src={item.image}
          alt={item.name}
          className="absolute w-full h-full object-cover"
        />
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
