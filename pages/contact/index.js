import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Stephen and Partners</title>
        <meta name="description" content=" Stephen and Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="absolute top-0 w-full overflow-hidden hidden xl:flex justify-end">
        <div
          data-aos="slide-left"
          data-aos-duration="2000"
          className="border-2 border-[#9C8665] h-[500px] w-[500px] rounded-full -mt-[200px] -mr-[150px] "
        />
      </div>
      <div className="px-4 md:px-20 py-20 flex justify-center flex-grow animate-fadeIn">
        <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] xl:flex xl:gap-[100px] xl:justify-center xl:py-[150px]">
          <div className="w-full h-[522px] md:w-[350px] relative">
            <Image
              className="object-cover"
              src="/contact.png"
              alt="contact us illustration"
              layout="fill"
            ></Image>
          </div>
          <div>
            <h2 className="text-5xl text-[#9c8665] py-10 xl:text-[80px]">
              CONTACT US
            </h2>
            <div className="pt-5 xl:text-[18px]">
              <p className="text-[12px] xl:text-[16px] opacity-50 tracking-[0.15rem]">
                WHATSAPP
              </p>
              <p>
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
              <p className="text-[12px] xl:text-[16px] opacity-50 tracking-[0.15rem]">
                EMAIL
              </p>
              <p>
                <a
                  href="mailto:stephen20@yehezkialaw.com"
                  noref="true"
                  target="_blank"
                >
                  stephen20@yehezkialaw.com
                </a>
              </p>
            </div>
            <div className="py-5 text-[12px] xl:text-[16px] flex flex-col xl:gap-[8px]">
              <p>RUKO 21 KLAMPIS BLOK H-5,</p>
              <p> Jl. Arif Rahman Hakim No. 51, Surabaya</p>
              <p>+62 315 952 123 / +62 811 300 440</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
