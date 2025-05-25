import Image from "next/image";
import { Button } from "./ui/button";
import Container from "./Container";

const AdBanner = () => {
    return (
        <div className="relative w-full h-[500px]">
            <Image
                width={2000}
                height={2000}
                src="/ad-banner.jpg"
                alt="hero-image"
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-black opacity-30"></div>
            <Container>
                <div className="bg-[#85634F] p-8 absolute mt-[105px] max-w-[40%] flex flex-col gap-2 items-start justify-center">
                    <h1 className="text-6xl text-white uppercase font-serif">
                        Mega Sale is Here!
                    </h1>
                    <p className="text-white font-light tracking-widest text-sm">
                        Enjoy massive discounts on your favorite products from top local and
                        international brands. Shop now and save big — limited time only!
                    </p>
                    <Button className="uppercase tracking-wider mt-2">Shop Now</Button>
                </div>
            </Container>
        </div>
    );
};

export default AdBanner;
