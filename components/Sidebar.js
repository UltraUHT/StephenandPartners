import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isOpen, toggle, route }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 top-0 w-full h-full lg:hidden translate-y-0 duration-700 transform ease-out "
          : "translate-y-[-100%]"
      }
    >
      <div className="absolute  top-0 right-0 z-30 w-full bg-black h-full text-white overflow-hidden">
        <div className="flex pb-7 p-5 items-center justify-end px-8 md:px-24">
          <div className="cursor-pointer" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="absolute z-30 bottom-0 -mb-28 -ml-16 md:mb-10 ">
          <div className="w-[500px] h-[500px] relative md:w-[700px] md:h-[700px]">
            <Image
              className="object-contain"
              src="/topology1.png"
              alt="sidebar illustration"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="absolute w-full flex h-full justify-center items-center z-40">
          <ul
            className="px-5 pt-3 text-[36px] -mt-40 animate-fadeIn"
            onClick={toggle}
          >
            <li>
              <Link href="/" passHref>
                <a
                  className={`block py-3 px-5  ${
                    route === "/" ? "font-black" : " font-extralight"
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a
                  className={`block py-3 px-5 ${
                    route === "/about" ? "font-black" : " font-extralight"
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <a
                  className={`block py-3 px-5 ${
                    route === "/services" || route > "/services"
                      ? "font-black"
                      : " font-extralight"
                  }`}
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a
                  className={`block py-3 px-5 ${
                    route === "/contact" ? "font-black" : " font-extralight"
                  }`}
                >
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
