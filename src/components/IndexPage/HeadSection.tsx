import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";


type HeadSectionProp={
  subTitle:string
  title:string
  other:string
  href:string
}

const HeadSection = ({subTitle,title,other,href}:HeadSectionProp) => {
  return (
    <div>
      <p className="text-xs md:text-sm text-gray-500 mb-1">{subTitle}</p>
      <div className="flex justify-between mb-4">
        <p className="text-rose-500 text-sm md:text-base">
          {title} <span className="text-black">فروشگاه</span>
        </p>
        <div className="flex items-center gap-x-1 text-rose-600 bg-rose-100 px-1 rounded py-0.5 text-xs md:text-sm">
          <Link href={String(href)}>{other}</Link>
          <FaAngleLeft size={14} />
        </div>
      </div>
    </div>
  );
};

export default HeadSection;

