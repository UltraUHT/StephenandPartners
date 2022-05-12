import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function About() {
  return (
    <div className="bg-black">
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
      <div className="text-white text-[14px] py-20 xl:py-[250px] px-4 md:px-20 flex justify-center relative">
        <div className="absolute hidden md:block bottom-[200px] xl:bottom-0 left-0 xl:-ml-[250px]">
          <div
            data-aos="fade"
            data-aos-duration="3000"
            className="md:w-[700px] md:h-[700px] xl:w-[1000px] xl:h-[1000px] relative"
          >
            <Image
              className="object-contain"
              src="/topology1.png"
              alt="background illustration"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="xl:max-w-[1080px] 2xl:max-w-[1280px]">
          <div className="xl:flex xl:gap-[100px] ">
            <h2
              data-aos="slide-down"
              data-aos-duration="2000"
              className="text-6xl xl:text-[80px] xl:w-[700px]  text-[#9c8665] pb-10"
            >
              ABOUT US
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="xl:mt-[50px] xl:w-[750px]"
            >
              We have a team that has experience in strategic human capital
              management, financial services and company establishment,
              acquisitions, mergers in industrial and trade companies, both
              domestic and multinational companies.
            </p>
          </div>
          <div className="pt-24">
            <div className="w-full xl:flex xl:justify-end">
              <div className="w-full h-[522px] relative md:w-[350px] overflow-hidden">
                <Image
                  data-aos="slide-down"
                  data-aos-duration="2000"
                  className="object-cover"
                  src="/crosswalk.png"
                  alt="about us illustration"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="xl:w-[600px] xl:-mt-[400px]"
            >
              <h3 className="py-10 text-[20px] opacity-40 tracking-[0.15em]">
                VISION
              </h3>
              <p>
                We have a team that has experience in strategic human capital
                management, financial services and company establishment,
                acquisitions, mergers in industrial and trade companies, both
                domestic and multinational companies.
              </p>
            </div>
          </div>

          <div className="pt-24 xl:pt-[400px]">
            <h2
              data-aos="slide-down"
              data-aos-duration="2000"
              className="text-6xl text-[#9c8665] pb-8"
            >
              THE TEAM
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="xl:w-[600px]"
            >
              Our highly caliber team are experienced practitioners from multi
              disciplines who prioritize professionalism and commited to help
              clients manage for their business success
            </p>
            <div className="pt-20 flex flex-col xl:flex-row gap-12">
              <div
                data-aos="fade"
                data-aos-duration="2500"
                className="flex flex-col gap-12 xl:w-[600px]"
              >
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    Stephen Rizky Priyanto, S.H., M.M., C.L.A.
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of corporate lawyers, legal
                    auditors, contract drafting and human resource management.
                  </p>
                  <div className="flex items-center">
                    <div className="w-[16px] h-[16px] relative">
                      <Image
                        className="object-contain"
                        src="/icons/linkedin.svg"
                        alt="arrow"
                        layout="fill"
                      ></Image>
                    </div>
                    <p className="underline cursor-pointer">LinkedIn</p>
                  </div>
                </div>
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    Fristia Harry D., S.Psi., Psikolog, CHRM
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of organizational development,
                    people development, psychological testing and assessment
                  </p>
                </div>
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    Jupita Nengseh Widjaja, M.Si.
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of limited liability company
                    establishment, mining and industrial licensing, arranging
                    foreign worker permits, arrangement of transfer of rights to
                    land and human resources management.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade"
                data-aos-duration="2000"
                className="hidden xl:flex bg-white opacity-20 w-[1px] height-full"
              />
              <div
                data-aos="fade"
                data-aos-duration="2000"
                className="flex flex-col gap-12 xl:w-[600px] xl:items-end"
              >
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">Budiono, S.H.</h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of human capital management
                    system and legal corporate.
                  </p>
                </div>
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    Drs. Aris Setiawan Al Ricky, S.H., C.L.A.
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of finance auditor and legal
                    auditor.
                  </p>
                </div>
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    J. Nugroho, S.H.
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of mining and industrial
                    licensing, environment licensing, and human resources
                    management.
                  </p>
                </div>
                <div className="xl:w-[360px]">
                  <h3 className="text-[28px] xl:text-[32px]">
                    Slamet, S.H., M.M.
                  </h3>
                  <p className="opacity-50 py-4">
                    Practitioners in the fields of people development, training
                    and coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
