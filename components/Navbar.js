import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle, route }) => {
  return (
    <nav
      className="flex justify-center h-16 sticky top-0 z-30 px-4 md:px-20 2xl:px-0"
      role="navigation"
    >
      <div className="flex justify-between items-center w-full max-w-[1080px] 2xl:max-w-[1280px]">
        <div className="flex px-4 items-center text-white">
          <Link href="/" passHref>
            <Image
              className="object-contain cursor-pointer"
              src="/"
              alt="stephens and partner logo"
              width={50}
              height={40}
            />
          </Link>
        </div>

        <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="yarn lg:flex hidden space-x-10 items-center text-white xl:text-[18px] pt-4">
          <Link className="p-4" href="/" passHref>
            <a
              data-aos="fade-up"
              data-aos-duration="2000"
              className={`hover:opacity-100 opacity-40 flex flex-col items-center gap-2 ${
                route === "/" ? "font-bold opacity-100" : null
              }`}
            >
              Home
              <div
                className={`bg-white w-2 h-2 rounded-full ${
                  route === "/" ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          </Link>
          <Link className="p-4" href="/about" passHref>
            <a
              data-aos="fade-up"
              data-aos-duration="2200"
              className={`hover:opacity-100 opacity-40 flex flex-col items-center gap-2 ${
                route === "/about" ? "font-bold opacity-100" : null
              }`}
            >
              About
              <div
                className={`bg-white w-2 h-2 rounded-full ${
                  route === "/about" ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          </Link>
          <Link className="p-4" href="/services" passHref>
            <a
              data-aos="fade-up"
              data-aos-duration="2400"
              className={`hover:opacity-100 opacity-40 flex flex-col items-center gap-2 ${
                route === "/services" || route > "/services"
                  ? "font-bold opacity-100"
                  : null
              }`}
            >
              Services
              <div
                className={`bg-white w-2 h-2 rounded-full ${
                  route === "/services" || route > "/services"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </a>
          </Link>
          <Link className="p-4" href="/contact" passHref>
            <a
              data-aos="fade-up"
              data-aos-duration="2600"
              className={`hover:opacity-100 opacity-40 flex flex-col items-center gap-2 ${
                route === "/contact" ? "font-bold opacity-100" : null
              }`}
            >
              Contact us
              <div
                className={`bg-white w-2 h-2 rounded-full ${
                  route === "/contact" ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
