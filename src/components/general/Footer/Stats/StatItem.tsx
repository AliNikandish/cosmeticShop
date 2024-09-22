import React, { ReactNode } from 'react'
import { FaUserGroup } from 'react-icons/fa6'


type StatItemProp = {
  icon:ReactNode;
  title:string;
  subTitle:string;
};

const StatItem = ({icon,title,subTitle}:StatItemProp) => {
  return (
    <div className="flex flex-col justify-center items-center" >
    <div className="text-rose-500 text-lg md:text-3xl flex">
      {icon}
    </div>
    <p className="text-sm md:text-sm">{title}</p>
    <span className="text-gray-500 text-[10px] md:text-xs ">{subTitle}</span>
  </div>
  )
}

export default StatItem