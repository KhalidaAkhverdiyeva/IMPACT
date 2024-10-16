import React from "react";

const FloatingTextSection = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-[20px]">
      <div className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900] text-[#708A5C]">
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
      </div>
      <div className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900] text-[#708A5C]">
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
      </div>
      <div className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900]  text-[#708A5C]">
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
        <span className="px-4">Good design is everyone’s right.</span>
      </div>
    </div>
  );
};

export default FloatingTextSection;
