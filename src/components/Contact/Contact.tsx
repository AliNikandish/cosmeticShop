import React from "react";
import { FaClock, FaHeadset, FaMapLocation } from "react-icons/fa6";
import ContactCard from "./ContactCard";
import { TiPin, TiPinOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="w-full px-4 lg:px-20 mt-10">
      <h2 className="text-center text-2xl">تماس با ما</h2>
      <p className="text-center mt-1 text-gray-500 text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-items-center gap-y-5 gap-x-5 xl">
      <ContactCard
        icon={<TiPin size={45} />}
        title="آدرس"
        desc="فلانشهر-فلان جا-فلان خیابان-فلان کوچه-پلاک 22"
      />
      <ContactCard
        icon={<FaHeadset size={45} />}
        title="پشتیبانی"
        desc="09161111111"
      />
      <ContactCard
        icon={<FaClock  size={45} />}
        title="ساعت کاری"
        desc="شنبه تا پنجشنبه 8 الی 20 صبح"
      />
      </div>
      <div className="mt-20 bg-gray-200  rounded-md h-[400px] p-5">
        <p className="text-center font-bold text-lg">سوالی دارید؟</p>
        <p className="text-center text-gray-500 text-xs mt-1">کافیست فرم زیر را پر کنید و دکمه ارسال را بزنید تا کارشناسان ما با شما تماس بگیرند</p>
        <div className="flex justify-center items-center gap-x-3 mt-4">
            <input className="w-1/3 p-1.5 rounded-xl text-sm" type="text" name="" id="" placeholder="نام و نام خانوادگی"/>
            <input className="w-1/3 p-1.5 rounded-xl text-sm" type="text" name="" id="" placeholder="آدرس ایمیل"/>
        </div>
        <div className="flex justify-center items-center gap-x-3 mt-4">
            <input className="w-1/3 p-1.5 rounded-xl text-sm" type="text" name="" id="" placeholder="شماره تماس"/>
            <input className="w-1/3 p-1.5 rounded-xl text-sm" type="text" name="" id="" placeholder="موضوع"/>
        </div>
        <div className="mt-4 text-center ">
        <textarea className="w-2/3 h-40 rounded-xl  p-1.5 text-sm" name="" id=""></textarea>
        </div>
        <div className="mt-2 text-center ">
            <button className="bg-rose-500 text-white w-2/3 p-1 rounded-xl">ارسال فرم</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
