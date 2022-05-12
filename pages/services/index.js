import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Services() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Stephen and Partners</title>
        <meta name="description" content="Stephen and Partners" />
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
      <div className="flex justify-center">
        <div className="w-full max-w-[1080px] 2xl:max-w-[1280px]">
          <div className="px-4 py-20 md:px-20 flex justify-center">
            <div className="max-w-[1080px] 2xl:max-w-[1280px] w-full xl:flex xl:gap-[200px]">
              <h2
                data-aos="slide-down"
                data-aos-duration="2000"
                className="text-6xl text-[#9c8665] xl:text-[80px]"
              >
                SERVICES
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-[14px] py-10 xl:text-[16px] xl:mt-[20px]"
              >
                We provide extensive services equip by excellent skill and
                leadership to ensure we deliver an exceptional value in driving
                our client’s succeed.
              </p>
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-3 w-full xl:pb-[200px]">
            <Link href="/services/human-capital" passHref>
              <div className="relative cursor-pointer group ">
                <div className="w-full h-[700px] relative">
                  <Image
                    className="object-cover"
                    src="/human.png"
                    alt="human capital illustration"
                    layout="fill"
                  ></Image>
                  <div className="bg-black opacity-50 w-full h-full" />
                  <div className="absolute bottom-20 px-4 md:px-20 flex flex-col gap-6">
                    <h3 className="text-[#9c8665] text-4xl">01</h3>
                    <h2 className="text-5xl leading-tight">HUMAN CAPITAL</h2>
                    <div className="w-[100px] h-10 relative hidden group-hover:flex">
                      <Image
                        className="object-contain"
                        src="/icons/right.svg"
                        alt="right arrow"
                        layout="fill"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services/legal" passHref>
              <div className="relative cursor-pointer group">
                <div className="w-full h-[700px] relative">
                  <Image
                    className="object-cover"
                    src="/legal.png"
                    alt="legal illustration"
                    layout="fill"
                  ></Image>
                  <div className="bg-black opacity-50 w-full h-full" />
                  <div className="absolute bottom-20 px-4 md:px-20 flex flex-col gap-6">
                    <h3 className="text-[#9c8665] text-4xl">02</h3>
                    <h2 className="text-5xl leading-tight">LEGAL</h2>
                    <div className="w-[100px] h-10 relative hidden group-hover:flex">
                      <Image
                        className="object-contain"
                        src="/icons/right.svg"
                        alt="right arrow"
                        layout="fill"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services/finances" passHref>
              <div className="relative cursor-pointer group">
                <div className="w-full h-[700px] relative">
                  <Image
                    className="object-cover"
                    src="/finances.png"
                    alt="finances illustration"
                    layout="fill"
                  ></Image>
                  <div className="bg-black opacity-50 w-full h-full" />
                  <div className="absolute bottom-20 px-4 md:px-20 flex flex-col gap-6">
                    <h3 className="text-[#9c8665] text-4xl">03</h3>
                    <h2 className="text-5xl leading-tight">FINANCES</h2>
                    <div className="w-[100px] h-10 relative hidden group-hover:flex">
                      <Image
                        className="object-contain"
                        src="/icons/right.svg"
                        alt="right arrow"
                        layout="fill"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
