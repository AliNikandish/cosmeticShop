import React from "react";
import { FaArrowsRotate, FaCircleCheck, FaShopify, FaTags, FaUserGroup } from "react-icons/fa6";
import StatItem from "./StatItem";

const Stat = () => {
  return (
    <div className="bg-white border-2 flex justify-between items-center mt-6 py-2 px-2 sm:px-12 md:px-16 h-[100px] shadow">
    
      <StatItem title='7سال' subTitle='در کنار شما' icon={<FaUserGroup />} />
      <StatItem title='بیش از 270' subTitle='محصول با کیفیت' icon={<FaShopify />} />
      <StatItem title='17 نوع' subTitle='تنوع کالایی' icon={<FaTags />} />
      <StatItem title='+4860' subTitle='سفارش موفق' icon={<FaCircleCheck />} />
      <StatItem title='97.3 %' subTitle='بدون مرجوعی' icon={<FaArrowsRotate />} />

    </div>
  )
};

export default Stat;
