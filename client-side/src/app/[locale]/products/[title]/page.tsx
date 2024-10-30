"use client";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import Accordion from "@/components/FAQ Accardion/accardion";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import { HeaderWhite } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import { ProductParams } from "@/types/paramsType";
import { Product } from "@/types/productCardTypes";
import { FC, useEffect, useState } from "react";

interface ProductDetailPageProps {
  params: ProductParams;
}

const ProductDetailPage: FC<ProductDetailPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(
        `http://localhost:3001/api/products/${params.title}`
      );
      if (res.ok) {
        const data = await res.json();
        setProduct(data.product);
      } else {
        console.error("Product not found");
      }
    }

    if (params.title) {
      fetchProduct();
    }
  }, [params.title]);

  if (!product) return <p>Loading...</p>;

  const firstColorVariant = product.colorVariants?.[0];
  const colorHex = firstColorVariant ? firstColorVariant.color : "#272727";

  return (
    <div>
      <HeaderWhite />
      <FloatingTextSection
        text="Good design is everyones right"
        color={colorHex}
      />
      <div className="py-[50px]">
        <div className=" h-[560px] lg:h-[1260px]  relative overflow-hidden">
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
            <div className="flex flex-col gap-[10px] items-center text-[#272727]">
              <span className="text-white font-[800] text-[16px]  leading-[1] text-center max-w-[700px]">
                About us
              </span>
              <h2 className="text-white font-[800] text-[40px] md:text-[68px] lg:text-[80px] leading-[1] text-center max-w-[700px]">
                We do high-quality products
              </h2>
              <button className="text-[18px] font-[700] mt-[10px] lg:py-[14px] py-[13px] px-[24px] lg:px-[32px] bg-white inline-block w-[160px] text-center ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <RichTextSection title="Meet the designers" />
      <div className="py-[100px]">
        <HomeDesignerGridSection />
      </div>

      <div className="bg-[#F2F2F2] py-[70px] lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-[50px] max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
          <div className="flex-1 flex flex-col ">
            <p className="font-[700] text-[#272727]">FAQ</p>
            <h2 className="mt-[12px] lg:my-[30px] md:text-[40px] lg:text-[52px] mb-[20px] text-[#272727] text-[34px] leading-[1] font-[800]">
              Have a question ? We are here to help.
            </h2>
            <div className="flex flex-col gap-[10px] ">
              <div className="w-[160px]">
                <img
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/team-fff.png?v=1660058616&width=320"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className=" text-[#272727] text-[14px] md:text-[16px]">
                Our customer support is available Monday to Friday: 8am-8:30pm.
              </p>
              <p className="text-[#272727B3] text-[14px] md:text-[16px]">
                Average answer time: 24h
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white">
            <Accordion
              title="How do you calculate your shipping and handling charges?"
              content="We’re dedicated to offering the best shipping methods available to ensure that your order reaches you quickly and safely. Shipping rates will vary, based on the specified delivery method, shipping address and total price of the merchandise in your cart."
            />
            <Accordion
              title="What if i recieved damaged or incorrect merchandise?"
              content="In the event that you receive defective, incorrect or incomplete merchandise, please contact us right away so we can make it right. For faster assistance with a return or exchange claim, please email us with your order number, contact information."
            />
            <Accordion
              title="What if my order is incomplete?"
              content="You're unable to add on further items to an order after purchase. If anything was missed, you'll need to contact us and we can cancel the order for you. You will then need to place a fresh order."
            />
            <Accordion
              isLast
              title="Any question?"
              content="You can contact us through our contact page. We will be happy to assist you."
            />
          </div>
        </div>
      </div>
      <ExploreCollectionsSections />
      <ShopifySection />
    </div>
  );
};

export default ProductDetailPage;
