import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaCircleCheck, FaCirclePlay, FaHeadset, FaRegStar } from "react-icons/fa6";
import AboutUsCard from "./AboutUsCard";
import { RiLock2Line } from "react-icons/ri";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full  bg-pink-100 px-4 lg:px-20 pt-10 pb-5 lg:pb-12 xl:pb-20 relative">
        <div className="lg:flex gap-x-5">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-normal">
            <img className="lg:w-2/3" src="brand-lorem.png" alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:text-2xl text-base font-bold mb-5">
              <span className="text-rose-500">چهره شما </span>
              <span> ، ما را دوست خواهد داشت !</span>
            </div>

            <p className="text-gray-600 text-xs lg:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <div className=" flex gap-x-3 mt-5">
              <div className="p-2 font-bold w-[150px] bg-rose-500 text-white text-xs lg:text-sm rounded-3xl flex items-center justify-center gap-x-1">
                ویدیو معرفی
                <FaCirclePlay />
              </div>
              <div className="p-2 font-bold w-[150px] bg-white text-xs lg:text-sm rounded-3xl flex items-center justify-center gap-x-1">
                تماس با ما
                <FaPhone />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full right-0 bottom-[-60px] hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,128C480,128,549,160,617,176C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,144C1097.1,139,1166,149,1234,170.7C1302.9,192,1371,224,1406,240L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full px-4 lg:px-20 pt-10 mt-28">
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-28">
          {/* right section */}
          <div className="w-full md:w-1/2">
            <div className="lg:text-2xl text-base font-bold">
              <p className="">
                چگونه میتوانید به
                <br /> <span className="border-b-[3px] border-b-rose-500 pb-2">کیفیت</span> <span className="text-rose-500">
                  محصولات ما
                </span>{" "}
                اطمینان کنید !
              </p>
            </div>
            <div className="text-gray-500 text-sm mt-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            </div>
            <button className="text-xs font-bold p-2 bg-rose-500 text-white rounded-3xl mt-5">مشاهده محصولات</button>
          </div>
          {/* left section */}
          <div className="w-full md:w-1/2 flex gap-x-4 lg:gap-x-14  justify-center sm:justify-evenly ">
            <div>
              <AboutUsCard icon={ <FaCircleCheck className="text-2xl lg:text-3xl text-rose-600" />} title="محصولات اورجینال" subTitle="محصولات اورجینال رو از فروشگاه ما خرید کنید"/>
              <AboutUsCard icon={ <FaHeadset className="text-2xl lg:text-3xl text-rose-600" />} title="پشتیبانی تخصصی" subTitle="حرفه ای ترین پشتیبانی در فروشگاه اینترنتی"/>

            </div>

            <div className="mt-[-80px]">

            <AboutUsCard icon={ <FaRegStar className="text-2xl lg:text-3xl text-rose-600" />} title="محصولات بروز" subTitle="محصولات بروز رو از فروشگاه ما خرید کنید"/>
            <AboutUsCard icon={ <RiLock2Line  className="text-2xl lg:text-3xl text-rose-600" />} title="امنیت فروشگاه" subTitle="بالاترین سطح امنیتی حساب کاربری شما"/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 lg:px-20 pt-10">
        <div className="border-2">
          <p className="text-lg text-center font-bold">نظرات شما</p>
          <p className="mt-1 text-center text-rose-500 text-xs mb-16">نطرات مشتریان فروشگاه ما</p>
        </div>
      </div>
    </div>
  );
};

export default page;
