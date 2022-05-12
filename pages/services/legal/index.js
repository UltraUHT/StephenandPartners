import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";

export default function Legal() {
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
      <div className="px-4 md:px-20 py-20 relative flex justify-center animate-fadeIn">
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
              Legal Services
            </h2>
            <div className="border-b-2 border-white opacity-20" />
            <div className="py-10 flex flex-col gap-10">
              <div id="litigation" className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Litigation</h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Civil and Criminal Litigations</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Dispute between company and labor/union labor
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Suspension of debt payment obligation
                    </p>
                  </li>
                </ul>
              </div>
              <div
                id="contract-draft-verification-creation"
                className="xl:flex w-full"
              >
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Contract Draft Verification & Creation
                </h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">
                      Client, vendor, rent agreement drafting
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Other agreements needed by the company
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Business partner agreement</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Verification of exclusive contract
                    </p>
                  </li>
                </ul>
              </div>
              <div id="legal-compliance-advisory" className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Legal Compliance Advisory
                </h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">Compliance policy making</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Provide consultation to fulfill compliance with government
                      regulations
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">License and Permit</p>
                  </li>
                </ul>
              </div>
              <div id="legal-audit" className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Legal Audit</h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 pt-4 pb-2">
                      Financial & Tax Corporation
                    </p>
                    <p className="px-4 opacity-40 pb-4">
                      CNC, CBNC, NCBC, NCNC
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>

                  <li>
                    <p className="px-4 py-4">Industrial Relation</p>
                  </li>
                </ul>
              </div>
              <div id="assistance" className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Assistance in Any Branch of Law
                </h3>
                <ul className="text-[14px] xl:w-1/2">
                  <li>
                    <p className="px-4 py-4">
                      Company establishment, merger, acquisitions
                    </p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">Corporate law</p>
                    <div className="border-b-[1px] border-white border-opacity-40" />
                  </li>
                  <li>
                    <p className="px-4 py-4">
                      Legal opinion, due diligence/IPO
                    </p>
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
