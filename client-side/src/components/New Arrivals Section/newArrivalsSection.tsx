"use client";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import ScrollableProducts from "../Scrollable Products/scrollProducts";

const NewArrivalsSection = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="py-[48px] px-[20px] md:py-[64px] md:px-[32px] lg:px-[48px] max-w-[1600px] w-full">
        <h3 className="text-[32px] text-[#272727] md:text-[40px] font-[800]">
          New arrivals
        </h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] lg:max-w-[700px] font-[400] pb-[20px]">
            We are inspired by the realities of life today, in which traditional
            divides between personal and professional space are more fluid.
          </p>
          <div className="text-[#484848] flex gap-[5px] items-center">
            <p>View all</p>
            <button className="bg-[#E9E9E9] p-[6px] rounded-full flex justify-center items-center">
              <FaAngleRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-x-hidden mx-auto max-w-[1600px]">
        <ScrollableProducts setScrollProgress={setScrollProgress} />
        <div className="absolute bottom-0 left-0 w-[90vw] md:w-[91vw] lg:w-[93vw] bg-[#E9E9E9] mx-[20px] md:mx-[32px] lg:mx-[48px] h-[2px] ">
          <div
            className="bg-[#272727] h-[2px]"
            style={{ width: `${scrollProgress}%` }} // Reflect the scroll progress
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
