"use client";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import SearchOverlay from "./SearchOverlay";

type NavBarProp = {
  name: string;
  isLogedIn: boolean;
};

const NavBar = ({ name, isLogedIn }: NavBarProp) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {}, []);

  const handleSignOut = async () => {
    const res = await fetch(`/api/auth/sign-out/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      alert("با موفقیت خارج شدید!");
      router.refresh();
    }
  };

  return (
    <>
      <nav className="w-full h-10 bg-pink-100 text-black hidden md:flex justify-between items-center  px-5 lg:px-20 text-sm ">
        <div className="flex items-center gap-x-5 ">
          <NavLink customClassName={"flex items-center gap-x-1 "} href="/">
            <FaHome />
            <span> صفحه اصلی</span>
          </NavLink>

          <NavLink
            customClassName="md:flex items-center gap-x-1 hidden"
            href="/products"
          >
            <FaShop />
            <span>فروشگاه</span>
          </NavLink>
          <NavLink
            customClassName="md:flex items-center gap-x-1 hidden "
            href="/blog"
          >
            <FaBlog />
            <span>وبلاگ</span>
          </NavLink>
          <NavLink
            customClassName="md:flex items-center gap-x-1 hidden"
            href="/about-us"
          >
            <FaUser />
            <span>درباره ما</span>
          </NavLink>
          <NavLink
            customClassName="md:flex items-center gap-x-1 hidden"
            href="/contact-us"
          >
            <FaHeadphones />
            <span>تماس با ما</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="hidden md:block">
            <SearchOverlay />
          </div>
          <NavLink href={"/cart"} customClassName="relative hidden md:block">
            <FaBasketShopping className="md:text-[18px]" />
          </NavLink>
          {isLogedIn ? (
            <button
              type="button"
              className=" items-center gap-x-1 mr-3 hidden md:flex bg-rose-600 px-2 py-1 rounded text-white"
              onClick={handleSignOut}
            >
              <FaRegUser className="md:text-[18px]" />
              <span>خروج</span>
            </button>
          ) : (
            <div>
              <NavLink
              href="/sign"
              customClassName=" items-center gap-x-1 mr-3 hidden md:flex"
            >
              <FaRegUser className="md:text-[18px]" />
              <span>ورود/ثبت نام</span>
            </NavLink>
            </div>
          )}
        </div>
        <div
          className={`text-2xl md:hidden ${showNavbar ? "text-rose-500" : ""}`}
          onClick={() => handleShowNavbar()}
        >
          <BiMenuAltLeft />
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="flex md:hidden w-full h-10 bg-slate-800 text-white  justify-between items-center  px-5 lg:px-20 text-sm ">
        <NavLink customClassName={"flex items-center gap-x-1 "} href="/">
          <FaHome />
          <span> صفحه اصلی</span>
        </NavLink>

        <div className="flex gap-x-2 items-center">
          <SearchOverlay />

          <div
            className={`text-2xl md:hidden ${
              showNavbar ? "text-rose-500" : ""
            }`}
            onClick={() => handleShowNavbar()}
          >
            <BiMenuAltLeft />
          </div>
        </div>
      </nav>

      {/* //mobile menu */}
      {showNavbar && (
        <div
          onClick={() => setShowNavbar(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        />
      )}

      <nav
        className={`h-full fixed bottom-0 top-0 bg-pink-100 rounded-sm shadow w-2/3 sm:w-1/2 z-50 md:hidden p-4 transition-all ease-in-out delay-200 ${
          showNavbar ? "translate-x-0" : "translate-x-[500px] "
        }  `}
      >
        <div onClick={() => setShowNavbar(false)}>
          <NavLink href={"/"} customClassName="flex items-center gap-x-1  mb-5">
            <FaHome />
            <span> صفحه اصلی</span>
          </NavLink>
        </div>

        <div onClick={() => setShowNavbar(false)}>
          <NavLink
            href={"/products"}
            customClassName="flex items-center gap-x-1 mb-5 "
          >
            <FaShop />
            <span>فروشگاه</span>
          </NavLink>
        </div>

        <div onClick={() => setShowNavbar(false)}>
          <NavLink
            href={"/blog"}
            customClassName="flex  items-center gap-x-1 mb-5 "
          >
            <FaBlog />
            <span>وبلاگ</span>
          </NavLink>
        </div>

        <div onClick={() => setShowNavbar(false)}>
          <NavLink
            href={"/about-us"}
            customClassName="flex items-center gap-x-1 mb-5 "
          >
            <FaUser />
            <span>درباره ما</span>
          </NavLink>
        </div>

        <div onClick={() => setShowNavbar(false)}>
          <NavLink
            href={"/contact-us"}
            customClassName="flex  items-center gap-x-1 mb-5 "
          >
            <FaHeadphones />
            <span>تماس با ما</span>
          </NavLink>
        </div>

        <div onClick={() => setShowNavbar(false)}>
          <NavLink
            href={"/cart"}
            customClassName="flex  items-center gap-x-1 mb-5 "
          >
            <div className="relative">
              <FaBasketShopping className="md:text-[18px]" />
            </div>
            <span>سبد خرید</span>
          </NavLink>
        </div>

        <div className="flex items-center gap-x-1 mb-5">
          {/* <FaRegUser className="md:text-[18px]" /> */}

          {/* {isLogedIn ? <span>خروج</span> : <span>ورود/ثبت نام</span>} */}

          {isLogedIn ? (
            <button
              type="button"
              className=" flex items-center gap-x-1  bg-rose-600 px-2 py-1 rounded text-white w-[100px]"
              onClick={handleSignOut}
            >
              <FaRegUser className="md:text-[18px]" />
              <span>خروج</span>
            </button>
          ) : (
            <div  onClick={() => setShowNavbar(false)}>
              <NavLink href="/sign" customClassName="flex items-center gap-x-1">
                <FaRegUser className="md:text-[18px]" />
                <span>ورود/ثبت نام</span>
              </NavLink>
            </div>
          )}
        </div>

        <div
          className="flex items-center gap-x-1 w-[100px]  bg-sky-800 px-2 py-1 rounded text-white "
          onClick={() => setShowNavbar(false)}
        >
          <IoCloseCircleOutline />
          <button className="">بستن منو</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
