"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../Product Card/productCard";
import { Product } from "@/types/productCardTypes";

interface ScrollableProductsProps {
  setScrollProgress: (progress: number) => void;
}

const ScrollableProducts: React.FC<ScrollableProductsProps> = ({
  setScrollProgress,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const totalCards = 8;

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products/all");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      const cardWidth = scrollWidth / totalCards;

      const visibleCards = clientWidth / cardWidth;

      const adjustedScrollWidth = scrollWidth - clientWidth;

      const initialOffset = (visibleCards / totalCards) * 100;

      const progress =
        initialOffset +
        (scrollLeft / adjustedScrollWidth) * (100 - initialOffset);

      setScrollProgress(Math.min(progress, 100));
    }
  };

  useEffect(() => {
    fetchProducts();

    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        className="scroll-container relative flex overflow-x-auto px-[20px] md:px-[32px] lg:px-[48px] max-w-[1600px]"
        ref={scrollRef}
      >
        <div className="flex gap-[20px] relative overflow-visible">
          {products.map((product) => (
            <div key={product.id} className="flex-1 min-w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableProducts;
