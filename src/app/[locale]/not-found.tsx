import { Header } from "@/components/Layout/Header/header";

const NotFound = () => {
  return (
    <div>
      <Header transparent={false} />
      <div className="flex justify-center max-w-[1600px] mx-auto">
        <div className=" relative">
          <div className=" text-[210px] lg:text-[400px] font-[800] text-[#E9E9E9] relative">
            404
          </div>
          <div 
          className="absolute top-[30%] lg:top-[40%] left-[35%] lg:left-[37%] text-[#272727]  text-[22px] lg:text-[36px] font-[800]">
            Page not found
          </div>
          <button
            aria-label="Continue Shopping"
           className="bg-[#272727] absolute top-[40%] lg:top-[50%] left-[30%] lg:left-[40%] mt-[15px] py-[16px] px-[32px] font-[600] border-[2px] border-[#272727] bordeer-solid hover:bg-transparent hover:text-[#272727]  text-white">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
