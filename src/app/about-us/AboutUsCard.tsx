import React, { ReactNode } from "react";
import { FaCircleCheck } from "react-icons/fa6";

type AboutUsCardProp = {
  icon:ReactNode;
  title:string;
  subTitle:string;
};
const AboutUsCard = ({ icon, title, subTitle }: AboutUsCardProp) => {
  return (
    <div className="border shadow w-36 h-36 px-2 py-3 mb-5">
      <div className="flex justify-center">{icon}</div>
      <p className="text-center mt-3 font-bold">{title}</p>
      <p className="text-center text-xs/5 text-gray-500 mt-3">{subTitle}</p>
    </div>
  );
};

export default AboutUsCard;
