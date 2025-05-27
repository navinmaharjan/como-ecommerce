import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-[780px] overflow-hidden">
      <Image
        width={2000}
        height={2000}
        priority={true}
        src="/hero-banner.jpg"
        alt="hero-image"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] h-40 w-[60%] max-w-4xl text-center rounded-lg flex flex-col gap-2 items-center justify-center">
        <h1 className="text-6xl text-white uppercase font-serif">Elevate Your Style</h1>
        <p className="px-32 text-white font-light tracking-widest text-sm">Discover the latest collection from top international and local brands.Shop now and redefine your wardrobe with premium quality and exclusive designs</p>
        <Button className="uppercase tracking-wider mt-2">Shop Now</Button>
      </div>
    </div>
  );
};

export default Hero;
