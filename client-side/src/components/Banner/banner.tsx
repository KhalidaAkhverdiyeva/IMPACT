"use client";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const texts = [
  "NEW: Discover our collaboration with George Sowden",
  "Free standard shipping on all orders",
  "A question? Visit our contact page to send us a message",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevNext = (direction: unknown) => {
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === texts.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? texts.length - 1 : prevIndex - 1;
      }
    });
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="bg-[#272727] text-[#fff] text-[12px] md:text-[14px] font-[800] py-[10px] px-[10px] md:py-[14px] flex justify-center">
      <div className="flex justify-between items-center w-[450px]">
        <div onClick={() => handlePrevNext("prev")}>
          <MdKeyboardArrowLeft className="text-[18px] cursor-pointer" />
        </div>

        <div
          className={`transition-opacity duration-300 ${
            isAnimating ? "animate-slide" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          {texts[currentIndex]}
        </div>

        <div onClick={() => handlePrevNext("next")}>
          <MdKeyboardArrowRight className="text-[18px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Banner;