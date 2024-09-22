import React from "react";
import { FaCircleCheck, FaHeadset, FaLock, FaStar } from "react-icons/fa6";
import SiteFeaturesItem from "./SiteFeaturesItem";

const SiteFeatures = () => {
  return (
    <div className="w-full h-[100px] bg-pink-100 px-20 pt-10 md:flex justify-between items-center hidden pb-[100px] md:pb-[150px] lg:pb-[200px] relative">
    
      <SiteFeaturesItem title='محصولات اورجینال' subTitle='ضمانت اورجینال بودن' iconName={<FaCircleCheck className="text-2xl lg:text-3xl text-pink-600" />} />
      <SiteFeaturesItem title='جدیدترین های دنیا' subTitle='محصولات بروز' iconName={<FaStar className="text-2xl lg:text-3xl text-pink-600" />} />
      <SiteFeaturesItem title='پشتیبانی سریع' subTitle='پشتیبانی 24 ساعته' iconName={<FaHeadset className="text-2xl lg:text-3xl text-pink-600" />} />
      <SiteFeaturesItem title='پرداخت امن' subTitle='درگاه معتبر بانکی' iconName={<FaLock className="text-2xl lg:text-3xl text-pink-600" />} />

      <div className="absolute w-full right-0 bottom-[-25px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L34.3,192C68.6,192,137,192,206,176C274.3,160,343,128,411,128C480,128,549,160,617,176C685.7,192,754,192,823,181.3C891.4,171,960,149,1029,144C1097.1,139,1166,149,1234,170.7C1302.9,192,1371,224,1406,240L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SiteFeatures;
