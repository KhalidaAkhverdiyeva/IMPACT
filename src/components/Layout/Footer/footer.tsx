import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-[#F2F2F2] py-[48px] flex justify-center mx-auto">
      <div className="px-[20px] md:px-[32px] lg:px-[48px] flex flex-col lg:gap-[64px] max-w-[1600px]">
        <div className=" flex flex-col lg:flex-row gap-[30px]">
          <div className="flex flex-col gap-[32px] lg:w-[45%]lg:mr-[30px] ">
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=300"
              alt="Logo"
              width={150}
              height={32}
            />
            <div className="flex flex-col gap-[24px]">
              <h4 className="leading-[1.1] text-[24px] md:text-[32px] lg:text-[36px] font-[800] text-[#272727]">
                {t("title")}
              </h4>
              <div className="flex justify-between border-[1px] border-solid border-[#E6E6E6] p-[14px]">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent placeholder:text-[16px] placeholder:text-[#797979] flex-grow outline-none"
                />
                <button 
                 aria-label="Submit"  
                 className="bg-[#DDDDDD] rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-[#cccccc] transition duration-300">
                  <LuChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] lg:w-3/4 lg:gap-[60px]">
            <ul className="text-[16px] flex flex-col gap-[12px]">
              <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">
                Shop
              </li>
              <li className="text-[#797979] hover:underline cursor-pointer">
                Office
              </li>
              <li className="text-[#797979] hover:underline cursor-pointer">
                Lighting
              </li>
              <li className="text-[#797979] hover:underline cursor-pointer">
                Kitchen
              </li>
              <li className="text-[#797979] hover:underline cursor-pointer">
                Decoration
              </li>
              <li className="text-[#797979] hover:underline cursor-pointer">
                Books
              </li>
            </ul>
            <ul className="text-[16px] flex flex-col gap-[12px]">
              <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">
                Designers
              </li>
              <Link 
              aria-label="George Sowden"
              href="george-sowden">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  George Sowden
                </li>
              </Link>
              <Link  
              aria-label="Clara von Zweigbergk"
              href="clara-von-zweigbergk">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  Clara von Zweigbergk
                </li>
              </Link>
              <Link 
              aria-label="Pierre Charpin" 
              href="pierre-charpin">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  Pierre Charpin
                </li>
              </Link>
              <Link 
              aria-label="Thomas Bentzen"
              href="thomas-bentzen">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  Thomas Bentzen
                </li>
              </Link>
              <Link 
              aria-label="View all designers"
              href="/designers">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  View all
                </li>
              </Link>
            </ul>
            <ul className="text-[16px] flex flex-col gap-[12px]">
              <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">
                Impact
              </li>
              <Link 
              aria-label="About"
              href="/about">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  About
                </li>
              </Link>
              <Link 
              aria-label="FAQ"
              href="/faq">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  FAQ
                </li>
              </Link>
              <Link 
              aria-label="Contact"
              href="/contact">
                <li className="text-[#797979] hover:underline cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <h4 className="font-[800] text-[18px] text-[#272727] mb-[4px]">
              About
            </h4>
            <p className="text-[#797979] text-[16px]">
              Thanks to <span className="underline">Article London</span> for
              allowing us to use their products in this demo store and HAY for
              the photography.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] py-[40px] lg:py-[0px]">
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <div className="flex items-center gap-[10px]">
              <FaFacebookF size={26} />
              <FaInstagram size={26} />
            </div>

            <div>United States (USD $)</div>
          </div>
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <p className="text-[14px]">
              © 2024, Impact Theme Home.Powered by Shopify
            </p>
            <ul className="flex gap-[9px]">
              <li>
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-master"
                >
                  <title id="pi-master">Mastercard</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-american_express"
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                >
                  <title id="pi-american_express">American Express</title>
                  <path
                    fill="#000"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="24"
                  role="img"
                  aria-labelledby="pi-paypal"
                >
                  <title id="pi-paypal">PayPal</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    fill="#003087"
                    d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                  ></path>
                  <path
                    fill="#3086C8"
                    d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                  ></path>
                  <path
                    fill="#012169"
                    d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-diners_club"
                >
                  <title id="pi-diners_club">Diners Club</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                    fill="#3086C8"
                  ></path>
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 38 24"
                  width="38"
                  height="24"
                  role="img"
                  aria-labelledby="pi-discover"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="pi-discover">Discover</title>
                  <path
                    fill="#000"
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint0_linear)"
                  ></path>
                  <path
                    opacity=".65"
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint1_linear)"
                  ></path>
                  <path
                    d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                    fill="#F48120"
                  ></path>
                  <defs>
                    <linearGradient
                      id="pi-paint0_linear"
                      x1="21.657"
                      y1="12.275"
                      x2="19.632"
                      y2="9.104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F89F20"></stop>
                      <stop offset=".25" stopColor="#F79A20"></stop>
                      <stop offset=".533" stopColor="#F68D20"></stop>
                      <stop offset=".62" stopColor="#F58720"></stop>
                      <stop offset=".723" stopColor="#F48120"></stop>
                      <stop offset="1" stopColor="#F37521"></stop>
                    </linearGradient>
                    <linearGradient
                      id="pi-paint1_linear"
                      x1="21.338"
                      y1="12.232"
                      x2="18.378"
                      y2="6.446"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F58720"></stop>
                      <stop offset=".359" stopColor="#E16F27"></stop>
                      <stop offset=".703" stopColor="#D4602C"></stop>
                      <stop offset=".982" stopColor="#D05B2E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
