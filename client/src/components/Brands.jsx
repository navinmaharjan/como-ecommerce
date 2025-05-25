"use client";

import * as React from "react";
import Container from "./Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import products from "../../public/data/productData";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <div>
      <Container>
        {/* <h2 className="text-4xl font-serif font-semibold">Featured Brands</h2> */}
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center bg-[#EDE8E2]/30 py-8 cursor-pointer">
                      <span className="text-4xl uppercase font-serif text-gray-900">
                        {item.brand}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </Container>
    </div>
  );
};

export default Brands;
