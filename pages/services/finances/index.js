import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";

export default function Finances() {
  return (
    <div className="bg-black text-white">
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
      <div className="px-4 md:px-20 py-20 flex justify-center relative animate-fadeIn">
        <div className="absolute hidden md:block bottom-[200px] xl:bottom-0 left-0 xl:-ml-[250px]">
          <div className="md:w-[700px] md:h-[700px] xl:w-[1000px] xl:h-[1000px] relative">
            <Image
              className="object-contain"
              src="/topology1.png"
              alt="background illustration"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="w-full max-w-[1080px] 2xl:max-w-[1280px]">
          <Link href="/services" passHref>
            <div className="flex gap-3 items-center cursor-pointer">
              <div className="w-[24px] h-[24px] relative">
                <Image
                  className="object-cover"
                  src="/icons/left.svg"
                  alt="contact us illustration"
                  layout="fill"
                ></Image>
              </div>
              <p className="text-[24px]">Back</p>
            </div>
          </Link>
          <div>
            <h2 className="font-bold text-4xl py-10 font-inter">
              Finance Services
            </h2>
            <div className="border-b-2 border-white opacity-20" />
            <div className="py-10 flex flex-col gap-10">
              <div id="business-process-mapping" className="xl:flex xl:w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Business Process Mapping
                </h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Functional process mapping</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Determine required process</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Process code</p>
                  </li>
                </ul>
              </div>
              <div id="procedure-creation" className="xl:flex xl:w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Procedure Creation
                </h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Flow chart creation</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Procedure template</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Step by step creation</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Storage and access</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Review</p>
                  </li>
                </ul>
              </div>
              <div id="internal-control" className="xl:flex xl:w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Internal Control</h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Internal control system</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Determine required control</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Control assessment</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Control creation</p>
                  </li>
                </ul>
              </div>
              <div id="audit" className="xl:flex xl:w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Audit</h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Audit matrix</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Audit planning</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Audit engagement</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>

                  <li>
                    <p className="px-4 py-4">Recommendation and action plan</p>
                  </li>
                </ul>
              </div>
              <div id="risk-management" className="xl:flex xl:w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Risk Management</h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Pestel - SWOT analysis</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Risk register</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Impact and likelihood matrix</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Action plan and due date</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
