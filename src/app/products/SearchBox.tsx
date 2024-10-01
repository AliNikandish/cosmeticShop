"use client";

import RangeSlider from "@/components/RangeSlider";
import Swal from "sweetalert2";

function submitHandler() {
  Swal.fire({
    text: "این بخش بزودی تکمیل میشه",
    confirmButtonText: "باشه",
  });
}

const SearchBox = () => {
  return (
    <div className="hidden lg:block w-1/4 border shadow-md h-[520px] sticky top-20 py-4 px-7 rounded-md">
      <div className="text-center">
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
          <RangeSlider />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="bg-rose-500 text-white w-full py-1 rounded-md"
          onClick={submitHandler}
        >
          اعمال
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
