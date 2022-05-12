import Link from "next/link";
import React from "react";

function Services() {
  const [services, setServices] = React.useState("1");
  return (
    <div className="px-4 2xl:px-0 md:px-20 py-[70px] xl:py-[300px] text-[14px] flex justify-center">
      <div className="max-w-[1080px] 2xl:max-w-[1280px] xl:flex w-full">
        <div data-aos="fade-down" data-aos-duration="2000">
          <h2 className="text-[#9C8665] text-6xl pb-10 md:max-w-[360px] xl:text-[80px]">
            OUR SERVICES
          </h2>
          <button className="bg-[#9C8665] hover:bg-white py-[12px] px-[40px] xl:text-[18px] flex items-center justify-center text-white hover:text-[#9C8665] rounded-sm">
            <Link href="/services" passHref>
              <a>GO TO SERVICES</a>
            </Link>
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="pt-16 xl:pt-0 xl:px-[100px] xl:w-full"
        >
          <div className="flex justify-between xl:justify-start xl:gap-[50px] text-center text-white pb-12 tracking-widest xl:tracking-[0.2em] cursor-pointer">
            <div
              className="flex flex-col justify-center items-center gap-3 "
              onClick={() => {
                setServices("1");
              }}
            >
              <p
                className={`px-4 xl:text-[20px] ${
                  services === "1" ? "text-[#9c8665]" : "opacity-40"
                }`}
              >
                LEGAL
              </p>
              <div
                className={`w-full h-1 ${
                  services === "1" ? "bg-[#9c8665]" : "bg-black"
                }`}
              ></div>
            </div>
            <div
              className="flex flex-col justify-center items-center gap-3"
              onClick={() => {
                setServices("2");
              }}
            >
              <p
                className={`px-2 xl:text-[20px] ${
                  services === "2" ? "text-[#9c8665]" : "opacity-40"
                }`}
              >
                HUMAN CAPITAL
              </p>
              <div
                className={`w-full h-1 ${
                  services === "2" ? "bg-[#9c8665]" : "bg-black"
                }`}
              ></div>
            </div>
            <div
              className="flex flex-col justify-center items-center gap-3"
              onClick={() => {
                setServices("3");
              }}
            >
              <p
                className={`px-3 xl:text-[20px] ${
                  services === "3" ? "text-[#9c8665]" : "opacity-40"
                }`}
              >
                FINANCES
              </p>
              <div
                className={`w-full h-1 ${
                  services === "3" ? "bg-[#9c8665]" : "bg-black"
                }`}
              ></div>
            </div>
          </div>
          <div className="text-white pb-[400px] xl:text-[18px]">
            {/* legal */}
            <div
              className={`w-full h-1 cursor-pointer ${
                services === "1" ? "flex flex-col" : "hidden"
              }`}
            >
              <Link
                href="services/legal#contract-draft-verification-creation"
                passHref
              >
                <div className="px-2 py-4 border-b-2 border-[#434343]">
                  <p>Contract draft verification and creation</p>
                </div>
              </Link>
              <Link href="services/legal#legal-compliance-advisory" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Legal compliance advisory</p>
                </div>
              </Link>
              <Link href="services/legal#litigation" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Litigation</p>
                </div>
              </Link>
              <Link href="services/legal#assistance" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Assistance in any branch of law</p>
                </div>
              </Link>
              <Link href="services/legal#legal-audit" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Legal Audit</p>
                </div>
              </Link>
            </div>
            {/* human cap */}
            <div
              className={`w-full h-1 cursor-pointer ${
                services === "2" ? "show" : "hidden"
              }`}
            >
              <Link href="services/human-capital#executive-search" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Executive Search</p>
                </div>
              </Link>
              <Link href="services/human-capital#reward-management" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Reward Management</p>
                </div>
              </Link>
              <Link
                href="services/human-capital#organization-development"
                passHref
              >
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Organization Development</p>
                </div>
              </Link>
              <Link href="services/human-capital#talent-management" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Talent Management</p>
                </div>
              </Link>
              <Link href="services/human-capital#talent-assessment" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Talent Assessment</p>
                </div>
              </Link>
              <Link
                href="services/human-capital#performance-management"
                passHref
              >
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Performance Management</p>
                </div>
              </Link>
              <Link
                href="services/human-capital#developing-competency-system"
                passHref
              >
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Developing Competency System</p>
                </div>
              </Link>
            </div>
            {/* finances */}
            <div
              className={`w-full h-1 cursor-pointer ${
                services === "3" ? "show" : "hidden"
              }`}
            >
              <Link href="services/finances#procedure-creation" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Procedure creation</p>
                </div>
              </Link>
              <Link href="services/finances#internal-control" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Internal control</p>
                </div>
              </Link>
              <Link href="services/finances#audit" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Audit</p>
                </div>
              </Link>
              <Link href="services/finances#business-process-mapping" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Business process mapping</p>
                </div>
              </Link>
              <Link href="services/finances#risk-management" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Risk Management</p>
                </div>
              </Link>
              <Link href="services/finances" passHref>
                <div className="px-2 py-4 border-b-2 border-[#434343] ">
                  <p>Tax</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
