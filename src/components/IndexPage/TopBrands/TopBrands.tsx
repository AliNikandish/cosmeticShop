import React from "react";
import HeadSection from "../HeadSection";

const TopBrands = () => {
  return (
    <div className="w-full px-4 lg:px-20 mt-10 mb-20">
      <HeadSection
        subTitle="برترین برندها"
        title="برندهای فروشگاه"
        other="مشاهده برند ها"
        href="brands"
      />

      <div className="grid grid-cols-4 lg:grid-cols-8 gap-x-1 gap-y-2">
        <img src="brand/bourjois.jpg" alt="" />
        <img src="brand/calista.jpg" alt="" />
        <img src="brand/note.jpg" alt="" />
        <img src="brand/my.jpg" alt="" />
        <img src="brand/flormar.jpg" alt="" />
        <img src="brand/schon.jpg" alt="" />
        <img src="brand/essence.jpg" alt="" />
        <img src="brand/doucce.jpg" alt="" />
      </div>
    </div>
  );
};

export default TopBrands;
