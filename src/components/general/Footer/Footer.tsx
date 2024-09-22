import React from "react";
import Stat from "./Stats/Stats";
import { FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TiPinOutline } from "react-icons/ti";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-4 lg:px-20 mt-10 bg-pink-50/30 border-t-4">
      <Stat />
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-4 border-b-2 pb-4 gap-y-4 justify-items-center ">
        <div className="w-36">
          <div className="font-IRANSansMedium">
            <span className="text-rose-500">ارتباط </span>
            <span>با ما</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" text-rose-500">
                <FaPhoneVolume />
              </div>
              تلفن: 09165554444
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" text-rose-500">
                <MdMailOutline />
              </div>
              ایمیل: info@site.ir
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" text-rose-500">
                <MdMailOutline />
              </div>
              ایمیل: info@site.ir
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" text-rose-500">
                <TiPinOutline />
              </div>
              <p>آدرس: ایران - لرستان - خرم آباد - گلدشت</p>
            </div>
          </div>
        </div>

        <div className="w-36">
          <div  className="font-IRANSansMedium" >
            <span className="text-rose-500">خدمات </span>
            <span>مشتریان</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>ثبت نام / ورود</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>مرجوع کردن سفارش</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>پشتیبانی آنلاین</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>شکایت</span>
            </div>
          </div>
        </div>

        <div className="w-36">
          <div  className="font-IRANSansMedium">
            <span className="text-rose-500">همکاری </span>
            <span>با ما</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>همکاری در فروش</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>استخدام در شرکت</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>تامین محصولات</span>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <span>فرم همکاری</span>
            </div>
          </div>
        </div>

        <div className="w-36">
          <div  className="font-IRANSansMedium">
            <span className="text-rose-500">لینک </span>
            <span>های مفید</span>
          </div>
          <div className="mt-3">
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <Link href='/'>صفحه اصلی</Link>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <Link href='products'>فروشگاه</Link>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <Link href='about-us' >درباره ما</Link>
            </div>
            <div className="flex items-center gap-x-2 text-xs mb-2">
              <div className=" bg-rose-500 w-1.5 h-1.5 rounded-full"></div>
              <Link href='contact-us'>تماس با ما</Link>
            </div>
          </div>
        </div>

        <div className="w-36">
          <div  className="font-IRANSansMedium">
            <span className="text-rose-500">مجوز </span>
            <span>های ما</span>
          </div>
          <div className="mt-3 flex gap-x-5">
            <div className="border border-rose-500 w-20 h-24 flex justify-center items-center text-rose-500 text-sm">
              محل مجوز
            </div>
            <div className="border border-rose-500 w-20 h-24 flex justify-center items-center text-rose-500 text-sm">
              محل مجوز
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-sm pb-2">
        <p className="text-xs">تمامی حقوق برای این سایت محفوظ است</p>
        <div className="flex gap-x-2">
          <div className="bg-gray-600 text-white text-xs md:text-sm rounded-full p-1">
            <FaInstagram />
          </div>
          <div className="bg-gray-600 text-white text-xs md:text-sm rounded-full p-1">
            <FaFacebookF />
          </div>
          <div className="bg-gray-600 text-white text-xs md:text-sm rounded-full p-1">
            <FaXTwitter />
          </div>
          <div className="bg-gray-600 text-white text-xs md:text-sm rounded-full p-1">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
