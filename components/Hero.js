import React, { useEffect } from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="h-screen w-screen relative -mt-16">
      <div className="w-full h-full">
        <Image
          data-aos="slide-down"
          data-aos-duration="2000"
          className="z-0 object-cover cursor-pointer"
          src="/hero.png"
          alt="charcoal bricket product image"
          layout="fill"
        ></Image>
        <div className="absolute bg-black bg-opacity-40 w-full h-full" />
      </div>
      <div
        data-aos="fade"
        data-aos-duration="2000"
        className="absolute top-0 h-screen w-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-6xl xl:text-[80px] pt-10">
          STEPHEN & PARTNERS
        </h1>
        <h3 className="text-white pt-5 pb-8 xl:text-[18px]">
          A partner you can count on your business journey.
        </h3>
        <div className="w-10 h-20 xl:h-[110px] xl:w-[60px] xl:mt-20 relative">
          <Image
            className="object-contain"
            src="/icons/arrow.svg"
            alt="down arrow"
            layout="fill"
          ></Image>
        </div>
      </div>
      <div className="absolute top-0 w-full flex justify-end overflow-hidden">
        <div
          data-aos="slide-left"
          data-aos-duration="2000"
          className="border-2 border-[#9C8665] h-[236px] w-[236px] xl:h-[500px] xl:w-[500px] rounded-full -mt-20 -mr-14 md:mt-14 xl:-mt-[200px] xl:-mr-[150px] "
        />
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div
          data-aos="slide-right"
          data-aos-duration="2000"
          className="border-2 border-[#9C8665] h-[236px] w-[236px] xl:w-[500px] xl:h-[500px] rounded-full -mb-20 -ml-24 md:mb-10 xl:-ml-[150px]"
        />
      </div>
    </div>
  );
}

export default Hero;
