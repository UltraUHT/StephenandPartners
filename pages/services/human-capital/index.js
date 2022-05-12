import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";

export default function HumanCapital() {
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
              Human Capital
            </h2>
            <div className="border-b-2 border-white opacity-20" />
            <div className="py-10 flex flex-col gap-10" id="executive-search">
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Executive Search</h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  {` We provide great quality and growth of executive search
                  services by attracting the high caliber candidate that fulfill
                  client organization’s needs. Supported by seasoned
                  professionals with strong expertise in recruitment. We take
                  time to make thorough candidate evaluation to ensure their
                  suitability to our client’s company culture, values, and
                  vision.`}
                </p>
              </div>
            </div>
            <div className="py-10 flex flex-col gap-10" id="reward-management">
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Reward Management</h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  We believe that the key to business success is to ensure that
                  employees are correctly motivated, rewarded and clearly aware
                  of their contribution and the part it plays in business
                  strategy. We help our clients to define a comprehensive tools
                  to measure people performance and reward systems that drive
                  organizational and individual performance.
                </p>
              </div>
            </div>
            <div
              className="py-10 flex flex-col gap-10"
              id="organization-development-program"
            >
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Organization Development Program
                </h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  {`We believe that talent development will enables continuous
                  performance improvement, increases employee engagement, and
                  improves retention. Better performance over longer periods of
                  time. We provide high quality development programs customized
                  to client's needs to boost the individual development and
                  organization capability.`}
                </p>
              </div>
            </div>
            <div className="py-10 flex flex-col gap-10" id="talent-management">
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Talent Management</h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  {` We believe that One of the keys to the success of a company to
                  survive and thrive in a competitive business situation today
                  and in the future, is the ability to identify, retain and
                  develop its best talents to be able to occupy key and
                  strategic positions and support the achievement of the
                  company's goals, mission and vision.`}
                </p>
              </div>
            </div>
            <div className="py-10 flex flex-col gap-10" id="talent-assessment">
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">Talent Assessment</h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  We believe that One of the characteristics of a leading
                  company is to have a quality and effective recruitment and
                  selection system. Recruitment and selection is a strategic
                  function because in fact it is the first step that determines
                  the right man power between the position and its competence.
                </p>
              </div>
            </div>
            <div
              className="py-10 flex flex-col gap-10"
              id="performance-management"
            >
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Performance Management
                </h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  {`We believe that if Performance Management is managed properly,
                  consistently, effectively and efficiently, the organization's
                  achievement will be on target and with maximum results.`}
                </p>
              </div>
            </div>
            <div
              className="py-10 flex flex-col gap-10"
              id="developing-competency-system"
            >
              <div className="xl:flex w-full">
                <h3 className="pb-4 text-[24px] xl:w-1/2">
                  Developing Competency System
                </h3>
                <p className="text-[14px] leading-relaxed xl:w-1/2">
                  We believe that In a climate of intense business competition,
                  the competence of employees is one of the main determinants of
                  company excellence. Employee competency development cannot be
                  created instantly, but must be built in a planned,
                  comprehensive and sustainable manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
