"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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


type NavBarProp={
  name:string
  isLogedIn:boolean
}

const NavBar = ({ name, isLogedIn }: NavBarProp) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const router=useRouter()

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  useEffect(()=>{},[])

  const handleSignOut=async()=>{
    const res = await fetch(`/api/auth/sign-out/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    if(res.status===200){
      alert('با موفقیت خارج شدید!')
      router.refresh()
    }

  }

  

  return (
    <>
      <nav className="w-full h-10 bg-pink-100 flex justify-between items-center  px-5 lg:px-20 text-sm ">
        <div className="flex items-center gap-x-5 ">
          <Link  className="flex items-center gap-x-1 text-rose-500" href="/">
            <FaHome />
            <span> صفحه اصلی</span>
          </Link>
          <Link className="md:flex items-center gap-x-1 hidden" href="products">
            <FaShop />
            <span>فروشگاه</span>
          </Link>
          <Link className="md:flex items-center gap-x-1 hidden " href="blog">
            <FaBlog />
            <span>وبلاگ</span>
          </Link>
          <Link className="md:flex items-center gap-x-1 hidden" href="about-us">
            <FaUser />
            <span>درباره ما</span>
          </Link>
          <Link className="md:flex items-center gap-x-1 hidden" href="contact-us">
            <FaHeadphones />
            <span>تماس با ما</span>
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="hidden md:block">
            <FaMagnifyingGlass className="md:text-[18px]" />
          </div>
          <Link href={'/cart'} className="relative hidden md:block">
            <FaBasketShopping className="md:text-[18px]" />
          </Link>
          {isLogedIn ? (
           <button type="button" className=" items-center gap-x-1 mr-3 hidden md:flex" onClick={handleSignOut}>
           <FaRegUser className="md:text-[18px]" />
           <span>خروج</span>
         </button>
          ) : (
            <Link
              href="/sign"
              className=" items-center gap-x-1 mr-3 hidden md:flex"
            >
              <FaRegUser className="md:text-[18px]" />
              <span>ورود/ثبت نام</span>
            </Link>
          )}
        </div>
        <div
          className={`text-2xl md:hidden ${showNavbar ? "text-rose-500" : ""}`}
          onClick={() => handleShowNavbar()}
        >
          <BiMenuAltLeft />
        </div>
      </nav>

      {/* //mobile menu */}
      <nav
        className={`h-full fixed bottom-0 top-0 bg-pink-200 w-2/3 sm:w-1/2 z-20 md:hidden p-4 transition-all ease-in-out delay-200 ${
          showNavbar ? "translate-x-0" : "translate-x-[500px]"
        }  `}
      >
        <Link className="flex items-center gap-x-1 text-rose-500 mb-5" href="">
          <FaHome />
          <span> صفحه اصلی</span>
        </Link>
        <Link className="flex items-center gap-x-1 mb-5 " href="">
          <FaShop />
          <span>فروشگاه</span>
        </Link>
        <Link className="flex  items-center gap-x-1 mb-5 " href="">
          <FaBlog />
          <span>وبلاگ</span>
        </Link>
        <Link className="flex items-center gap-x-1 mb-5 " href="">
          <FaUser />
          <span>درباره ما</span>
        </Link>
        <Link className="flex  items-center gap-x-1 mb-5 " href="">
          <FaHeadphones />
          <span>تماس با ما</span>
        </Link>

        <Link href={'/cart'}  className="flex  items-center gap-x-1 mb-5 ">
          <div className="relative">
            <FaBasketShopping className="md:text-[18px]" />

          </div>
          <span>سبد خرید</span>
        </Link>

        <div className="flex items-center gap-x-1 mb-5">
          <FaRegUser className="md:text-[18px]" />

          {isLogedIn ? <span>خروج</span> : <span>ورود/ثبت نام</span>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
