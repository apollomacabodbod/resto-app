import { useEffect, useState } from "react";
import logo from "src/assets/header/logo.svg";
import { Link } from "react-router-dom";
import telephone from "src/assets/header/telephone.svg";
import humberger from "src/assets/header/humberger.svg";
import Sidebar from "./side-bar";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40 ${
          scrolling
            ? "backdrop-blur-lg bg-[#28252E]/40 shadow-lg"
            : "bg-transparent backdrop-blur-none shadow-none"
        }`}
      >
        <div className="flex flex-col  max-w-[1200px] lg:mx-auto  px-[1.25em]">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer ">
              <Link
                to={"/"}
                className="flex flex-col bg-[#BB3A12] py-[1.0625em] px-[1.375em]"
              >
                <img src={logo} alt="" className="min-w-[7.5em]" />
              </Link>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center  lg:gap-[1.7em] xl:gap-[2em]">
                <Link
                  to={"/"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  HOME
                </Link>
                <Link
                  to={"/reservation"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  RESERVATION
                </Link>
                <Link
                  to={"/menu"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {""}
                  MENU
                </Link>
                <Link
                  to={"/blog"}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  BLOG
                </Link>
                <Link
                  to={""}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  SHOP
                </Link>
                <Link
                  to={""}
                  className="text-white font-inter text-[0.875rem] not-italic font-bold "
                >
                  {" "}
                  CONTACT
                </Link>
              </div>
            </div>

            <div className="lg:flex lg:flex-col hidden">
              <div className="flex items-center gap-[1em] ">
                <div className="flex items-center gap-[0.5em] cursor-pointer   hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">
                  <img src={telephone} alt="" />

                  <p className="text-[#E4C620] font-inter text-[1rem] not-italic font-bold ">
                    (021) 345 678
                  </p>
                </div>

                <p className="cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out text-white py-[0.5em] px-[1.5em] border border-white rounded-[3.125em] text-center font-inter text-[1rem] font-bold not-italic">
                  Book a Table
                </p>
              </div>
            </div>

            <div
              className="flex flex-col lg:hidden cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img
                src={humberger}
                alt=""
                width={23}
                height={0}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
}
