"use client";
import { useColor } from "@/contexts/colorContext";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import AddToCartSidebar from "../Add to Card Sidebar/addToCartSidebar";
import { Product } from "@/types";
import { useCart } from "@/contexts/cartContext";
import SuccessAlert from "@/components/Alert/SuccessAlert";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { selectedColor, setSelectedColor } = useColor();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const openSidebar = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setIsOpen(true);
      return;
    }

    try {
      const selectedVariant = product.colorVariants[selectedColorIndex];
      if (!selectedVariant) {
        throw new Error("No color variant selected");
      }

      await addToCart({
        _id: `${product._id}-${selectedVariant._id}`,
        productId: product._id,
        colorId: selectedVariant._id,
        quantity: 1,
      });

      // Show success alert
      setShowAlert(true);

      // Wait for alert animation before showing cart
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleColorSelect = (color: string, index: number) => {
    setSelectedColor(color);
    setSelectedColorIndex(index);
    // Store the selected variant's ID for later use
    const selectedVariant = product.colorVariants[index];
    if (selectedVariant) {
      setSelectedColor(selectedVariant.color);
    }
  };

  const selectedVariant =
    product.colorVariants.find((variant) => variant.color === selectedColor) ||
    product.colorVariants[0];

  const mainImage = selectedVariant?.mainImage || "";
  const hoverImage = selectedVariant?.hoverImage || "";

  return (
    <>
      <div className="w-[100%]">
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
                key={variant._id}
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
      </div>
      <SuccessAlert
        open={showAlert}
        onClose={() => setShowAlert(false)}
        message="Item added to cart"
      />
      <AddToCartSidebar isAddToCartOpen={isOpen} setIsAddCartOpen={setIsOpen} />
    </>
  );
};

export default ProductCard;
