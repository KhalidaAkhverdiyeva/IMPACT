import AboutNumbersSection from "@/components/About Numbers Section/aboutNumbersSection";
import Quote from "@/components/Designer Quote/quote";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="relative">
      <Header />
      <div className=" h-[560px] lg:h-[760px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait.jpg?v=1656685244&width=1600"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait_mobile.jpg?v=1656685248&width=800"
            alt="thomas"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="flex flex-col gap-[10px]">
            <span className="text-white font-[800] text-[16px]  leading-[1] text-center max-w-[700px]">
              About us
            </span>
            <h2 className="text-white font-[800] text-[56px] md:text-[68px] lg:text-[80px] leading-[1] text-center max-w-[700px]">
              We do high-quality products
            </h2>
          </div>
        </div>
      </div>
      <AboutNumbersSection />
      <div className="max-w-[1600px] mx-auto py-[50px]">
        <div className=" flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px]  lg:px-[48px] ">
          <div className="flex  lg:w-[55%]">
            <div className="w-[100%]">
              <video
                src="https://impact-theme-home.myshopify.com/cdn/shop/videos/c/vp/0bde349cf44f45df98a65f58e50af845/0bde349cf44f45df98a65f58e50af845.HD-1080p-3.3Mbps.mp4?v=0"
                autoPlay
                muted
                loop
                className="w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]">
            <p className="font-[900]  pb-[50px]">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/icon-lightbulb.png?v=1653312427&width=64"
                alt=""
                width={32}
                height={32}
              />
            </p>
            <h2 className="text-[40px] font-[900] lg:text-[60px] leading-[1]">
              Our inspirations from the beginning
            </h2>
            <p className=" lg:text-left pt-[20px] max-w-[600px]">
              At HAY, everything we make draws from three primary sources of
              inspiration: art, architecture, and fashion. We have always paid
              close attention to and been inspired by our surroundings, and
              putting our finger on the pulse of contemporary culture is how we
              keep pace with the world around us.
            </p>
          </div>
        </div>
      </div>

      <Quote />

      <div className="max-w-[1600px] mx-auto py-[50px]">
        <div className=" flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px]  lg:px-[48px] ">
          <div className="flex  lg:w-[55%]">
            <div className="w-[45%]">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/about2.jpg?v=1659108534&width=1000"
                alt=""
                className="-rotate-3"
              />
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/about3.jpg?v=1659108549&width=1000"
                alt=""
                className="rotate-3 z-10"
              />
            </div>
            <div className="pt-[40px] w-[55%]">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/about1.jpg?v=1659108517&width=1000"
                alt=""
                className="rotate-3"
              />
            </div>
          </div>
          <div className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]">
            <p className="font-[900] ">Hay</p>
            <h2 className="text-[40px] font-[900] lg:text-[60px]">
              Our brand.
            </h2>
            <p className="text-center lg:text-left pt-[20px] max-w-[600px]">
              At HAY, everything we make draws from three primary sources of
              inspiration: art, architecture, and fashion. We have always paid
              close attention to and been inspired by our surroundings, and
              putting our finger on the pulse of contemporary culture is how we
              keep pace with the world around us.
            </p>
            <p className="text-center lg:text-left pt-[20px] max-w-[600px] italic">
              “What I admire about art is the unexpected, the originality;
              architecture is of course the context and the home of what we
              make, and fashion has a wonderful dynamism to it, reflecting the
              spirit of the time and what’s happening right now. I would say
              that the best products we have done, they may exist somewhere in
              between these three environments, drawing from a little bit of
              everything.” — Rolf Hay
            </p>
          </div>
        </div>
      </div>

      <FloatingTextSection text="Meet our designers" color="#BAB0D3" />
      <ShopifySection />
    </div>
  );
};

export default AboutPage;