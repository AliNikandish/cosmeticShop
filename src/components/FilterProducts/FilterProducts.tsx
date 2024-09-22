"use client";

import { useState } from "react";
import RangeSlider from "../RangeSlider";
import { FaXmark } from "react-icons/fa6";

const FilterProducts = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <button type="button" className="lg:hidden text-sm bg-slate-800 text-white py-1 px-5 rounded mt-4" onClick={() => handleShowNavbar()}>
        فیلتر بندی
      </button>

      <nav
        className={`h-full fixed bottom-0 top-0 bg-pink-200 w-2/3 sm:w-1/2 z-20 lg:hidden p-4 transition-all ease-in-out delay-200 ${
          showNavbar ? "translate-x-[16px]" : "translate-x-[520px]"
        }  `}
      >

<div className="text-center">
<div className="mb-4 cursor-pointer"  onClick={() => handleShowNavbar()}>

        <button type="button" className="bg-slate-800 text-white w-full py-1 rounded-md flex items-center justify-center gap-x-2"> <FaXmark />بستن فیلتر</button>
        </div>
          <input
            className="px-2 py-2 outline-0 bg-gray-100 text-gray-500 rounded-md text-xs w-full"
            type="search"
            name=""
            id=""
            placeholder="جستجو ..."
          />
        </div>
        <div className="mt-5">
          <p className="text-blue-900 font-IRANSansMedium">دسته های محصولات</p>
          <div className="mt-4 space-y-2">
          <div className="flex gap-x-2 text-sm ">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          </div>
        </div>
        <div className="mt-5">
        <p className="text-blue-900 font-IRANSansMedium">فیلتر بر اساس قیمت</p>
          <div className="mt-4">
            <RangeSlider/>
          </div>
        </div>
        <div className="mt-4">
        <button type="button" className="bg-rose-500 text-white w-full py-1 rounded-md">اعمال</button>
        </div>

       

      </nav>
    </div>
  );
};

export default FilterProducts;
