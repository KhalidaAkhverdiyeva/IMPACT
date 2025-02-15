/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useColor } from "@/contexts/colorContext";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import AddToCartSidebar from "../Add to Card Sidebar/addToCartSidebar";
import { Product } from "@/types";
import { useCart } from "@/contexts/cartContext";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { selectedColor, setSelectedColor } = useColor();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useCart();

  const addProductToCart = async (productId: string, colorId: string) => {
    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch(
        `https://impact-server-side-production.up.railway.app/api/users/${userId}/cart`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId,
            colorId,
            quantity: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      // Add to local cart state immediately
      addToCart({
        productId,
        colorId,
        quantity: 1,
        _id: Date.now().toString(), // temporary id
      });
    } catch (error) {
      alert("Error adding product to cart:");
    }
  };

  const openSidebar = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setIsOpen(true);
      return;
    }

    // If user is logged in, proceed with adding to cart
    const selectedColorId = product.colorVariants[selectedColorIndex]._id;
    await addProductToCart(product._id, selectedColorId);
    setIsOpen(true);
  };

  const handleColorSelect = (color: string, index: number) => {
    setSelectedColor(color);
    setSelectedColorIndex(index);
  };

  const selectedVariant =
    product.colorVariants.find((variant) => variant.color === selectedColor) ||
    product.colorVariants[0];

  const mainImage = selectedVariant?.mainImage || "";
  const hoverImage = selectedVariant?.hoverImage || "";

  return (
    <div className="w-[100%] flex-1 ">
      <div
        className="relative mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          aria-label={product.title}
          href={`/products/${product.title}?index=${selectedColorIndex}`}
          className="cursor-pointer"
        >
          <Image
            src={mainImage}
            alt={product.title}
            width={1200}
            height={1200}
            className={`transition-opacity duration-500 w-full h-full ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={hoverImage}
            alt={`${product.title} Hover`}
            width={1200}
            height={1200}
            className={`transition-opacity duration-500 absolute w-full h-full inset-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {isHovered && (
          <div
            onClick={openSidebar}
            className="absolute bottom-[15px] right-[15px] bg-[#272727] whitespace-nowrap text-white text-center py-[10px] px-[10px] text-[18px] w-[130px] font-[700] cursor-pointer transition-all duration-300 ease-in-out hover:border-solid hover:border-[2px] hover:border-[#272727] hover:text-[#272727] hover:bg-transparent z-[50]"
          >
            + Quick add
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="py-[30px]">
        <div className="flex justify-between">
          <span className="text-[11px] text-[#272727B3]">
            {product.designer}
          </span>
          <span className="flex items-center gap-[4px]">
            <span className="text-[14px]">{product.rating}</span>
            <IoMdStar size={18} className="text-[#FFB74A]" />
          </span>
        </div>
        <div className="text-[15px] text-[#272727] font-[800] cursor-pointer">
          {product.title}
        </div>
        <div className="text-[#272727B3]">${product.price.toFixed(2)}</div>

        <div className="flex gap-2 mt-4">
          {product.colorVariants.map((variant, index) => (
            <div
              key={index}
              onClick={() => handleColorSelect(variant.color, index)}
              className="w-[15px] h-[9px] cursor-pointer border"
              style={{ backgroundColor: variant.color }}
            ></div>
          ))}
        </div>

        <div className="relative mt-[4px] h-1">
          <div
            className="absolute w-[15px] h-[2px] bg-black transition-all duration-300"
            style={{ left: `${selectedColorIndex * 23}px` }}
          ></div>
        </div>
      </div>
      <AddToCartSidebar isAddToCartOpen={isOpen} setIsAddCartOpen={setIsOpen} />
    </div>
  );
};

export default ProductCard;
