import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="px-4 2xl:px-0 md:px-20 bg-[#282626] py-[70px] text-white flex justify-center">
      <div
        data-aos="fade"
        data-aos-duration="2000"
        className="max-w-[1080px] 2xl:max-w-[1280px] w-full"
      >
        <p className="pb-10 tracking-[0.2rem] text-[14px] xl:text-[18px] font-bold">
          STAY CONNECTED
        </p>
        <div className="md:flex md:justify-between">
          <div>
            <div>
              <p className="text-[12px] xl:text-[16px] opacity-50 tracking-[0.15rem]">
                WHATSAPP
              </p>
              <p className=" xl:text-[18px]">
                <a
                  href="https://wa.me/081331563244"
                  noref="true"
                  target="_blank"
                >
                  +62 813 3156 3244
                </a>
              </p>
            </div>
            <div className="py-5">
              <p className="text-[12px] opacity-50 tracking-[0.15rem] xl:text-[16px]">
                EMAIL
              </p>
              <p className=" xl:text-[18px]">
                <a
                  href="mailto:stephen20@yehezkialaw.com"
                  noref="true"
                  target="_blank"
                >
                  stephen20@yehezkialaw.com
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[16px] h-[16px] relative">
                <Image
                  className="object-contain"
                  src="/icons/linkedin.svg"
                  alt="arrow"
                  layout="fill"
                ></Image>
              </div>
              <p className="underline  xl:text-[18px]">LinkedIn</p>
            </div>
          </div>
          <div className="pt-20 md:pt-0 flex flex-col md:gap-[8px] xl:text-[18px]">
            <p>RUKO 21 KLAMPIS BLOK H-5,</p>
            <p> Jl. Arif Rahman Hakim No. 51, Surabaya</p>
            <p>+6231 595 2123 / +62 811 300 440</p>
          </div>
        </div>
        <p className="text-[12px] opacity-50 pt-12">
          Copyright Stephen & Partners
        </p>
      </div>
    </div>
  );
}

export default Footer;
