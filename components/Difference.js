import React from "react";
import Image from "next/image";
import Link from "next/link";

function Difference() {
  return (
    <div className="px-4 2xl:px-0 md:px-20 py-[70px] -mt-[80px] xl:-mt-[90px] bg-[#282626] text-[14px] flex items-center justify-center">
      <div className="max-w-[1080px] 2xl:max-w-[1280px] w-full ">
        <h2
          data-aos="fade-down"
          data-aos-duration="2000"
          className="text-[#9C8665] pb-10 text-4xl md:text-6xl md:max-w-[420px]"
        >
          WHAT MAKES US DIFFERENT
        </h2>
        <div className="xl:flex">
          <div className="w-full h-[387px] md:w-[387px] relative xl:h-[500px] xl:w-[450px] xl:-mb-[200px]">
            <Image
              data-aos="fade-down"
              data-aos-duration="2000"
              className="object-cover"
              src="/hand-lamp.png"
              alt="what makes us different illustration"
              layout="fill"
            ></Image>
          </div>
          <div
            data-aos="fade"
            data-aos-duration="2200"
            className=" xl:px-[80px]"
          >
            <p className="text-[#F2F2F2] py-10 md:max-w-[420px] xl:max-w-[600px] xl:text-[18px] xl:-mt-[50px]">
              Our team are experienced practitioners from multi disciplines who
              prioritize professionalism and committed to help clients manage
              their business with good management and to provide right solutions
              with right way.
            </p>
            <button className="bg-[#9C8665] hover:bg-white py-[12px] px-[40px] xl:text-[18px] flex items-center justify-center text-white hover:text-[#9C8665] tracking-[0.125rem] rounded-sm">
              <Link href="/about" passHref>
                <a>ABOUT US</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Difference;
